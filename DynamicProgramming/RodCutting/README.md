### DYNAMIC PROGRAMMING

# ROD CUTTING

Psuedo Code
-----------

```bash
.    .    *  .   .  .   .  *     .  .        . .   .     .  *   .     .  .   .
   *  .    .    *  .     .         .    * .     .  *  .    .   .   *   . .    .
. *      .   .    .  .     .  *      .      .        .     .-o--.   .    *  .
 .  .        .     .     .      .    .     *      *   .   :O o O :      .     .
____   *   .    .      .   .           .  .   .      .    : O. Oo;    .   .
 `. ````.---...___      .      *    .      .       .   * . `-.O-'  .     * . .
   \_    ;   \`.-'```--..__.       .    .      * .     .       .     .        .
   ,'_,-' _,-'             ``--._    .   *   .   .  .       .   *   .     .  .
   -'  ,-'                       `-._ *     .       .   *  .           .    .
    ,-'            _,-._            ,`-. .    .   .     .      .     *    .   .
    '--.     _ _.._`-.  `-._        |   `_   .      *  .    .   .     .  .    .
        ;  ,' ' _  `._`._   `.      `,-''  `-.     .    .     .    .      .  .
     ,-'   \    `;.   `. ;`   `._  _/\___     `.       .    *     .    . *
     \      \ ,  `-'    )        `':_  ; \      `. . *     .        .    .    *
      \    _; `       ,;               __;        `. .           .   .     . .
       '-.;        __,  `   _,-'-.--'''  \-:        `.   *   .    .  .   *   .
          )`-..---'   `---''              \ `.        . .   .  .       . .  .
        .'                                 `. `.       `  .    *   .      .  .
       /                                     `. `.      ` *          .       .
      /                                        `. `.     '      .   .     *
     /             ROD CUTTING                   `. `.   _'.  .       .  .    .
    |                                              `._\-'  '     .        .  .
    |                                                 `.__, \  *     .   . *. .
    |                                                      \ \.    .         .
    |                                                       \ \ .     * jrei  *
      
      CUT-ROD(p,n) (NAIVE)

      1 if n == 0
      2   return 0
      3 q = -INF
      4 for i = 1 to n
      5   q = MAX(q,p[i]+CUT-ROD(p,n-1))
      6 return q


      MEMOIZED-CUT-ROD(p,n)

      1 let r[0..n] be a new array
      2 for i = 0 to n
      3   r[i] = -INF
      4 return MEMOIZED-CUT-ROD-AUX(p,n,r)

      MEMOIZED-CUT-ROD-AUX(p,n,r)

      1 if r[n] >= 0
      2   return r[n]
      3 if n == 0
      4   q = 0
      5 else q = -INF
      6   for i = 1 to n
      7     q = max(q,p[i] + MEMOIZED-CUT-ROD-AUX(p,n-i,r))
      8 r[n] = q
      9 return q

      BOTTOM-UP-CUT-ROD(p,n)

      1 let r[0..n] be a new array
      2 r[0] = 0
      3 for j = 1 to n
      4   q = -INF
      5   for i - 1 to j
      6     q = max(q,p[i] + r[j-1])
      7   r[j] = q
      8 return r[n]


```


About
--------
```clojure

O(n)

```


