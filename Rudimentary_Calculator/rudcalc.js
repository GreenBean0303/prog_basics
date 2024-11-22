document.getElementById("calcForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);
    var operation = document.getElementById("operation").value;
  
    var result;
    var operationSymbol;
  
    if (operation === "a") {
      result = x + y;
      operationSymbol = "+";
    } else if (operation === "s") {
      result = x - y;
      operationSymbol = "-";
    } else if (operation === "m") {
      result = x * y;
      operationSymbol = "*";
    } else if (operation === "d") {
      if (y !== 0) {
        result = x / y;
        operationSymbol = "/";
      } else {
        result = "Error,  0 ei saa jagada";
      }
    } else if (operation === "e") {
      result = x ** y;
      operationSymbol = "**";
    } else if (operation === "r") {
      result = x % y;
      operationSymbol = "%";
    } else {
      result = "Unknown operation";
    }
  
    if (typeof result === "number") {
      document.getElementById("result").textContent = `${x} ${operationSymbol} ${y} = ${result}`;
    } else {
      document.getElementById("result").textContent = result;
    }
  });