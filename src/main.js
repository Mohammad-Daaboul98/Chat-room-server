// import { Client, Databases, ID } from "node-appwrite";

// // const sdk = require("node-appwrite");
// const API_ENDPOINT = process.env.API_ENDPOINT;
// const PROJECT_ID = process.env.PROJECT_ID;
// const DATABASE_ID = process.env.DATABASE_ID;
// const API_KEY = process.env.API_KEY;

// export default async ({ req, res, log, error }) => {
//   // Init SDK
//   // const client = new Client();

//   // const databases = new Databases(client);

//   // client.setEndpoint(API_ENDPOINT).setProject(PROJECT_ID).setKey(API_KEY);

//   if (req.method == "POST") {
//     // const room_name = req.bodyRaw
//     // const response = await databases.createCollection(
//     //   DATABASE_ID,
//     //   ID.unique(),
//     //   room_name
//     // );
//     const formData = req.body;

//     log(formData);

//     return res.send("All the request parameters are logged to the Appwrite Console.");
//   }
// };

import { Client, Databases, Query, ID } from "node-appwrite";
import querystring from "node:querystring";

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Contact Form</title>
  </head>
  <body>
    <form action="/" method="POST">
      <input type="text" id="name" name="name" placeholder="Name" required>
      <input type="email" id="email" name="email" placeholder="Email" required>
      <textarea id="content" name="content" placeholder="Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </body>
</html>`;

export default async function ({ req, res ,log }) {
  if (req.method === "GET") {
    return res.send(html, 200, { "content-type": "text/html" });
  }

  if (
    req.method === "POST" &&
    req.headers["content-type"] === "application/x-www-form-urlencoded"
  ) {
    const formData = querystring.parse(req.body);

    const message = {
      name: formData.name,
      // email: formData.email,
      // content: formData.content
    };

    // const client = new Client();
    // client
    //   .setEndpoint('https://cloud.appwrite.io/v1')
    //   .setProject(process​.env.APPWRITE_FUNCTION_PROJECT_ID)
    //   .setKey(process​.env.APPWRITE_API_KEY);

    // const databases = new Databases(client);
    // const document = await databases.createDocument('[DATABASE_ID]', '[MESSAGES_COLLECTION_ID]', ID.unique(), message);
    log(message.name);
    return res.send("Message sent");
  }

  // return res.send('Not found', 404);
}
