import json

import pymongo
from pymongo import errors
mongodb_client = pymongo.MongoClient()
db_conn = mongodb_client["curso"]

with open("data/correct_data/gene.json", 'r') as gene_data_fp:
    genes_data = json.loads(gene_data_fp.read())

    for collection_name, collection_data in genes_data.items():
        db_conn[collection_name].insert_many(collection_data)


with open("data/wrong_data/gene.json", 'r') as gene_data_fp:
    gene_wrong_data = json.loads(gene_data_fp.read())
    gene_id_wrong_data = gene_wrong_data["wrong_id"]
    gene_sequence_wrong_data = gene_wrong_data["wrong_sequence"]
    try:
        db_conn["gene"].insert_one(gene_id_wrong_data)
    except errors.WriteError as write_error:
        print(write_error.details)

    try:
        db_conn["gene"].insert_one(gene_sequence_wrong_data)
    except errors.WriteError as write_error:
        print(write_error.details)