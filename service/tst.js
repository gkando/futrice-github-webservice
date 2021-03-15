// const fetch = require("node-fetch");
// const path = require("path");
// const acorn = require("acorn");
// const walk = require("acorn-walk");
// const jsx = require("acorn-jsx");
l = console.log;
const Greeter = require("./api/queries");
const greeter = Greeter();
// l(greeter.greet()); // prints Hello World!
greeter.foo();
// const { repo, foo } = query;

// var gql = query.repo();
// .foo("tst");
// l(gql);

// const fetchContents = (query, callback) => {
//   var url = getUrl(query);
//   console.log(url);
//   fetch(url, {
//     headers: {
//       accept: "application/json",
//       "accept-language": "en-US,en;q=0.9"
//     }
//   })
//     .then(r => r.json())
//     .then(result => {
//       callback(result);
//     })
//     .catch(err => console.log(err));
// };

// var query = {};
// query.owner = "Lambda-School-Labs";
// query.repo = "future-hope-fe";
// query.path = "package.json";
// getUrl(query);
// fetchContents(query, parseFile);
// let filters = ["tree"];
// let nodes = entries.filter(obj => filters.includes(obj.type));

// console.log(nodes);

// var isobject = function(x){
//   return Object.prototype.toString.call(x) === '[object Object]';
// };

// var getkeys = function(obj, prefix){
//   var keys = Object.keys(obj);
//   prefix = prefix ? prefix + '.' : '';
//   return keys.reduce(function(result, key){
//       if(isobject(obj[key])){
//           result = result.concat(getkeys(obj[key], prefix + key));
//       }else{
//           result.push(prefix + key);
//       }
//       return result;
//   }, []);
// };

// var keys = getkeys(entries);

// function process(key,value) {
//   console.log(key + " : "+value);
// }

// function traverse(o,func) {
//   for (var i in o) {
//       func.apply(this,[i,o[i]]);
//       if (o[i] !== null && typeof(o[i])=="object") {
//           //going one step down in the object tree!!
//           traverse(o[i],func);
//       }
//   }
// }

// obj = entries;

// traverse(obj, process);

// console.log();
