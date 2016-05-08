### Data Structures

# Binary Heap

Psuedo Code
-----------

```bash


                                                     ___ 
   Binary Heap                                    ,o88888 
                                               ,o8888888' 
                         ,:o:o:oooo.        ,8O88Pd8888" 
                     ,.::.::o:ooooOoOoO. ,oO8O8Pd888'" 
                   ,.:.::o:ooOoOoOO8O8OOo.8OOPd8O8O" 
                  , ..:.::o:ooOoOOOO8OOOOo.FdO8O8" 
                 , ..:.::o:ooOoOO8O888O8O,COCOO" 
                , . ..:.::o:ooOoOOOO8OOOOCOCO" 
                 . ..:.::o:ooOoOoOO8O8OCCCC"o 
                    . ..:.::o:ooooOoCoCCC"o:o 
                    . ..:.::o:o:,cooooCo"oo:o: 
                 `   . . ..:.:cocoooo"'o:o:::' 
                 .`   . ..::ccccoc"'o:o:o:::' 
                :.:.    ,c:cccc"':.:.:.:.:.' 
              ..:.:"'`::::c:"'..:.:.:.:.:.' 
            ...:.'.:.::::"'    . . . . .' 
           .. . ....:."' `   .  . . '' 
         . . . ...."' 
         .. . ."'    
        . 

      
      PARENT(i)

      1 return FLOOR[(i-1)/2]

      LEFT(i)

      1 return 2i + 1

      RIGHT(i)

      1 return 2i + 2

```


About
--------
```clojure

                            | Make-Heap |  Insert  | Minimum | Extract-Min | Union | Decrease-Key |  Delete  |
Binary heap (worse case)    |      O(1) | O(log n) |    O(1) |    O(log n) |  O(n) |     O(log n) | O(log n) |
Fibonacci heap (ammortized) |      O(1) |     O(1) |    O(1) |    O(log n) |  O(n) |         O(1) | O(log n) |
```


