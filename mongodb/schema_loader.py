import json
from collections import OrderedDict

import pymongo

mongodb_client = pymongo.MongoClient()
db_conn = mongodb_client["curso"]


with open("schemas/gene.json", 'r') as gene_schema_fp:
    gene_json_schema = json.loads(gene_schema_fp.read())["gene"]


gene_schema_rules = OrderedDict([
        ('collMod', "gene"),
        ('validator', gene_json_schema["validator"]),
        ('validationLevel', gene_json_schema["validationLevel"]),
        ('validationAction', gene_json_schema["validationAction"])
    ])

db_conn.drop_collection("gene")
db_conn.create_collection("gene")
db_conn.command(gene_schema_rules)