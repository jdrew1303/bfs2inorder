"use strict"

var inorder = require("inorder-tree-layout")
  , bfs = require("bfs-tree-layout")

var SCRATCH = new Uint32Array(32)

function bfs2inorder(n, x) {
  for(var i=0; i<32; ++i) {
    if(x === 0) {
      var r = inorder.root(n)
      while(--i >= 0) {
        if(SCRATCH[i]&1) {
          r = inorder.left(n, r)
        } else {
          r = inorder.right(n, r)
        }
      }
      return r
    }
    SCRATCH[i] = x
    x = bfs.parent(n, x)
  }
  return -1
}

module.exports = bfs2inorder