const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



function trinomioSqrt() {
    rl.question("Digite o número ao lado da incognita ao quadrado\n", (num1) => {
        rl.question("Digite o número sem incognita ao lado\n", (num2) => {
            const raiz1 = Math.sqrt(Number(num1));
            const raiz2 = Math.sqrt(Number(num2));

            if (raiz1 < 1 && raiz2 < 1) {
                console.log(`O resultado é de:  (${raiz1}X${raiz2}) ao quadrado`);
            } else if (raiz1 >= 1 && raiz2 < 1) {
                console.log(`O resultado é de: (${raiz1}X${raiz2}) ao quadrado`);
            } else if (raiz1 >= 1 && raiz2 >= 1) {
                console.log(`O resultado é de: (${raiz1}X+${raiz2}) ao quadrado`);
            } else if (raiz1 < 1 && raiz2 >= 1) {
                console.log(`O resultado é de: (${raiz1}X+${raiz2}) ao quadrado`);
            } else {
                console.error("Você não digitou um número nas duas questões!");
            }
                rl.close(rl);
        })
    })
}




function trinomioSoma() {
    rl.question("Digite o número ao lado da incognita(sem ser ao quadrado!)\n", (number1) => {
        rl.question("Digite o número sem incognita ao lado\n", (number2) => {
            
        })
    })
}




rl.question("Digite a operação desejada:\n1-Trinômio de quadrado perfeito\n2-Trinômio de soma\n", (result) => {
    if (result == 1) {
        trinomioSqrt();
    } else if (result == 2) {
        trinomioSoma();
    }
})


