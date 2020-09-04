MONGOD="~/mongodb/bin/mongod"
MONGOD_DATA="~/mongodb-data"

database:
	$(MONGOD) --dbpath=$(MONGOD_DATA)
backend:
	cd ./backend && npm run dev
fontend:
	npm run start
fontend-install:
	npm run install