# MongoDB - Aula 01 - Exercício
autor: Helton Carlos de Souza

## Importando os restaurantes

```
mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2015-12-05T11:20:02.083-0200    connected to: localhost
2015-12-05T11:20:02.095-0200    dropping: be-mean.restaurantes
2015-12-05T11:20:03.793-0200    imported 25359 documents
```

## Contando os restaurantes

```
helton(mongod-3.0.7) be-mean> db.restaurantes.find({}).count()
25359
```