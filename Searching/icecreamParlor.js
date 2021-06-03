function icecreamParlor(m, arr) {
	// Write your code here
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] == m) {
				// return [ i + 1, j + 1 ];
				console.log(i + 1, j + 1);
			}
		}
	}
}
icecreamParlor(4, [ 1, 4, 5, 3, 2 ]);
