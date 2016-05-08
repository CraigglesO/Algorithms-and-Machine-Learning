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
                                  Bellman-Ford  `----'  Dijkstra
      
      DIJKSTRA(G,w,s)

      1 INITIALIZE-SINGLE-SOURCE(G,s)
      2 S = 0
      3 Q = G.V
      4 while Q != 0
      5   u = EXTRACT-MIN(Q)
      6   S = S union {u}
      7   for each vertex v in G.Adj[u]
      8   RELAX(u,v,w)


      BELLMAN-FORD(G,w,s)

      1 INITIALIZE-SINGLE-SOURCE(G,s)
      2 for i = 1 to |G.V| - 1
      3   for each edge (u,v) in set G.E
      4     RELAX(u,v,w)
      5   for each edge (u,v) in set G.E
      6     if v.d > u.d + w(u,v)
      7       return FALSE
      8 return TRUE


      DAG-SHORTEST-PATHS(G,w,s)

      1 topologically sort the vertices of G
      2 INITIALIZE-SINGLE-SOURCE(G,s)
      3 for each vertex u, taken in topologically sorted order
      4   for each vertex v in set G.adj[u]
      5     RELAX(u,v,w)


      INITIALIZE-SINGLE-SOURCE(G,s)

      1 for each vertex v in set G.V
      2    v.d = INF
      3    v.parent = NIL
      4 s.d = 0


      RELAX(u,v,w)

      1 if v.d > u.d + w(u,v)
      2   v.d = u.d + w(u,v)
      3   v.parent = u

```


About
--------
