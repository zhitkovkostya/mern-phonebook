1. Run MongoDB

```sudo mongo --eval "db.getSiblingDB('admin').shutdownServer()" && mongod - -dbpath=/var/lib/mongodb/data/db```

2. Serve API

```yarn serve```

3. Seve FrontEnd

```yarn start```