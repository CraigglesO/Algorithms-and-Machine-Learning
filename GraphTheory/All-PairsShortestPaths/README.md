# All Pairs Shortest Paths

Psuedo Code
-----------

```bash

                                                 .
                                                 |~
                                                /|\
                                               |-.-|
                                               '-:-'
          All Pairs Shortest Paths              [|]
                                                [|]
                                                [|]
                                                [|]
                                                [|]
                                               .[|].
                                               :/|\:
                 Floyd Warshall                [/|\]
                                               [/|\]
                                             .:_#|#_:.
                                             |_ '-' _|
                                             /\:-.-:/\
                                            /\|_[|]_|/\
                                          _/\|~ [|] ~|/\_
                                          [''=-.[|].-='']
                                          :-._   |   _.-:
                                          //\;::-:-::;/\\
                                         /\.'-\\/|\//-'./\
                                       .'\/'   :\|/:   '\/'.
                                     .//\('    [\|/]    ')/\\.
                                    '':][\.'  .[\|/].  './][:''
                                        ''    :/\|/\:    ''
                                             .[\/|\/].
                                               '.|.'
                                                 '
      
      FLOYD-WARSHALL(W)

      1 n = W.rows
      2 D^(0) = W
      3 for k = 1 to n
      4    let D^(k) = d(i,j)^(k) be a new n * n matrix
      5    for i = 1 to n
      6       for j = 1 to n
      7          d(i,j)^(k) = min(d(i,j)^(k-1),d(i,k)^(k-1)+d(k,j)^(k-1))
      8 return D^(0)


```


About
--------
```clojure
Running time: O(V^3)

```


