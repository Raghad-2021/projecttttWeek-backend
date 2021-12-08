const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.DB_URL).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
//||"mongodb://localhost:27017/storelDB"
// mongoose.connect(`mongodb://JR-Test:test@test-shard-00-00.j7bdj.mongodb.net:27017,test-shard-00-01.j7bdj.mongodb.net:27017,test-shard-00-02.j7bdj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-dd553b-shard-0&authSource=admin&retryWrites=true&w=majority`).then(
//   () => {
//     console.log("DB connected");
//   },
//   (err) => {
//     console.log(err);
//   }
// );

/*

mongoose.connect(`mongodb://JR-Test:test@test-shard-00-00.j7bdj.mongodb.net:27017,test-shard-00-01.j7bdj.mongodb.net:27017,test-shard-00-02.j7bdj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-dd553b-shard-0&authSource=admin&retryWrites=true&w=majority`).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);





*/