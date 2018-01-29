// 1.

var kint = "kintamasis 'kint'";

document.getElementById('kint').innerHTML = kint;


// -------------------- //

// 2.

var num1, num2;

function getValue() {
  num1 = document.getElementById('num1').value;
  num2 = document.getElementById('num2').value;
}

function dauginti() {
  getValue();
  var result = num1 * num2;
  document.getElementById('answ').innerHTML = result;
}

function dalinti() {
  getValue();
  var result = num1 / num2;
  document.getElementById('answ').innerHTML = result;
}


// -------------------- //

// 3.

var masyvas1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function minusReiksme() {
  var result = [];
  for(var i = 0; i < masyvas1.length; i++) {
    result.push(masyvas1[i] * (-1));
  }

  document.getElementById('result3').innerHTML = result;


}

minusReiksme();


// -------------------- //

// 4.

function arDalinasi() {
  var result;
  for(var i = 0; i <= 1000; i++) {
    if(i % 4 == 0 && i % 5 == 0) {
      document.getElementById('result4').innerHTML += i + ", ";
    }
  }
}
arDalinasi();

// -------------------- //

// 5.

function createDiv() {
  var newElement = document.createElement("div");
  newElement.style.height = "200px";
  newElement.style.width = "200px";
  newElement.style.backgroundColor = "red";
  newElement.style.borderWidth = "10px";
  newElement.style.borderRadius = "50%";
  newElement.style.borderColor = "blue";
  newElement.style.borderStyle = "solid";
  document.getElementById("result5").appendChild(newElement);

}
createDiv();

// -------------------- //

// 6.


function getMiddleWord() {
  var stringInput = document.getElementById('stringInput').value.toString().split(' ')[1];
  document.getElementById('result6').innerHTML = stringInput;
}


// -------------------- //

// 7.

function varType(variable) {
  var whatType = typeof(variable);
  document.getElementById('result7').innerHTML = whatType;

}

// -------------------- //

// 8.

function getRandom(start, end) {
  var num1 = parseInt(start);
  var num2 = parseInt(end);
  console.log(num1, num2);
  var result = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;  // +1 ,kad kintamasis "end" isiskaiciuotu
  document.getElementById('result8').innerHTML = result;
}

// -------------------- //

// 9.
var randomMasyvas = [];
function addRandomNum() {
  var result = document.getElementById('result9');
  result.innerHTML = "";
  console.log(randomMasyvas.length);
  var randomNum = Math.floor(Math.random() * 100) + 1;

  if(randomNum > 10 && randomNum < 30) {
    randomMasyvas.push("abc");
  } else if(randomNum > 1 && randomNum < 9) {
    randomMasyvas.push(true);
  } else {
    randomMasyvas.push(randomNum);
  }

  for(var i = 0; i<randomMasyvas.length; i++) {
    result.innerHTML += "elementas: " + randomMasyvas[i] + ", tipas: " + typeof(randomMasyvas[i]) + "<br/>";
  }

}

function reset() {
  randomMasyvas = [];
  document.getElementById('result9').innerHTML = randomMasyvas;
}


// -------------------- //

// 10.
// cia buvo nelabai aisku:
/*Sukurkite objektą, kuriame būtų 3 įrašai.
FriendName: Andrius, FriendStatus: true
FriendName: Linas, FriendStatus: false
FriendName: Simas, FriendStatus: true*/
var objektas = {
  obj1: {"FriendName": "Andrius", "FriendStatus": true},
  obj2: {"FriendName": "Linas", "FriendStatus": false},
  obj3: {"FriendName": "Simas", "FriendStatus": true}
};

document.getElementById('result10').innerHTML =
objektas.obj1["FriendName"] + " yra mano draugas<br>" +
objektas.obj2["FriendName"] + " nėra mano draugas<br>" +
objektas.obj3["FriendName"] + " yra mano draugas<br>";


// -------------------- //

// 11.

var i = 0;
function kviestiKas2sek() {
  if(i == 0) {
    i++;
    document.getElementById('result11').innerHTML = "Funkcija iskviesta " + i + " k.";
    kviestiKas2sek();

  } else if(i == 5) {
    return false;
  } else {
    setTimeout(function(){
      i++;
      document.getElementById('result11').innerHTML = "Funkcija iskviesta " + i + " k.";
      kviestiKas2sek();
    }, 2000);
  }
}

// -------------------- //

// 12.
var zmones = [];
function Objektas(vardas, pavarde, amzius) {
  this.name = vardas;
  this.surname = pavarde;
  this.age = amzius;
}

function submit() { 
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var age = document.getElementById('age').value;

  var zmogus = new Objektas(name, surname, age);

  zmones.push(zmogus);
  sortZmones();

  var tableTop = "<table><tr><td>Vardas</td><td>Pavarde</td><td>Amzius</td></tr>";
  var tableData = "";
  for(var i = 0; i<zmones.length; i++){
    tableData += "<tr><td>"+zmones[i].name+"</td><td>"+zmones[i].surname+"</td><td>"+zmones[i].age+"</td></tr>";
  }
  var tableEnd = "</table>";
    document.getElementById('result12').innerHTML = tableTop + tableData + tableEnd;
}

function sortZmones() {
  zmones.sort(function (a, b) {
    return a.age - b.age;
  });
  console.log(zmones);
}
