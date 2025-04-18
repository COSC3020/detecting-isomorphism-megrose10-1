const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//Are isomorphic
let graph1 = {
  '0': ['1', '2'], 
  '1': [0],
  '2': ['0']
};

let graph2 = {
  'A': ['B', 'C'],
  'B': ['A'],
  'C': ['A'],
};
assert(are_isomorphic(graph1, graph2) == true);

//Different number of vertices, not isomorphic
let graph3 = {
  '4': ['5', '6', '7'],
  '5': ['4'],
  '6': ['4'],
  '7': ['4']
};

let graph4 = {
  '8': ['9', '10'],
  '9': ['8'],
  '10': ['8']
};
assert(are_isomorphic(graph3, graph4) == false);

//Same number of vertices, but not the same structures
let graph5 = {
  '5': ['6', '7'],
  '6': ['5', '8'],
  '7': ['5'],
  '8': ['6']
};

let graph6 = {
  'A': ['B', 'C'],
  'B': ['A', 'C', 'D'],
  'C': ['A', 'B'],
  'D': ['B']
};
assert(are_isomorphic(graph5, graph6) == false);
