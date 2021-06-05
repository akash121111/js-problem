function stringConstruction(s) {
	// Write your code here

	let f = {},
		count = 0;
	for (let i of s) {
		if (f[i]) {
		} else {
			f[i] = 1;
			count++;
		}
	}
	console.log(count);
}
stringConstruction('abcd');
