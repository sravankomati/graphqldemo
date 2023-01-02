const { buildSchema } = require("graphql");
module.exports = buildSchema(`
  type Blog {
    id: String,
    title: String,
    desc: String,
    createdAt: String
  }
type Response {
   message: String,
   Data: [Blog]
}
 type Query {
    getBlogs: Response,
    getBlogsIdBy(id:String):Response

 }
  type Mutation {
    addBlog(title: String,desc: String): String,
    updateBlog(id:String, title: String,desc: String): Response
    deleteBlogsIdBy(id:String):String
  }

`);
