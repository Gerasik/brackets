module.exports =  function check(str, bracketsConfig) {
  // your solution
  var result = false;
  str = str.split('');
  var m = 1;
  outer: while(m < 100){
  for (var j = 0; j<bracketsConfig.length ; j++)
    for (var i = 0; i<str.length; i++){
        if (str[i] == bracketsConfig[j][1] && str[i-1] == bracketsConfig[j][0]){
        str.splice(i-1,2);
        }
        // else if (str[i] == bracketsConfig[j][1] && str[i-1] !== bracketsConfig[j][0]){
        //   result = false;
        //   break outer;
        // }
  }
  if (str.length == 0) {
    result = true;
    break outer;
  }
  m++;
} 
  
  // console.log(result);
  return result;
}
// check('()', [['(', ')']]) // -> true
// check('((()))()', [['(', ')']]) // -> true
// check('())(', [['(', ')']]) // -> false
// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
// check('[(])', [['(', ')'], ['[', ']']]) // -> false
// check('[]()', [['(', ')'], ['[', ']']]) // -> true
// check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// // special case: opening and closing bracket can be the same :)

// check('||', [['|', '|']]) // -> true
// check('|()|', [['(', ')'], ['|', '|']]) // -> true
// check('|(|)', [['(', ')'], ['|', '|']]) // -> false
// check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
// // console.log(check('((()))()',[['(', ')']]));//true
// // console.log(check('())(',[['(', ')']]));//false 