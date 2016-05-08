### Data Structures

# Fibonacci Heap

Psuedo Code
-----------

```bash

                       _____|\
                  _.--|  X  |:
                 <____|.----||
                        .---''---,                 FibonacciHeap
                         ;..__..'    _...
                       ,'/  ;|/..--''    \
                     ,'_/.-/':            :
                _..-'''/  /  |  \    \   _|/|           fib[0] = 1
               \      /-./_ \;   \    \,;'   \          fib[1] = 1
               ,\    / \:  `:\    \   //    `:`.        fib[n] = F[n-1] +F[n-2]
             ,'  \  /-._;   | :    : ::    ,.   .
           ,'     ::   /`-._| |    | || ' :  `.`.)
        _,'       |;._:: |  | |    | `|   :    `'
      ,'   `.     /   |`-:_ ; |    |  |  : \
      `--.   )   /|-._:    :          |   \ \
         /  /   :_|   ;`-._;   __..--';    : :
        /  (    ;|;-./_  _/.-:'o |   /     ' |
       /  , \._/_/_./--''/_|:|___|_,'        |
      :  /   `'-'--'----'---------'          |
      | :     O ._O   O_. O ._O   O_.      ; ;
      : `.      //    //    //    //     ,' /
    ~~~`.______//____//____//____//_______,'~
              //    //~   //    //
       ~~   _//   _//   _// ~ _//     ~
     ~     / /   / /   / /   / /  ~      ~~
          ~~~   ~~~   ~~~   ~~~
   

      
      FIB-HEAP-INSERT(H,x)

      1 x.degree = 0
      2 x.p = NIL
      3 x.child = NIL
      4 x.mark = FALSE
      5 if H.min == NIL
      6   create a root list for H containing just x
      7   H.min = x
      8 else insert x into H's root list
      9   if x.key < H.min.key
     10     H.min = x
     11 H.n = H.n + 1

```


About
--------
```clojure

                            | Make-Heap |  Insert  | Minimum | Extract-Min | Union | Decrease-Key |  Delete  |
Binary heap (worse case)    |      O(1) | O(log n) |    O(1) |    O(log n) |  O(n) |     O(log n) | O(log n) |
Fibonacci heap (ammortized) |      O(1) |     O(1) |    O(1) |    O(log n) |  O(n) |         O(1) | O(log n) |
```


