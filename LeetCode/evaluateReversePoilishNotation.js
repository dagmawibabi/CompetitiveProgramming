/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    console.log(tokens)

    let workingTokens = [];
    let workingStack = [];
    let symbols = ["+","-","/","*"];
    let result = 0;

    for (i of tokens) {
        let includess = false;
        if (i.length > 1){
            for (k of i) {
                if(symbols.includes(k) == true) {
                    let a = i.split("");
                    let b = a.reverse();
                    for (j of b) {
                        workingTokens.push(j)
                    }
                    includess = true;
                }
            }
            if (includess == false){
                workingTokens.push(i);
            }
        } else {
            workingTokens.push(i);
        }
    }
    for ( i of workingTokens) {
        if (symbols.includes(i) == false) {
            workingStack.push(i)
            console.log("Added " + i + " to stack");
            console.log("Stack " + workingStack);
            
        } else {
            if (workingStack.length > 1) {
                let num1 = workingStack[workingStack.length - 2];
                let num2 = workingStack[workingStack.length - 1];
                console.log("Num1: " + num1 + "   Num2: " + num2 + "   symb: " + i);
                let op = num1 + i + num2;
                console.log("Operation: " + op)
                result = parseInt(eval(op))
                workingStack.pop();
                workingStack.pop();
                workingStack.push(result);
                console.log("Added " + result + " to stack");
                console.log("Stack " + workingStack);
                console.log(num1 + i + num2);
                console.log(result)
                // console.log(workingStack)
            }
        }
    }
    return workingStack[0];
};