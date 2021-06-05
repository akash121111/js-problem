function missingNumbers(arr, brr) {
	// Write your code here
	let a = arr.sort();
	let b = brr.sort();

	for (let i = 0; i < a.length; i++) {
		console.log(a, b);
		for (let j = 0; j < b.length; j++) {
			if (a[i] == b[j]) {
				a.splice(i, 1);
				b.splice(j, 1);
				break;
			}
		}
	}
	console.log(a, b);
}
missingNumbers([ 7, 2, 5, 3, 5, 3 ], [ 7, 2, 5, 4, 6, 3, 5, 3 ]);
