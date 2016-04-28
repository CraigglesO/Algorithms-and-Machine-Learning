# Quick Sort

Psuedo Code
-----------

```bash
                    ┌─┐     
                    ┴─┴     
                    ಠ_ರೃ   QUICK SORTING
      
      QUICKSORT(A,p,r)

      1 if p < r
      2   q = PARTITION(A,p,r)
      3   QUICKSORT(A,p,q-1)
      4   QUICKSORT(A,q+1,r)

      PARTITION(A,p,r)

      1 x = A[r]
      2 i = p - 1
      3 for j = p to r - 1
      4   if A[j] <= x
      5     i = i + 1
      6     exchange A[i] with A[j]
      7 exchange A[i+1] with A[r]
      8 return i + 1


```


About
--------
```clojure
| stable? | inplace? | running time | extra space |
|      no |      yes |    O(N lg N) |        lg N |
```


Quicksort is the fastest general-purpose sort.