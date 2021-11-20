console.log(`Escoge la operación que desee:
1.- Suma
2.- Resta
3.- Multiplicacion
4.- Division
5.- Raiz Cuadrada
6.- Formula general
7.- Binomio al cuadrado perfecto`);

var op = parseInt(prompt("Selecciona una operación:"));

switch (op){
    case 1:
        var num1= parseInt(prompt("Primer número: "));
        var num2= parseInt(prompt("Segundo número: "));
            function RSuma(){
                var suma = num1+parseInt(num2);
                console.log(`${suma}`);
            }
            RSuma();
        break;

    case 2:
            var num1= parseInt(prompt("Primer número: "));
            var num2= parseInt(prompt("Segundo número: "));
                function RResta(){
                    var resta = num1-parseInt(num2);
                    console.log(`${resta}`);
                }
                RResta();
        break;

    case 3:
            var num1= parseInt(prompt("Primer número: "));
            var num2= parseInt(prompt("Segundo número: "));
                function RMulti(){
                    var multi = num1*parseInt(num2);
                    console.log(`${multi}`);
                }
                RMulti();
        break;

    case 4:
        var num1= parseInt(prompt("Primer número: "));
        var num2= parseInt(prompt("Segundo número: "));
            function RDivision(){
                var division = num1/parseInt(num2);
                console.log(`${division}`);
            }
            RDivision();
        break;
    
    case 5:
            var num1= parseInt(prompt("Número deseado: "));
                function RRaiz(){
                    var raiz = num1*parseInt(num1);
                    console.log(`${raiz}`);
                }
                RRaiz();
        break;

    case 6:
                var num1= parseInt(prompt("Primer número: "));
                var num2= parseInt(prompt("Segundo número: "));
                var num3= parseInt(prompt("Tercer número: "));
                    var ResultX1= (-num2 + (num2*num2) - (4*num1*num3))/(2.0*num1);
                    var ResultX2= (-num2 - (num2*num2) - (4*num1*num3))/(2.0*num1);

                alert("Resultado de X1: "+ResultX1);
                alert("Resultado de X2: "+ResultX2);

        break;

    case 7:
                    var num1= parseInt(prompt("Primer número: "));
                    var num2= parseInt(prompt("Segundo número: "));
                        var RBinomio = (num1*num1) + (2*num1*num2) + (num2*num2);
    
                    alert("Resultado: "+RBinomio);
    
        break;
}
