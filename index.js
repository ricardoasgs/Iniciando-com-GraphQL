const express = require("express");
const expressGraphQL = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        user: String,
        users: [String]
    }
`);

const name = "Ricardo Garcia";
const otherName = "Outra pessoa";

const resolvers = {
  user() {
    return name;
  },
  users() {
    return [name, otherName];
  }
};

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

const port = 3000;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
