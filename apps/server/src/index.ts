import { createApp } from "./app.js";
import { parseEnvironment } from "@tbp/validation";

const env = parseEnvironment();
const app = createApp();

app.listen(env.API_PORT, () => {
  console.log(`TBP API listening on http://localhost:${env.API_PORT}`);
});
