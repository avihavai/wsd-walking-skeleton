import { postgres } from "./deps.js";

const sql = postgres({}); // injecting config from env

export { sql };
