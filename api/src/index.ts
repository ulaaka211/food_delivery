import { connectDatabase } from "./database";
import app from "./app";

const port = 3010;

connectDatabase();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
