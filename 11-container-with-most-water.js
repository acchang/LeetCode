/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    console.log(height)
    let maxArea = 0
    let curArea = 0
    for (let i = 0; i < 5; i++) {
    for (let i = 0; i<height.length-1; i++){
        for (let j=1;j<height.length; j++){
            curArea = Math.min(height[i], height[j])*(j-i)
            if (curArea>maxArea){maxArea=curArea}
        }
    }
    }
    return maxArea
}

// better, faster:

function maxArea(height){
    let low = 0;
    let high = height.length - 1;
    let ans = 0;
  
    while (low <= high) {
      const length = Math.min(height[low], height[high]);
      const breadth = high - low;
      const area = length * breadth;
  
      ans = Math.max(ans, area);
  
      if (height[low] < height[high]) low++;
      else high--;
    }
    return ans;
  };

  