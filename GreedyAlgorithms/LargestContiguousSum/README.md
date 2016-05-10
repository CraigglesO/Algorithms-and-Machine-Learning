# Largest Sum for a Contguous Subarray

Psuedo Code
-----------

```bash
             *     ,MMM8&&&.            *
                  MMMM88&&&&&    .
                 MMMM88&&&&&&&
     *           MMM88&&&&&&&&      Kadane's Algorithm
                 MMM88&&&&&&&&
                 'MMM88&&&&&&'
                   'MMM8&&&'      *    _
          |\___/|                      \\
         =) ^Y^ (=   |\_/|              ||    '
          \  ^  /    )a a '._.-""""-.  //
           )=*=(    =\T_= /    ~  ~  \//
          /     \     `"`\   ~   / ~  /
          |     |         |~   \ |  ~/
         /| | | |\         \  ~/- \ ~\
         \| | |_|/|        || |  // /`
  jgs_/\_//_// __//\_/\_/\_((_|\((_//\_/\_/\_
  |  |  |  | \_) |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 
      
      KADANE(A)

      1 MAX = 0
      2 TEMP_MAX = 0
      3 for i from 0 to A length
      4 	TEMP_MAX = TEMP_MAX + A[i]
      5 	if TEMP_MAX < 0
      6 		TEMP_MAX = 0
      7 	if TEMP_MAX > MAX
      8 		MAX = TEMP_MAX


```


About
--------
```clojure

```


