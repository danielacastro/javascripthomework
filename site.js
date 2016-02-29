//add
function add(num1, num2){
  //the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
  var result1 = parseFloat(num1) + parseFloat(num2),
      addString = num1 + '+' + num2 + '=' + result1;

  return addstring;
}
// substract
function substract(num1, num2){
    var result2 = parseFloat(num1) - parseFloat(num2),
        subString = num1 + '-' + num2 + '=' + result2;

    return subString;

}

// multiply
function multiply(num1,num2)
    var result3 = parseFloat(num1) * parseFloat(num2),
        multiString = num1 + '*' + num2 + '=' + result3;

    return multiString;

}

// divide
function divide(num1,num2)
    var result4 = parseFloat(num1) / parseFloat(num2),
        divString = num1 + '/' + num2 + '=' + result4;

    return divString;

}

// this function will grab the inputs, populate the result div
// and run an operation
function populatehtml(operation){
     var input1 = document.getElementById("first").value;
     var input2 = document.getElementById("second").value;
     var output = operation(input1, input2);
     document.getElementById("result").innerText = output; 
     if (isNaN(input1) || isNaN(input2)){
        text = "Put in the numbers";
    } else {
       value = "output";

       console.log(function populatehtml(operation))
  // hint: define three variables: input1, input2, and output
  // use output.innerText to set the text within it

  // if input1 or input2 is an empty string, output.innerText will be
  // set to a message that tells user they need to put in the numbers

  // remember the parameter operation is a function,
  // it needs its own arguments
}

// grab a button element
// to each button, attach a click event to which the appropriate operation is assigned
document.getElementById("add").onclick = function(){populatehtml(add)};
document.getElementById("substract").onclick = function(){populatehtml(substract)};
document.getElementById("multiply").onclick = function(){populatehtml(multiply)};
document.getElementById("divide").onclick = function(){populatehtml(divide)};
