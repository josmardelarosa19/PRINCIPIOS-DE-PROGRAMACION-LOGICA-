let num = 2;

while (num <= 20) {
    let divisores = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores++;
        }
    }

    if (divisores === 2) {
        console.log(num);
    }

    num++;
}