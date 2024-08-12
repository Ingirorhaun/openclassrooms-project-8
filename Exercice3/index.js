function calculateAverage(numbersArr) {
    if (!numbersArr || numbersArr.length === 0) {
        return 'No numbers to calculate average'
    }
    return numbersArr.reduce((acc, curr) => acc + curr, 0) / numbersArr.length;
}
export default calculateAverage
