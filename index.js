const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("./config/db");
const userSchema = require("./schemas/userSchema");
const userResolver = require("./Resolvers/userResolver");
const blogSchema = require("./schemas/blogSchema");
const BlogResolver = require("./Resolvers/BlogResolver");
const { verify } = require("jsonwebtoken");
const { ApolloServer } = require("apollo-server-express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "graphql url is /graphql" });
});

const startgraphqlserver1=async()=>{
  const server=new ApolloServer({
    typeDefs:blogSchema,
    resolvers:BlogResolver,
    playground: true,
    context:({req})=>{
      const tokenverify=verify(req.headers.authorization,"secret")
      return tokenverify
    }
  })
  await server.start()
  server.applyMiddleware({app,path:"/graphql1"})
}
const startgraphqlserver=async()=>{
  const server=new ApolloServer({
    typeDefs:userSchema,
    resolvers:userResolver,
    playground: true,
  })
  await server.start()
  server.applyMiddleware({app,path:"/graphql"})
}
startgraphqlserver1()
startgraphqlserver()
app.listen(3000, () => {
  console.log(`server is started `);
});

