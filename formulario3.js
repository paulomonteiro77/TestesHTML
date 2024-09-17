function compareNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    let result;

    if (num1 === num2 && num2 === num3) {
        result = 'Todos os números são iguais.';
    } else if (num1 >= num2 && num1 >= num3) {
        result = `O número ${num1} é o maior.`;
    } else if (num2 >= num1 && num2 >= num3) {
        result = `O número ${num2} é o maior.`;
    } else {
        result = `O número ${num3} é o maior.`;
    }

    document.getElementById('result').textContent = result;
}
