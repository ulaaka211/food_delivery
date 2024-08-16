import { connectDatabase } from "./database";
import app from "./app";
import https from "https";

const port = 3010;

connectDatabase();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

setInterval(() => {
  https
    .get("https://food-delivery-dzet.onrender.com/", () => {
      console.log(`Pinged at ${new Date().toISOString()}`);
    })
    .on("error", (error: Error) => {
      console.error(`Ping error: ${error.message}`);
    });
}, 300000);
