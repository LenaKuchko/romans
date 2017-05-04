var number = parseInt($("#number").val());
var ones = [];
var breakPoint = [[400, 500], [40, 50]];
var romans = [["CM","D", "C"],["XC", "L", "X"]];
function convert(number, array, breakPoint) {
  debugger;
  var result = "";
  if ((number - breakPoint[1])>=breakPoint[0]) {
    result+=array[0];
    } else if (number === breakPoint[0]) {
        for (var i = 0; i < (breakPoint[1] - number)/100; i++) {
          result+=array[2];
        }
      result+=array[1];
    } else if ((number - breakPoint[1])<0) {
        for (var i = 0; i < (number)/100; i++) {
          result+=array[2];
        }
    } else {
      result+=array[1];
        for (var i = 0; i < (number - breakPoint[1])/100; i++) {
          result+=array[2];
        }
      }
    return result;
  }

function getDividedInput(input) {
  var arr = [];
  var wholeNum = 0;
  for (var i = 1000, j = 0; j < 4; j++) {
    wholeNum = (Math.floor(input/i))*i;
    input-=wholeNum;
    arr.push(wholeNum);
    i = i/10;
  }
  return arr;
}

function getConvertedNumber(input, romans, breakPoint) {
  console.log(romans.tens);
  var dividedNumber = getDividedInput(input);
  var result = "";
  debugger;
  for (var i = 0, j = 0; i < dividedNumber.length; i++, j++) {
    result+=convert(dividedNumber[i+1], romans[i], breakPoint[j]);
  }
  return result;
}

$(function(){
  $("#form").submit(function(event){
    // debugger;
    console.log("serulsieru");
    // console.log(convert(800, ten));

    // console.log(getDividedInput(3333));
    console.log(getConvertedNumber(928, romans, breakPoint));
    // if (!number)
    // {
    //   alert("Please enter a number.")
    // } else {
    //
    // }
    event.preventDefault();
  });
});













// function convert100(number) {
//   // debugger;
//   var result = "";
//   if ((number - num)>=400) {
//     result+="CM";
//   } else if (number === 400) {
//     for (var i = 0; i < (num - number)/100; i++) {
//       result+="C"
//     }
//     result+=("D");
//   }
//   else if ((number - num)<0) {
//     for (var i = 0; i < (number)/100; i++) {
//       result+="C"
//     }
//   } else {
//     result+=("D");
//     for (var i = 0; i < (number - num)/100; i++) {
//       result+="C"
//     }
//   }
//   return result;
// }

// function convert10(number) {
//   // debugger;
//   var result = "";
//   if ((number - num)>=40) {
//     result+="XC";
//   } else if (number === 40) {
//     for (var i = 0; i < (num - number)/10; i++) {
//       result+="X"
//     }
//     result+=("L");
//   }
//   else if ((number - num)<0) {
//     for (var i = 0; i < (number)/10; i++) {
//       result+="X"
//     }
//   } else {
//     result+=("L");
//     for (var i = 0; i < (number - num)/10; i++) {
//       result+="X"
//     }
//   }
//   return result;
// }
