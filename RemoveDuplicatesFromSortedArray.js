/* Remove Duplicates from Sorted Array

Given a sorted array nums, remove the duplicates in-place such that each element appear only once 
and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array 
in-place with O(1) extra memory.
*/

const removeDuplicates = function(nums) {
    
    if (!nums.length) {
        return;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
          nums.splice(i, 1);
          i--
        }
    }
    return(nums.length)
  };
  
  let duplicatedArray = [1,1,1,2,2,3,3,3,3,3,5];
  console.log(`Initial array :`, duplicatedArray)

  let  lengthWithoutDuplicates= removeDuplicates(duplicatedArray);
  console.log(`After removing duplicates : `, duplicatedArray);
  console.log(`Length of the new array = `, lengthWithoutDuplicates);