https://leetcode.com/problems/evaluate-reverse-polish-notation/submissions/861095459/

/**
 * @param {string[]} tokens
 * @return {number}
 */
let operators = {
    "+": function add(a, b) {
      return a + b;
    },
    "-": function sub(a, b) {
      return a - b;
    },
    "*": function mul(a, b) {
      return a * b;
    },
    "/": function div(a, b) {
      let result = a / b;
      if (result < 0) {
        return Math.ceil(result);
      } else return Math.floor(result);
    }
  };
  var evalRPN = function(tokens) {
    let result = 0;
    let stack1 = [];
    while (tokens.length > 0) {
      let item = tokens.shift();
      // take the first from tokens and call it item.
      if (operators[item]) {
      // if item is in the operators object, take the first two from stack1 and do an operation
        let b = parseInt(stack1.pop());
        let a = parseInt(stack1.pop());
        result = operators[item](a, b);
        stack1.push(result);
      // and then push it into stack
      } else {
        stack1.push(item);
      // otherwise if item's not in the operators object just put it in stack to be popped off.
      }
    }
    return stack1.pop();
    // return the last in the stack
  };
