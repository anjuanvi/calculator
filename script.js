let currentInput=''
let currentOperator=''
let currentResult=0

function clearDisplay(){
document.getElementById("screen").value=''
currentInput=''
 currentOperator=''

}
function operationClick(operator){
    currentOperator=operator
    currentResult=parseFloat(currentInput)
    currentInput=''

  
}
function btnClick(val){
    
 currentInput=currentInput+val
 
 document.getElementById("screen").value=currentInput
}
function calculate(){
    let newInput=parseFloat(currentInput)
    switch(currentOperator){
        case '+' :
            currentResult=currentResult+newInput
            break;
        case '-' :
            currentResult=currentResult-newInput
            break
            case '/' :
            currentResult=currentResult/newInput
            break;
        case '*' :
            currentResult=currentResult*newInput
            break


    }
    document.getElementById("screen").value=currentResult
    currentInput=''
    currentOperator=''
}