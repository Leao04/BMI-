// Peso é em kg e preciso trabalhar com ele assim
// Altura é em cm e normalmente as pessoas usam 1.70 ou 1,70. Preciso trabalhar com isso
// O cálculo será feito da seguinte maneira: peso/altura*altura
// Preciso pegar o input do peso e dar valor; fazer o mesmo com o input da altura

function getValue() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const between = 18.5;
  const betweentwo = 24.9;
  const betweenthree = 25;
  const betweenfour = 29.9;
  const betweenfive = 30;
  const betweensix =  39.9;
  const valueFinal =
    parseFloat(weight) / (parseInt(height) * parseInt(height));
    if (weight.length == 0) {
        document.getElementById("answer").innerHTML = "You need to inform us about the weight"
    } else if (weight.length == 1 || weight.length == 0) {
        document.getElementById("answer").innerHTML = "You need to inform us about the height"
    }
    if (valueFinal.toFixed(4) * 10000 <= 18.5) {
        document.getElementById("answer").innerHTML = valueFinal.toFixed(4) * 10000 + " - You're in the underweight range"
    } else if (valueFinal.toFixed(4) * 10000 > between && valueFinal.toFixed(4) * 10000 < betweentwo ) {
        document.getElementById("answer").innerHTML = valueFinal.toFixed(4) * 10000 +  " - You're in the healthy weight range"
    } else if (valueFinal.toFixed(4) * 10000 > betweenthree && valueFinal.toFixed(4) * 10000 < betweenfour) {
        document.getElementById("answer").innerHTML = valueFinal.toFixed(4) * 10000 + " - You're in the overweight range"
    } else if (valueFinal.toFixed(4) * 10000 > betweenfive && valueFinal.toFixed(4) * 10000 < betweensix) {
        document.getElementById("answer").innerHTML = valueFinal.toFixed(4) * 10000 + " - You're in the obese range"
    }
  console.log(valueFinal);
}

button.addEventListener("click", getValue);
