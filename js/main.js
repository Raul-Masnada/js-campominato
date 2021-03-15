function campoMinato () {
var openApp = document.getElementById("openApp");

openApp.addEventListener("click", function() {
  var points = document.getElementById("points");
  var arrRnd = [];
  for (var i = 0; i < 16; i++) {

    var rndNums = Math.ceil(Math.random() * 100);
    if (!arrRnd.includes(rndNums)) {

      arrRnd.push(rndNums);
    }else {

      i--;
    }
  }
  console.log(arrRnd);

  var arrUser = [];

  for (var i = 0; i < 84; i++) {

    var userNums = parseInt(prompt("Inserire un numero tra 1 e 100"));

    if (!arrUser.includes(userNums)) {

      arrUser.push(userNums);
      if (arrRnd.includes(userNums)) {


        points.innerHTML = " Il tuo punteggio è di " + (arrUser.length - 1);
        openApp.innerHTML = "Rigioca";
        break
      }
    }else {

      alert("il tuo punteggio è");
      i--;
    }
  }
  if (arrUser.length == 84)  {

    points.innerHTML = "vieni con me al casinò";
  }
  console.log(arrUser);
})
}

campoMinato();
