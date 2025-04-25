const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://shivaprasadshetty112:Shivu2002@cluster0.1wqnh2r.mongodb.net/ayurbot1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err));

// const mongoose = require("mongoose");
// mongoose
//   .connect(
//     "mongodb+srv://ayurbotassist:ayurbot1234@cluster0.b9mj2za.mongodb.net/ayurbot1",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("db is connected"))
//   .catch((err) => console.log(err));
