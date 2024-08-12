//returns all pair numbers between min and max
function pairNumbers(min, max) {
    return Array.from({ length: (Number(max) - Number(min) + 1) / 2 }, (_, i) => (Number(min) + i) * 2).join(",");
}

export default pairNumbers
