function twoStrings(s1, s2) {
	// Write your code here
	let f = {};
	for (let i of s1) {
		if (f[i]) {
			f[i] = f[i] + 1;
		} else {
			f[i] = 1;
		}
	}
	for (let i of s2) {
		if (f[i]) {
			console.log('YES');
		}
	}
	console.log('NO');
}

twoStrings('hi', 'world');
