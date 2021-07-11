import pydgraph
import random

from os import listdir
from os.path import isfile

files=[file for file in listdir() if isfile(file)]
Files={}
for file in files:
    with open(f"./{file}","r") as read:
         Files[file]=read.read()

client_stub = pydgraph.DgraphClientStub('127.0.0.1:9080')
client = pydgraph.DgraphClient(client_stub)

client.alter(pydgraph.Operation(drop_all=True))
client.alter(pydgraph.Operation(schema=Files['Schema']))


Mutation_files=['Categories','Product','Store','Properties']
txn = client.txn()
try:
    Mutation='\n\n\n'.join([Files[s] for s in Mutation_files])
    response = txn.mutate(set_nquads=Mutation)
    txn.commit()

finally:
    txn.discard()
client_stub.close()

