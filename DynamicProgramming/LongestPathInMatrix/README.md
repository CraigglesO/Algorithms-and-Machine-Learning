### DYNAMIC PROGRAMMING

# Longest Path in Matrix

Psuedo Code
-----------

```bash
LONGEST PATH IN MATRIX    ,_   .  ._. _.  .        _  ,   .
                      , _-\','|~\~~ ~~ ~~/       ;-'-'  ~-',    ,;_;_,    ~~-
             /~~-\_/-'~'--' \~~| \,/' _-|  Scand/  /  |_/~-/-/~~      ~~--~~~~'---_
             / AK           ,/'-/~ '\./   '  , '|,'|~   '                ._/-, /~~
             ~/-'~\_, Canada'-,| '|. '     UK,\ /'~       Russia    /    /_  /~
           .-~      '|        '',\~|\        _\~Euro ,_ .  .              /|
                     '\        /'~           |_/~\\,-,~' \ "          ,_,/ |
                      |  USA  /  .           _-~'\_ _~|Mideast   China\ ) /Japan
                       \   __-\            ./      ~ |\  \_ India     /  ~
             .,      Mex'\ |,  ~-_       . |          \\_' ~|  /~\SE\~ ,
           Hawaii         ~-_'    ;Carib   \   Africa  '-,   \,'  /\/  |
                            '\_,~'\_        \_ _,       /'    '   |, /|' Oceania
                              /     \_        ~ |      /          \  ~'; -,_.
                              | South ~\         |    |  ,         '-_, ,; ~ ~\
                               \, Amer /         \    / /|             ,-, ,   -,
                                |    ,/           |  |' |/           ,-   ~ \   '.
                               ,|   ,/            \ ,/               \Austral|
                               /    |              ~                  -~~-, /   _
                               |  ,-'                                      ~    /
                               / ,'                                        ~
                               ',|  ~
                                 ~'
      
      LONGEST_PATH_SEARCH(i,j,ar,c)

      1 if i or j out of bounds
      2   return 0
      3 if [c at j,i] == undefined
      4   return [c at j,i]
      5 if [ar at j,i] + 1 == [ar at j+1,i]
      6   return [c at j,i] = 1 + LONGEST_PATH_SEARCH(i,j+1,ar,c)
      7 if [ar at j,i] + 1 == [ar at j-1,i]
      8   return [c at j,i] = 1 + LONGEST_PATH_SEARCH(i,j-1,ar,c)
      9 if [ar at j,i] + 1 == [ar at j,i+1]
     10   return [c at j,i] = 1 + LONGEST_PATH_SEARCH(i+1,j,ar,c)
     11 if [ar at j,i] + 1 == [ar at j,i-1]
     12   return [c at j,i] = 1 + LONGEST_PATH_SEARCH(i-1,j,ar,c)
     13 return [c at j,i] = 1


     LPS_SEARCH(ar)

     1 j = ar length
     2 i = ar[0] length
     3 c = [j][i] all set to null
     4 for y = 0 to j
     5   for x = 0 to i
     6     if [c at j,i] == undefined
     7       LONGEST_PATH_SEARCH(i,j,ar,c)
     8     result = max(result,[c at j,i])
     9 return result


```


About
--------
```clojure

O(n)

```


