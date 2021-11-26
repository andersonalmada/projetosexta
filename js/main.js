function ok() {
  var myObj = { name: "John", age: 31, city: "New York" };
  var myJSON = JSON.stringify(myObj);
  localStorage.setItem("almada", myJSON);
}

function ok2() {
  var myJSON = localStorage.getItem("almada");
  var myObj = JSON.parse(myJSON);
  document.getElementById("demo").innerHTML = myObj.city;
}
