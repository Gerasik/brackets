// module.exports = 
function check(str, bracketsConfig) {
  // your solution
  var result;
  str = str.split('');
  for (var j = 0; j<bracketsConfig.length ; j++)
    for (var i = 0; i<str.length; i++){
        if (str[i] == bracketsConfig[j][1] && str[i-1] == bracketsConfig[j][0]){
        str.splice(i-1,2);
      }
  }
  result=str;
  
  
  return result;
}

console.log(check('((()))()',[['(', ')']]));//true
console.log(check('())(',[['(', ')']]));//false 