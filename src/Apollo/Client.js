import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

console.log();

export default new ApolloClient({
  uri: "http://133.186.241.220:7000/",
  clientState: {
    defaults,
    resolvers,
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
