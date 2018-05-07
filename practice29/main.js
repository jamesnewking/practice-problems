// HW 5/6/18

function do_math(input1,input2,input3){

var num1,num2,operator;
var operatorArr = ['+','-','*','x','X','/'];

function isItOperator(unknownInput){
    var returnBack = false;
    operatorArr.forEach(function(element){
        if(element === unknownInput){
            operator = element;
            //I made the mistake of returning true here
            //the problem is that the function(element) will return true
            //so it never gets passed back outside
            returnBack = true;
        }
    })
    return returnBack;
}

if (isItOperator(input1)){
    num1 = parseInt(input2);
    num2 = parseInt(input3);
} else if(isItOperator(input2)){
    num1 = parseInt(input1);
    num2 = parseInt(input3);
} else if(isItOperator(input3)){
    num1 = parseInt(input1);
    num2 = parseInt(input2);
} else {return "Can't find operator!"}

switch(operator){
    case '+' :
        return (num1 + num2);
        break
    case '-' :
        return (num1 - num2);
        break
    case '*' :
    case 'x' :
    case 'X' :
        return (num1 * num2);
        break
    case '/' :
        return (num1 / num2);
        break
    default :
        return ('Wrong operator!');
        break
}



}