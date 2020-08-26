var money = new Array();
var input;
while (input != "取消") {
  input = prompt("请输入员工工资");
  money[money.length] = input;
}

money -= money.length - 1;
document.write[money];

function newIndexof(arr, value) {
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] == value) {
      return i
    }
  }
  return -1
}