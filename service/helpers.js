var url = require("url");
const fetch = require("node-fetch");

const foo = () => {
  return "foo";
};
const getContents = (query, cb) => {
  var adr = getUrl(query);
  return fetch(adr, {
    headers: {
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9"
    }
  })
    .then(r => r.json())
    .then(result => {
      return cb(result);
    })
    .catch(err => console.log(err));
};
// parse response for file
const parseFile = result => {
  let content = parseB64(result);
  let jsonContent = JSON.parse(content);
  console.log(jsonContent);
};
const parseDir = data => {
  let directory = data.map(item => {
    return item.download_url, item.url, item.name;
  });
  console.log(directory);
  return directory;
};

// helper functions

// decode base64 response for file contents
const parseB64 = res => {
  var data = res.content;
  let content = Buffer.from(data, "base64").toString("ascii");
  return content;
};

// filter json by keys & return flat arr of values
const filterObj = (obj, keys) => {
  return Object.keys(obj)
    .filter(k => keys.includes(k))
    .flatMap(k => Object.keys(obj[k]));
  // Node 11+ required for flatMap
};

const getUrl = query => {
  var q = url.parse(query, true);
  let [owner, repo, path = ""] = q.path.split("/").filter(i => i);
  var adr = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  return adr;
};

module.exports = {
  foo,
  getContents,
  parseFile,
  parseDir
};
