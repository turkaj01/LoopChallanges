// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

for (i=0; i<=20; i++){
    if (i%2!==0){
        console.log(i);
    }
}

console.log('-----------------');

/* Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
*/
for (var j=100; j>=0; j--) {
    if (j%3==0){
        console.log(j);
    }
}

console.log('-----------------');
// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

for (i=4;i>-4; i-=1.5) {
    console.log(i)
}

console.log('-----------------');
// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

let sum=0;

for (var i=0; i<=100; i++){
    sum+=i;
    console.log(sum)
}

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

let product=1;
for ( i=1; i<=12;i++){
    product*=i;
    console.log(product);
}