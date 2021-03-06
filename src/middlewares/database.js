import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) {
    await client.connect();
  }

  req.dbClient = client;
  req.db = client.db("ubw");

  return next();
}

const middleware = nextConnect().use(database);

export default middleware;
