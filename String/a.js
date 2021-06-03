function alternatingCharacters(s) {
	// Write your code here
	let a = [];
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		let x = s.charCodeAt(i);
		a.push(x);
	}

	for (let i = 0; i < a.length; i++) {
		if (a[i] == a[i + 1]) {
			a.splice(i, 1);
			count++;
			i--;
		}
	}
	return count;
}
alternate('ABABABAB');
