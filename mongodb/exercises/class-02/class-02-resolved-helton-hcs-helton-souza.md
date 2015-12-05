# MongoDB - Aula 02 - Exercício
autor: Helton Souza

## Listagem das databases (passo 2)

```
helton(mongod-3.0.7) test> use be-means-pokemons
switched to db be-means-pokemons

helton(mongod-3.0.7) be-means-pokemons> show dbs
local             → 0.078GB
be-mean-instagram → 0.078GB
be-mean           → 0.078GB
```

## Listagem das coleções (passo 3)

```
helton(mongod-3.0.7) be-means-pokemons> show collections
```

## Cadastro dos pokemons (passo 4)

```
helton(mongod-3.0.7) be-means-pokemons> var pokemons = [
...     {name: 'Ivysaur', description: 'Seed Pokémon', type: 'grass', attack: 62, height: 0.99 },
...     {name: 'Charizard', description: 'Flame Pokémon', type: 'fire', attack: 84, height: 1.70 },
...     {name: 'Wartortle', description: 'Turtle Pokémon', type: 'water', attack: 63, height: 0.99 },
...     {name: 'Blastoise', description: 'Shellfish Pokémon', type: 'water', attack: 83, height: 1.60 },
...     {name: 'Metapod', description: 'Cocoon Pokémon', type: 'bug', attack: 20, height: 0.71 }
... ]
helton(mongod-3.0.7) be-means-pokemons> db.pokemons.insert(pokemons)
Inserted 1 record(s) in 435ms
BulkWriteResult({
  "writeErrors": [ ],
  "writeConcernErrors": [ ],
  "nInserted": 5,
  "nUpserted": 0,
  "nMatched": 0,
  "nModified": 0,
  "nRemoved": 0,
  "upserted": [ ]
})
```

## Lista dos pokemons (passo 5)

```
helton(mongod-3.0.7) be-means-pokemons> db.pokemons.find()
{
  "_id": ObjectId("5662fdffbb91c6721fe69775"),
  "name": "Ivysaur",
  "description": "Seed Pokémon",
  "type": "grass",
  "attack": 62,
  "height": 0.99
}
{
  "_id": ObjectId("5662fdffbb91c6721fe69776"),
  "name": "Charizard",
  "description": "Flame Pokémon",
  "type": "fire",
  "attack": 84,
  "height": 1.7
}
{
  "_id": ObjectId("5662fdffbb91c6721fe69777"),
  "name": "Wartortle",
  "description": "Turtle Pokémon",
  "type": "water",
  "attack": 63,
  "height": 0.99
}
{
  "_id": ObjectId("5662fdffbb91c6721fe69778"),
  "name": "Blastoise",
  "description": "Shellfish Pokémon",
  "type": "water",
  "attack": 83,
  "height": 1.6
}
{
  "_id": ObjectId("5662fdffbb91c6721fe69779"),
  "name": "Metapod",
  "description": "Cocoon Pokémon",
  "type": "bug",
  "attack": 20,
  "height": 0.71
}
Fetched 5 record(s) in 5ms
```

## Pokemon (passo 6)

```
helton(mongod-3.0.7) be-means-pokemons> var query = {name: 'Charizard'}
helton(mongod-3.0.7) be-means-pokemons> var poke = db.pokemons.findOne(query)
helton(mongod-3.0.7) be-means-pokemons> poke
{
  "_id": ObjectId("5662fdffbb91c6721fe69776"),
  "name": "Charizard",
  "description": "Fire on the hole!",
  "type": "fire",
  "attack": 84,
  "height": 1.7
}
```

## Atualização do Pokemon (passo 7)

```
helton(mongod-3.0.7) be-means-pokemons> var query = {name: 'Charizard'}
helton(mongod-3.0.7) be-means-pokemons> var poke = db.pokemons.findOne(query)
helton(mongod-3.0.7) be-means-pokemons> poke.description
Flame Pokémon
helton(mongod-3.0.7) be-means-pokemons> poke.description = 'Fire on the hole!'
Fire on the hole!
helton(mongod-3.0.7) be-means-pokemons> db.pokemons.save(poke)
Updated 1 existing record(s) in 2ms
WriteResult({
  "nMatched": 1,
  "nUpserted": 0,
  "nModified": 1
})
helton(mongod-3.0.7) be-means-pokemons> db.pokemons.findOne(query)
{
  "_id": ObjectId("5662fdffbb91c6721fe69776"),
  "name": "Charizard",
  "description": "Fire on the hole!",
  "type": "fire",
  "attack": 84,
  "height": 1.7
}
```