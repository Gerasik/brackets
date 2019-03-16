module.exports = function check(str, bracketsConfig) {
    // your solution
    var result;
    str = str.split('');
    var m = 0;
    outer: while(m < str.length){
    for (var j = 0; j<bracketsConfig.length ; j++)
      for (var i = 0; i<str.length; i++){
          if (str[i] == bracketsConfig[j][1] && str[i-1] == bracketsConfig[j][0]){
          str.splice(i-1,2);
          }
          else if (str[i] == bracketsConfig[j][1] && str[i-1] !== bracketsConfig[j][0]){
            result = false;
            break outer;
          }
    }
  result = true;
  } 
    
    
    return result;
  }
  
  // console.log(check('((()))()',[['(', ')']]));//true
  // console.log(check('())(',[['(', ')']]));//false 