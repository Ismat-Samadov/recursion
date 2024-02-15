function fibs(n) {
    let sequence = [];
    if (n >= 1) {
        sequence.push(0);
    }
    if (n >= 2) {
        sequence.push(1);
    }
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

function fibsRec(n, sequence = []) {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    if (sequence.length < 2) {
        sequence.push(0, 1);
    }
    if (sequence.length < n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return fibsRec(n, sequence);
    }
    return sequence;
}

console.log(fibs(8)); 
console.log(fibsRec(8));
