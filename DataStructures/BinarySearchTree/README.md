### Data Structures

# Binary Search Tree

Psuedo Code
-----------

```bash


                 ____
                /___.`--.____ .--. ____.--(
                       .'_.- (    ) -._'.
                     .'.'    |'..'|    '.'.
              .-.  .' /'--.__|____|__.--'\ '.  .-.
             (O).)-| |  \    |    |    /  | |-(.(O)         BINARY
              `-'  '-'-._'-./      \.-'_.-'-'  `-'             SEARCH
                 _ | |   '-.________.-'   | | _                    TREE
              .' _ | |     |   __   |     | | _ '.
             / .' ''.|     | /    \ |     |.'' '. \
             | |( )| '.    ||      ||    .' |( )| |
             \ '._.'   '.  | \    / |  .'   '._.' /
              '.__ ______'.|__'--'__|.'______ __.'
             .'_.-|         |------|         |-._'.
            //\\  |         |--::--|         |  //\\
           //  \\ |         |--::--|         | //  \\
          //    \\|        /|--::--|\        |//    \\
         / '._.-'/|_______/ |--::--| \_______|\`-._.' \
        / __..--'        /__|--::--|__\        `--..__ \
       / /               '-.|--::--|.-'               \ \
      / /                   |--::--|                   \ \
     / /                    |--::--|                    \ \
 _.-'  `-._                 _..||.._                  _.-` '-._
'--..__..--'               '-.____.-'                '--..__..-'


      
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

```


