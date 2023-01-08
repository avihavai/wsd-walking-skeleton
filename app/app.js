import { serve } from "./deps.js";
import { sql } from "./database.js";

const logNames = async () => {
  const result = await sql`SELECT * FROM names`;
  console.log(result);
};

const handleRequest = (request) => {
  console.log(`Request to ${request.url}`);
  logNames();
  return new Response("Hello world!");
};

console.log("Launching server on port 7777");
serve(handleRequest, { port: 7777 });
