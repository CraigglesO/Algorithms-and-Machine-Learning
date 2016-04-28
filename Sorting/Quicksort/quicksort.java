import java.util.*;
/**
 *<p>
 *this code implements quicksort with the pivot at
 *the middle element.
 *</p>
 *@author Ayush Anand <iamayushanand@gmail.com>
 *
 */
public class quicksort{

  int[] input;

  /**
   * <p>
   * sort function sorts an int[]  array
   * </p>
   *
   * @params int[] input
   *
   */
  public void sort(){
    
    /*
     * checks for wrong input 
     */
    if(input==null || input.length ==0){
      return;
    }
    
    quicksortUtil(0,input.length-1);
  
  }

  public quicksort(int[] input){
    this.input=input;
  }

  private void quicksortUtil(int start,int end){

    /*
     *takes the pivot as the middle number in the array
     */
    int pivot = input[start+(end-start)/2];

    int low=start;
    int high=end;

    
    while(low<=high){
      
      while(input[low]<pivot){
        low++;
      }
      while(input[high]>pivot){
        high--;
      }
      
      if(low<=high){
        swap(low,high);
        low++;
        high--;
      }
    }
    if(start<low){
      quicksortUtil(start,high);
    }
    if(low<end){
      quicksortUtil(low,end);
    }
  }

  /**
   * swaps two numbers in the array
   * */
  private void swap(int i,int j){
    int temp=input[j];
    input[j]=input[i];
    input[i]=temp;
  }
    
  /**
   *testing function
   * */
  public static void main(String[] args){
    
    int[] testdata = new int[]{113,234,243,122222223,3423,12323,2134,234124};
    quicksort quicksorter = new quicksort(testdata);
    quicksorter.sort();
    System.out.println(Arrays.toString(quicksorter.input));
  }
}