const { MongoClient } = require('mongodb');
class Connection {
    constructor() {
        if (!Connection.instance) {
            this.url = 'mongodb://localhost:27017';
            this.dbName = 'stepbystep';
            this.client = new MongoClient(this.url, { useUnifiedTopology: true });
            console.log("connection data");
            Connection.instance = this;
        }
        return Connection.instance;
    }
    async connect() {
        try {
            await this.client.connect();
            console.log('Connected to MongoDB');
            return this.client.db(this.dbName);
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
            throw err;
        }
    }
}

module.exports = Connection;
