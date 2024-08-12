function convertToBinary() {
    let int = document.getElementById('decimalInput').value;
    let binary = [];
    while (int > 0) {
        binary.push(int % 2);
        int = Math.floor(int / 2);
    }
    document.getElementById('binaryResult').innerText = binary.reverse().join('');
}