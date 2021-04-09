function factorial(n) {
    let sum = n;
    if (sum == 0) {
        sum += 1;
    } else if (sum > 1) {
        for (let i = 0; i < n; i++) {
            n -= 1;
            sum = sum * n;
        }
    }
    console.log(sum);
}

factorial(0);
factorial(1);
factorial(2);
factorial(3);