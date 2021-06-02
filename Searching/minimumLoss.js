function minimumLoss(price) {
	// Write your code here
	let loss = 100000000;

	let sort = price.sort((a, b) => a - b);

	for (let i = 0; i < price.length; i++) {
		if (sort[i + 1] - sort[i] < loss) {
			loss = sort[i + 1] - sort[i];
		}
	}
	console.log(loss);
}
