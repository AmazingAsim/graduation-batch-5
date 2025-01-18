
function add(...nums){
   let result = nums.reduce((total,current)=>total+current);
   return result
}


export default add;