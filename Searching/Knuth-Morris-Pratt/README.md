# Knuth-Morris-Pratt

Psuedo Code
-----------

```bash

                                         _,aggdd888bbgg,,_
                                    ,ad88888YYYYYYYYYYY8888ba,
                                 ,d888P""'              ``""Y88b,
                               ,d888"'                       "Y888,
                              d88P'                            `Y88b,
                            ,d88'                                `Y88,
                           ,888'                                  `Y88,
                          ,d88'          KNUTH                     `Y8b,
                          d88'                 MORRIS               `88I
                         ,88P                         PRATT          I88
                         I88I                                        I88
                         I88I                                        I8I
                         `888,       Linear Time                     d8I
                          `888,           String Matching           d88'
                           `888,                                   d8PI
                           ,dP"8b,                               ,8P'd'
                         ,dP'   "Yb,                          _,d8" P'
                       ,dP' ,db,  "Yb,_                    ,ad8P" ,P'
                     ,dP' ,d8888b,  `"Yba,,__        __,ad88P"  ,d"
                   ,dP' ,d88888888b,    "88Y8888888888PP""   _,d"
                 ,dP' ,d888888888888P  ,d"8              _,gd"'
               ,dP' ,d888888888888P' ,d" ,8bbaagggggaaddP""'
             ,dP' ,d888888888888P' ,d" ,d"'
           ,dP' ,d888888888888P' ,d" ,d"
         ,dP' ,d888888888888P' ,d" ,d"   
       ,dP' ,d888888888888P' ,d" ,d"      
     ,dP' ,d888888888888P' ,d" ,d"
   ,dP' ,d888888888888P' ,d" ,d"
 ,dP' ,d888888888888P' ,d" ,d"
dP'  d888888888888P' ,d" ,d"
8"Ya, `888888888P' ,d" ,d"
8  "Ya, `88888P' ,d" ,d"
8a,  "Ya, `8P' ,d" ,d"
 "Ya,  "Ya,  ,d" ,d"
   "Ya,  "Y8P" ,d"
     "Ya,  8 ,d"
       "Ya,8d"
         "YP
      
      KMP-MATCHER(T,P)

      1 n = T.length
      2 m = P.length
      3 pi = COMPUTE-PREFIX-FUNCTION(P)
      4 q = 0                                       // number of characters matched
      5 for i = 1 to n                              // scan the text from left to right
      6   while q > 0 and P[q+1] != T[i]
      7     q = pi[q]                               // next character does not match
      8   if P[q+1] == T[i]
      9     q = q + 1                               // next character matches
     10   if q == m                                 // is all of P matched?
     11     print "Pattern occurs with shift" i - m
     12     q = pi[q]                               //look for the next match


     COMPUTE-PREFIX-FUNCTON(P)

     1 m = P.length
     2 let pi[1..m] be a new array
     3 pi[1] = 0
     4 k = 0
     5 for q = 2 to m
     6   while k > 0 and P[k+1] != P[q]
     7     k = pi[k]
     8   if P[k+1] == P[q]
     9     k = k + 1
    10   pi[q] = k
    11 return pi


```


About
--------
```clojure

```
