import { Client, Databases, Query, ID } from "node-appwrite";
import querystring from "node:querystring";

// const sdk = require("node-appwrite");
const API_ENDPOINT = process.env.API_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;
const DATABASE_ID = process.env.DATABASE_ID;
const API_KEY = process.env.API_KEY;

export default async function ({ req, res, log }) {
  // if (req.method === "GET") {
  //   return res.send(html, 200, { "content-type": "text/html" });
  // }

  if (req.method === "POST") {
    const formData = querystring.parse(req.body);

    const message = {
      name: formData.name,
      // email: formData.email,
      // content: formData.content
    };

    const client = new Client();

    const databases = new Databases(client);

    client.setEndpoint(API_ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

    const response = await databases.createCollection(
      DATABASE_ID,
      ID.unique(),
      message.name
    );

    return res.send(response);
  }
}
