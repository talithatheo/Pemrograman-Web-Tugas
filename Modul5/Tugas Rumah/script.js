// script.js

// Fungsi untuk membersihkan layar kalkulator
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Fungsi untuk menambahkan angka atau operator ke layar kalkulator
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// Fungsi untuk menghitung hasil ekspresi matematika di layar kalkulator
function calculate() {
  var expression = document.getElementById('display').value;
  var result = eval(expression); // eval digunakan untuk mengevaluasi ekspresi matematika dalam string
  document.getElementById('display').value = result;
}
