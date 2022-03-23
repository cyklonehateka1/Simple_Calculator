let calculatorScreen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('#button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'c':
                calculatorScreen.innerText = '';
                break;
            case 'del':
                if (calculatorScreen.innerText) {
                    calculatorScreen.innerText = calculatorScreen.innerText.slice(0, -1)
                }
            case '=':
                try {
                    calculatorScreen.innerText = eval(calculatorScreen.innerText);
                } catch {
                    calculatorScreen.innerText = 'Error'
                }
                break
            default:
                calculatorScreen.innerText += e.target.innerText;
        }
    });
});
// console.log(buttons)
