const { jsonToGraphQLQuery, VariableType } = require("json-to-graphql-query");

const frag = {
  __on: {
    __typeName: "Tree",
    entries: {
      name: true,
      oid: true,
      type: true,
      object: {
        __on: {
          __typeName: "Blob",
          text: true
        }
      }
    }
  }
};

const repo = {
  query: {
    __variables: {
      owner: "String!",
      name: "String!"
    },
    repository: {
      __args: {
        owner: new VariableType("owner"),
        name: new VariableType("name")
      },
      name: true,
      folder: {
        __aliasFor: "object",
        __args: {
          expression: "master:"
        },
        __on: {
          __typeName: "Tree",
          entries: {
            name: true,
            oid: true,
            type: true,
            object: {
              __on: {
                __typeName: "Blob",
                text: true
              }
            }
          }
        }
      }
    }
  }
};

// const query = function() {
//   // const gqlQuery = {
//   gql = {};

//   gql.repo = function() {
//     return jsonToGraphQLQuery(repo, { pretty: true });
//   };
//   gql.foo = function() {
//     return "foo";
//   };

//   return gql;
// };

const query = () => {
  return {
    greet() {
      console.log("Hello World!");
    },
    foo() {
      console.log("foo");
    }
  };
};

module.exports = query;

// module.exports = {
//   // const gqlQuery = {
//   repo: function() {
//     return jsonToGraphQLQuery(repo, { pretty: true });
//   },
//   foo: function() {
//     return "foo";
//   }
// };

// repo.query.repository.folder.__on.entries.object = frag;

// l(frag);
// console.log(JSON.stringify(f));

// const graphql_query = jsonToGraphQLQuery(repo, { pretty: true });

// console.log(graphql_query);

// module.exports = { gqlQuery };

// console.log(getRepo);

// `query GetFolderQuery($folderID: GitObjectID, $owner: String!, $repo: String!) {
//   repository(owner: $owner, name: $repo) {
//     name
//     folder: object(oid: $folderID) {
//       ... on Tree {
//         entries{
//           name
//           type

//         }
//       }
//     }
//   }
// }`

// `{
//   "folderID": "a78a722f6ee005b537aa32d3592ec27c480abab0",
//   "owner": "Lambda-School-Labs",
//   "repo": "future-hope-fe"
// }`

// const query = `query GetFilesQuery($branch: GitObjectID, $repo: String!) {
//   search(first: 1, type: REPOSITORY, query: $repo) {
//      edges {
//        node {
//          ... on Repository {
//            object(expression: "master:", oid: $branch) {
//              ... on Tree {
//                entries {
//                  name
//                  type
//                  object {
//                    ... on Blob {
//                      text
//                    }
//                  }
//                }
//              }
//            }
//          }
//        }
//      }
//    }
//  }`;
// const query = {
//   new: function(connection, connections) {
//     const id = this.getUUID();
//     connection.connectionId = id;
//     connections[id] = connection;
//     console.log(`client connected with connectionId: ${id}`);
//     return id, connections;
//   },
//   getUUID: function() {
//     const s4 = () =>
//       Math.floor((1 + Math.random()) * 0x10000)
//         .toString(16)
//         .substring(1);
//     return s4() + s4() + "-" + s4();
//   }
// };

// module.exports = { query };

// const getRepo = `query GetRepoQuery($folderID: GitObjectID, $owner: String!, $repo: String!) {
//   repository(owner: "Lambda-School-Labs", name: "future-hope-fe") {
//     name
//     folder: object(expression: "master:") {
//       ... on Tree {
//         entries {
//           name
//           oid
//           type
//           ${frag}
//         }
//       }
//     }
//   }
// }`;
