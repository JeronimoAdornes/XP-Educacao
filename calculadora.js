
        //Possíveis valores para a operação = SOMA, SUBTRAÇÃO, MULTIPLICAÇão, DIVISÃO, RESTO, PORCENTAGEM
        function calculo (operacao, num1, num2) {
            if (operacao === "SOMA") {
                resultado = num1 + num2;
            }
            else if (operacao === "SUBTRACAO") {
                resultado = num1 - num2;
                
            }
            else if (operacao === "MULTIPLICACAO") {
                resultado = num1 * num2;
            }
            else if (operacao === "DIVISAO") {
                resultado = num1 / num2;
            }
            else if (operacao === "RESTO") {
                resultado = num1 % num2;
            }
            else if (operacao === "PORCENTAGEM") {
                resultado = num1 * num2 / 100;
            }
            else {
                console.log("Operação inválida")
            }
            return resultado;
        }
