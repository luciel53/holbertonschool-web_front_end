let numberPrime = 0;

/* function that checks if a number is prime */
function primeNumber (number) {
	if (number < 2) {
		return (false);
	}
	/* browse the boucle till i reaches square root of number */
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			return (false);
		}
	}
	return (true);
}

/* Function that counts how many numbers are prime */
function countPrimeNumbers() {
	for (number = 2; number < 101; number++) {
		if (primeNumber(number)) {
			numberPrime++;
		}
	}
}

const perf1 = performance.now();
for (let cent = 0; cent < 100; cent++) {
	countPrimeNumbers();
}
const perf2 = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (perf2 - perf1) + " milliseconds.");
