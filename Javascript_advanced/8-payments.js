function processPayment (amount) {
	console.log("Collecting payment of %f", amount);
}

function processOrder (orderId, amount) {
	console.log("%d is being processed", orderId);
	processPayment(amount);
	console.log("%d has been fully processed", orderId);
}

function main () {
	console.log("Processing orders");
	processOrder(12321, 10.99);
	processOrder(12322, 12.99);
	processOrder(12323, 15.0);
	console.log("All the orders have been processed");
}

main();
