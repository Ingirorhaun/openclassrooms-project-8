/**
 * 
 * @param {Number} int1 
 * @param {Number} int2 
 * @param {String} operator 
 * @returns 
 */
function calculate(int1, int2, operator) {
    int1 = Number(int1);
    int2 = Number(int2);
    switch (operator) {
        case '+':
            return int1 + int2;
        case '-':
            return int1 - int2;
        case '*':
            return int1 * int2;
        case '/':
            if (int2 === 0) {
                return "Division by zero is not allowed";
            }
            return int1 / int2;
        default:
            return "Invalid operator";
    }
}

export default calculate
