### Data Structures

# Van Emde Boas Trees

Psuedo Code
-----------

```bash

                                           ^^
      ^^      ..                                       ..
              []                                       []
            .:[]:_          ^^                       ,:[]:.
          .: :[]: :-.     Van Emde Boas Trees     ,-: :[]: :.
        .: : :[]: : :`._                       ,.': : :[]: : :.
      .: : : :[]: : : : :-._               _,-: : : : :[]: : : :.
  _..: : : : :[]: : : : : : :-._________.-: : : : : : :[]: : : : :-._
  _:_:_:_:_:_:[]:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:[]:_:_:_:_:_:_
  !!!!!!!!!!!![]!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!![]!!!!!!!!!!!!!
  ^^^^^^^^^^^^[]^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[]^^^^^^^^^^^^^
              []                                       []
              []                                       []
              []                                       []
   ~~^-~^_~^~/  \~^-~^~_~^-~_^~-^~_^~~-^~_~^~-~_~-^~_^/  \~^-~_~^-~~- 
  ~ _~~- ~^-^~-^~~- ^~_^-^~~_ -~^_ -~_-~~^- _~~_~-^_ ~^-^~~-_^-~ ~^
     ~ ^- _~~_-  ~~ _ ~  ^~  - ~~^ _ -  ^~-  ~ _  ~~^  - ~_   - ~^_~
       ~-  ^_  ~^ -  ^~ _ - ~^~ _   _~^~-  _ ~~^ - _ ~ - _ ~~^ -
          ~^ -_ ~^^ -_ ~ _ - _ ~^~-  _~ -_   ~- _ ~^ _ -  ~ ^-
              ~^~ - _ ^ - ~~~ _ - _ ~-^ ~ __- ~_ - ~  ~^_-
                  ~ ~- ^~ -  ~^ -  ~ ^~ - ~~  ^~ - ~
      
      MST-PRIM(G,w,r)

      1 for each u in set G.V
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

     MST-KRUSKAL(G,w)

     1 A = 0
     2 for each vertex v in set G.V
     3   MAKE-SET(v)
     4 sort the edges of G.E in nondecreasing order by weight w
     5 for each edge (u,v) in set G.E, taken in nondecreasing order by weight
     6   if FIND-SET(u) != FIND-SET(v)
     7   A = A ∪ {(u,v)}
     8   UNION(u,v)
     9 return A

```


About
--------
```clojure

```


