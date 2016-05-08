# Heap Sort

Psuedo Code
-----------

```bash
                    ┌─┐     
                    ┴─┴     
                    ಠ_ರೃ   HEAP SORTING
      
      MAX-HEAPIFY(A,i,heap-size)

      1 l = LEFT(i)
      2 r = RIGHT(i)
      3 if l <= heap-size and A[l] > A[i]
      4   largest = l
      5 else largest = i
      6 if r <= heap-size and A[r] > A[largest]
      7   largest r
      8 if largest != i
      9   exchange A[i] with A[largest]
     10   MAX-HEAPIFY(A,largest,heap-size)

      BUILD-MAX-HEAP(A)

      1 for i = [A.length/2] downto 0
      2   MAX-HEAPIFY(A,i,A.length)

      HEAP-SORT(A)

      1 BUILD-MAX-HEAP(A)
      2 heap-size = A.length
      3 for i = A.length downto 1
      4   exchange A[0] with A[i]
      5   heap-size = heap-size - 1
      6   MAX-HEAPIFY(A,0,heap-size)


```


About
--------
```clojure
| stable? | inplace? | running time | extra space |
|      no |      yes |    O(N lg N) |        lg N |
```


Heapsort is a good introduction to Binary Sort Trees.