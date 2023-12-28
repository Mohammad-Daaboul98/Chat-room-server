import { Client, Databases, ID } from "node-appwrite";
// const sdk = require("node-appwrite");
const API_ENDPOINT = process.env.API_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;
const DATABASE_ID = process.env.DATABASE_ID;
const API_KEY = process.env.API_KEY;

export default async ({ req, res, log, error }) => {
  // Init SDK
  const client = new Client();

  const databases = new Databases(client);

  client.setEndpoint(API_ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

  if (req.method == "GET") {
    const promise = databases.createCollection(
      DATABASE_ID,
      ID.unique(),
      "privateRoom"
    );
    promise.then(
      function (response) {
        return res.send(response);
      },
      function (error) {
        return res.send(error);
      }
    );
  }
};
