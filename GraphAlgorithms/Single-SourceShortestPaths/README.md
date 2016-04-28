# Single Source Shortest Paths

Psuedo Code
-----------

```bash
                                        ___                ___
                                      ,' | `.            ,' | `.
                                     | --+-- |__,-""-.__| --+-- |
                             _________\_.----'----------`----._/_________
                             \==========================================/
                              `----------------------------------------'
                                            \\ `-.__.-' //
                                             \\ _/--\_ //
                                              \/ ,--. \/
                                              | |    | |
                                               \ `--' /
                                                `----'  Dijkstra
      
      DIJKSTRA(G,w,s)

      1 INITIALIZE-SINGLE-SOURCE(G,s)
      2 S = 0
      3 Q = G.V
      4 while Q != 0
      5   u = EXTRACT-MIN(Q)
      6   S = S union {u}
      7   for each vertex v in G.Adj[u]
      8   RELAX(u,v,w)


```


About
--------
