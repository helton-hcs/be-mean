// [Insert]
var pikachu = {name: 'Pikachu', description: 'Rato elétrico bem fofinho', type: 'electric', attack: 55, height: 0.4 }
var bulbassauro = {name: 'Bulbassauro', description: 'Chicote de trepadeira', type: 'grass', attack: 49, height: 0.4 }
var charmander = {name: 'Charmander', description: 'Esse é o cão chupando manga de fofinho', type: 'fire', attack: 52, height: 0.6 }
var squirtle = {name: 'Squirtle', description: 'Ejeta água que passarinho não bebe', type: 'water', attack: 48, height: 0.5 }
db.pokemons.insert(pikachu)
db.pokemons.insert(bulbassauro)
db.pokemons.insert(charmander)
db.pokemons.insert(squirtle)

// [Save]
var caterpie = {name: 'Caterpie', description: 'Larva lutadora', type: 'insect', attack: 30, height: 0.3 }
db.pokemons.save(caterpie)

// [Query]
// find
var query = {name: 'Caterpie'}
var pokemon = db.pokemons.find(query)
pokemon.name // return nothing, because it's a cursor :/

// findOne
var pokemon = db.pokemons.findOne(query)
pokemon.name // return the object :)
pokemon.defense = 35
db.pokemons.save(pokemon)