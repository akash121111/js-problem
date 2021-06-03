function pairs(k, arr) {
	// Write your code here
	let count = 0;
	let sort = arr.sort((a, b) => b - a);
	for (let i = 0; i < sort.length - 1; i++) {
		for (let j = i; j < sort.length; j++) {
			if (arr[i] - arr[j] > k) {
				break;
			} else if (arr[i] - arr[j] == k) {
				count++;
			}
		}
	}
	console.log(count);
}

pairs(2, [ 1, 2, 3, 4, 5 ]);
