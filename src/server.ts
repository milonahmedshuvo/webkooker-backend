// getting-started.js
import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(`${config.mongo_database_url}`);

    app.listen(config.port, () => {
      console.log(`Webkooker app listening on port ${config.port}`);
    });
  } catch (err) {
    console.error(`Database connenting failed ${err}`);
  }
}

main().catch((err) => console.log(err));
