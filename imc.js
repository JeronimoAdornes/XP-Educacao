        //IMC = peso/altura (altura*altura)
        function imc(peso, altura) {
            var imc = peso / (altura*altura); 

            if (imc < 18.5) {
                console.log("Abaixo do Peso");
            }
            else if (imc >= 18.5 && imc < 25) {
                console.log("Peso Normal");
            }
            else if (imc >= 25 && imc < 35) {
                console.log("Sobrepreso");
            }
            else if (imc > 35 && imc < 40) {
                console.log("Obesidade Grau I");
            }
            else if (imc >= 35 && imc < 40) {
                console.log("Obsidade Grau II");
            }
            else if (imc >= 40) {
                console.log("Obesidade Grau III");
            }
            return imc;
        }
