const lib = require('../lib.js');
const fs = require('fs');
const tensorjs = require('tensorjs');

const graph = fs.readFileSync('../../js_working_directory/add_graph.pb', 'utf8');
const sess = new lib.Session(graph);
const results = sess.run(
  {
    "a": tensorjs.IntTensor(5),
    "b": tensorjs.IntTensor(6)
  },
  ["o"]
);
console.log(results[0]);
