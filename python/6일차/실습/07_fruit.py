from pprint import pprint

fruits = [
    "Soursop",
    "Grapefruit",
    "Apricot",
    "Juniper berry",
    "Feijoa",
    "Blackcurrant",
    "Cantaloupe",
    "Salal berry",
]

fruit_count = {}
for fruit in fruits:
    #print(fruit)
    if fruit not in fruit_count:
        #print(fruit_count)
        fruit_count[fruit] = 1
    else:
       # print(fruit_count)
        fruit_count[fruit] += 1
        

pprint(fruit_count)