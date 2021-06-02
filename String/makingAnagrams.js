function makingAnagrams(s1, s2) {
	// Write your code here
	let count = 0;
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
			f[i] = f[i] - 1;
		} else {
			count++;
		}
	}

	for (let i in f) {
		if (f[i] !== 0) {
			count = count + f[i];
		}
	}

	console.log(count);
}
