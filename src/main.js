import { Client, Databases, ID } from "node-appwrite";
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


  if (req.method == "GET") {
    // const room_name = req.bodyRaw
    // const response = await databases.createCollection(
    //   DATABASE_ID,
    //   ID.unique(),
    //   room_name
    // );
    console.log(req.bodyRaw);                     // Raw request body, contains request data
    console.log(JSON.stringify(req.body));        // Object from parsed JSON request body, otherwise string
    console.log(JSON.stringify(req.headers));     // String key-value pairs of all request headers, keys are lowercase
    console.log(req.scheme);                      // Value of the x-forwarded-proto header, usually http or https
    console.log(req.method);                      // Request method, such as GET, POST, PUT, DELETE, PATCH, etc.
    console.log(req.url);                         // Full URL, for example: http://awesome.appwrite.io:8000/v1/hooks?limit=12&offset=50
    console.log(req.host);                        // Hostname from the host header, such as awesome.appwrite.io
    console.log(req.port);                        // Port from the host header, for example 8000
    console.log(req.path);                        // Path part of URL, for example /v1/hooks
    console.log(req.queryString);                 // Raw query params string. For example "limit=12&offset=50"
    console.log(JSON.stringify(req.query));       // Parsed query params. For example, req.query.limit

    return res.send("All the request parameters are logged to the Appwrite Console.");
  }
};
