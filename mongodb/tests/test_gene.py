import unittest
import json

import jsonschema


class TestGene(unittest.TestCase):

    def setUp(self) -> None:
        with open("../schemas/gene.json", 'r') as gene_schema_fp:
            self.gene_schema = json.loads(gene_schema_fp.read())["gene"]["validator"]["$jsonSchema"]

        with open("../data/correct_data/gene.json", 'r') as gene_data_fp:
            self.gene_data = json.loads(gene_data_fp.read())["gene"]

        with open("../data/wrong_data/gene.json", 'r') as gene_id_wrong_data_fp:
            self.gene_id_wrong = json.loads(gene_id_wrong_data_fp.read())["wrong_id"]

        with open("../data/wrong_data/gene.json", 'r') as gene_sequence_wrong_data_fp:
            self.gene_sequence_wrong = json.loads(gene_sequence_wrong_data_fp.read())["wrong_sequence"]

    def test_gene_schema(self):
        """
        Testing Gene Schema content
        """
        try:
            jsonschema.Draft4Validator.check_schema(self.gene_schema)
        except jsonschema.exceptions.SchemaError:
            self.fail("Gene schema written incorrectly")

    def test_gene_against_schema(self):
        """
        Testing Gene Data against Gene Schema
        :return:
        """
        try:
            for gene_object in self.gene_data:
                jsonschema.validate(instance=gene_object, schema=self.gene_schema,
                                       format_checker=jsonschema.draft4_format_checker)
        except jsonschema.exceptions.ValidationError:
            self.fail("Gene data does not map against the schema")

    def test_gene_data_object_when_id_is_wrong(self):
        """
        Raise an exception when
        """
        with self.assertRaises(jsonschema.exceptions.ValidationError):
            jsonschema.validate(instance=self.gene_id_wrong, schema=self.gene_schema,
                                format_checker=jsonschema.draft4_format_checker)
            self.fail("Pattern from _id property did not raise an exception ")

    def test_gene_when_sequence_is_not_a_valid_nucleotide(self):
        with self.assertRaises(jsonschema.exceptions.ValidationError):
            jsonschema.validate(instance=self.gene_sequence_wrong, schema=self.gene_schema,
                                format_checker=jsonschema.draft4_format_checker)
            self.fail("Pattern from sequence property did not raise an exception ")


if __name__ == '__main__':
    unittest.main()