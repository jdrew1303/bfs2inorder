var bfs2inorder = require("../bfs2inorder.js")
  , bfs = require("bfs-tree-layout")

require("tap").test("bfs2inorder", function(t) {
  function check(N) {
    for(var i=0, j=bfs.begin(N); i<N; ++i, j=bfs.next(N, j)) {
      t.equals(bfs2inorder(N, j), i, "N="+N)
    }
  }
  
  var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 15, 16, 17, 50, 100, 1000]
  for(var i=0; i<cases.length; ++i) {
    check(cases[i])
  }
  
  t.end()
})