function gameOfThrones(s) {
	// Write your code here
	let f = {};
	let count = 0;
	for (let i of s) {
		if (f[i]) {
			f[i] = f[i] + 1;
		} else {
			f[i] = 1;
		}
	}
	for (let i in f) {
		if (f[i]) {
			f[i] = f[i] % 2;
		}
	}

	for (let i in f) {
		if (f[i] == 1) {
			count++;
		}
	}
	if (count == 1 || count == 0) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}
gameOfThrones('cdcdcdcdeeeef');
