console.log("getting data..");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://admin:admin@products.jwfjq.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const data = () => {
  mongoose
    .connect(url, connectionParams)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(`Error connecting db ${err}`);
    });
};
export default data;
