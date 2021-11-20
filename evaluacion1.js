console.log(`Elija una operacion por realizar:
1.- Suma
2.- Resta
3.- Multiplicacion
4.- Division
5.- Raiz Cuadrada
6.- Formula general
7.- Binomio al cuadrado perfecto`);

var op = parseInt(prompt("Selecciona una operacion"));

switch (op){
    case 1:
        var num1= parseInt(prompt("Primer numero: "));
        var num2= parseInt(prompt("Segundo numero: "));
            function ResultSuma(){
                var suma = num1+parseInt(num2);
                console.log(`${suma}`);
            }
            ResultSuma();
        break;

    case 2:
            var num1= parseInt(prompt("Primer numero: "));
            var num2= parseInt(prompt("Segundo numero: "));
                function ResultResta(){
                    var resta = num1-parseInt(num2);
                    console.log(`${resta}`);
                }
                ResultResta();
        break;

    case 3:
            var num1= parseInt(prompt("Primer numero: "));
            var num2= parseInt(prompt("Segundo numero: "));
                function ResultMulti(){
                    var multi = num1*parseInt(num2);
                    console.log(`${multi}`);
                }
                ResultMulti();
        break;

    case 4:
        var num1= parseInt(prompt("Primer numero: "));
        var num2= parseInt(prompt("Segundo numero: "));
            function ResultDivision(){
                var division = num1/parseInt(num2);
                console.log(`${division}`);
            }
            ResultDivision();
        break;
    
    case 5:
            var num1= parseInt(prompt("Numero deseado: "));
                function ResultRaiz(){
                    var raiz = num1*parseInt(num1);
                    console.log(`${raiz}`);
                }
                ResultRaiz();
        break;

    case 6:
                var num1= parseInt(prompt("Primer numero: "));
                var num2= parseInt(prompt("Segundo numero: "));
                var num3= parseInt(prompt("Tercer numero: "));
                    var ResultX1= (-num2 + (num2*num2) - (4*num1*num3))/(2.0*num1);
                    var ResultX2= (-num2 - (num2*num2) - (4*num1*num3))/(2.0*num1);

                alert("Resultado de X1: "+ResultX1);
                alert("Resultado de X2: "+ResultX2);

        break;

    case 7:
                    var num1= parseInt(prompt("Primer numero: "));
                    var num2= parseInt(prompt("Segundo numero: "));
                        var ResultBinomio = (num1*num1) + (2*num1*num2) + (num2*num2);
    
                    alert("Resultado: "+ResultBinomio);
    
        break;
}