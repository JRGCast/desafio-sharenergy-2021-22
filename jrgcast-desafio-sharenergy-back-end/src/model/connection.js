const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';

const DB_NAME = process.env.DB_NAME;

const connection = async () => {
  try {
    const conn = await MongoClient
      .connect(MONGO_DB_URL, OPTIONS);
    return conn.db(DB_NAME);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connection;