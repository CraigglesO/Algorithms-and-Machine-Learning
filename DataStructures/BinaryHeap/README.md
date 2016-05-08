### Data Structures

# Binary Heap

Psuedo Code
-----------

```bash

                            .---.         ,,
                 ,,        /     \       ;,,'   BINARY HEAP:
                ;, ;      (  o  o )      ; ;
                  ;,';,,,  \  \/ /      ,; ;
               ,,,  ;,,,,;;,`   '-,;'''',,,'
              ;,, ;,, ,,,,   ,;  ,,,'';;,,;''';
                 ;,,,;    ~~'  '';,,''',,;''''  
                                    '''

      
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


