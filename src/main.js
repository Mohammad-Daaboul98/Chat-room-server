import { Client, Databases, ID } from "node-appwrite";
import querystring from 'node:querystring';

// const sdk = require("node-appwrite");
const API_ENDPOINT = process.env.API_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;
const DATABASE_ID = process.env.DATABASE_ID;
const API_KEY = process.env.API_KEY;

export default async ({ req, res, log, error }) => {
  // Init SDK
  // const client = new Client();

  // const databases = new Databases(client);

  // client.setEndpoint(API_ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);


  if (req.method == "POST" && req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    // const room_name = req.bodyRaw
    // const response = await databases.createCollection(
    //   DATABASE_ID,
    //   ID.unique(),
    //   room_name
    // );
    const formData = JSON.stringify(req.body);

    log(formData);
    log(formData.name);              


    return res.send("All the request parameters are logged to the Appwrite Console.");
  }
};
