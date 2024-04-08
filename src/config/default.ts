import "dotenv/config";
const DBUSER = process.env.DB_USER;
const DBPASSWORD = process.env.DB_PASSWORD;

export default {
  PORT: 3000,
  DBURI: `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.fkzyiq3.mongodb.net/?retryWrites=true&w=majority`,
  env: "development",
};
