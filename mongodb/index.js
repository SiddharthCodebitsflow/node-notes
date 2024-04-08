const express = require('express');
const Connection = require('./config/connection');
const app = express();
const connection = new Connection();

connection.connect()
    .then(async (db) => {
        const collections = await db.listCollections().toArray();
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const getCollectionData = async () => {
    const db = await connection.connect();
    console.log(await db.collection('user').find().toArray());
}
// getCollectionData();
const createCollection = async () => {
    const data = [
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 }
    ];

    const db = await connection.connect();
    const collection = db.collection('register');
    collection.insertMany(data);
}
// createCollection();
const updateOrCreate = async () => {
    const data = [
        { name: 'John Doe', age: 35 },
        { name: 'Jane Smith', age: 25 },
        { name: 'siddharth', age: 25 }
    ];
    const db = await connection.connect();
    const collection = db.collection('register');
    const bulkOps = data.map(doc => ({
        updateOne: {
            filter: { name: doc.name },
            update: { $set: doc },
            upsert: true
        }
    }));
    console.log(bulkOps);
    const result = await collection.bulkWrite(bulkOps);
    console.log(result);
}
// updateOrCreate();

const deleteDublicateData = async () => {
    const db = await connection.connect();
    const collection = db.collection('register');

    const pipeline = [
        {
            $group: {
                _id: { name: '$name', age: '$age' },
                docIds: { $push: '$_id' },
                count: { $sum: 1 }
            }
        },
        {
            $match: {
                count: { $gt: 1 }
            }
        },
        {
            $project: {
                docIds: { $slice: ['$docIds', 1, { $size: '$docIds' }] }
            }
        },
        {
            $unwind: '$docIds'
        },
        {
            $replaceRoot: { newRoot: { _id: '$docIds' } }
        }
    ];

    await collection.aggregate(pipeline, { allowDiskUse: true }).forEach(async function (doc) {
        await collection.deleteOne({ _id: doc._id });
    });

    console.log('Duplicate data removed');
}
// deleteDublicateData();

app.listen(5000);