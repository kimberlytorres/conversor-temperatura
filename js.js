function ConverterParaCelsius() {
    var valorEmFahrenheit = parseInt(document.getElementById("valor").value);
    var valorEmCelsius = ((valorEmFahrenheit - 32) / 1.8);
    var valorConvertido = document.getElementById("convertidoEmCelsius");
    var resultado = "A temperatura em graus Celsius é " + valorEmCelsius.toFixed() + ".";
    valorConvertido.innerHTML = resultado;
}