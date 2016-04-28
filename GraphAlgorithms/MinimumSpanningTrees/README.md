# Minimum Spanning Trees

Psuedo Code
-----------

```bash
                 _-====-__-======-__-========-_____-============-__
               _(           Minimum Spanning Trees                _)
            OO(                                                   )_
           0  (_                   Prim                            _)
         o0     (_                                                _)
        o         '=-___-===-_____-========-___________-===-dwb-='
      .o                                _________
     . ______          ______________  |         |      _____
   _()_||__|| ________ |            |  |_________|   __||___||__
  (BNSF 1995| |      | |  HYPE | __Y______00_| |_         _|
/-OO----OO""="OO--OO"="OO--------OO"="OO-------OO"="OO-------OO"=P
#####################################################################
      
      MST-PRIM(G,w,r)

      1 for each u in G.V
      2   u.key = inf
      3   u.parent = Nil
      4 r.key = 0
      5 Q = G.V
      6 while Q != 0
      7 u = EXTRACT-MIN(Q)
      8 for each v in G.Adj[u]
      9   if v in Q and w(u,v) < v.key
     10     v.parent = u
     11     v.key = w(u,v)


```


About
--------
```clojure

| stable? | inplace? | running time | extra space |
|      no |      yes |    O(N lg N) |        lg N |
```


