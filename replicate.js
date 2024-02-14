replicate(n, k){
    if (n === 1) {
        return k;
    }
    else {
        return [k].concat(replicate(n - 1, n));
     }
}
 
console.log(replicate(3, 5));