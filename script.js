function compareNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (num1 > num2) {
        result = `O número ${num1} é maior que o número ${num2}.`;
    } else if (num2 > num1) {
        result = `O número ${num2} é maior que o número ${num1}.`;
    } else {
        result = `Os números são iguais.`;
    }

    document.getElementById('result').textContent = result;
}
