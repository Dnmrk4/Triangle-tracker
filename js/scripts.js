// Student:Danmrk Mutai
// Javascript styles

function tracker() {

var num1=document.getElementById("line1").value;
var num2=document.getElementById("line2").value;
var num3=document.getElementById("line3").value;

var side1=parseInt(num1);
var side2=parseInt(num2);
var side3=parseInt(num3);

if (side1 === side2 && side2 === side3 && side3 === side1){
  alert('Equilateral tiangle');
}else if (side1 === side2 && side1 !== side3) {
  alert('Isosceles triangle');
}else if (side1 === side3 && side1 !== side2) {
  alert('Isosceles triangle');
}else if (side2 === side3 && side2 !== side1) {
  alert('Isosceles triangle');
}else if (side1 !== side2 && side2 !== side3 && side1 !== side3 && side1 + side2 > side3 && side2 + side3 > side1) {
  alert('Scalene triangle');
}else if (side1 + side2 <= side3 || side1 + side3 <=side2 || side2 + side3 <=side1) {
  alert('NOT  a triangle');
}
}
