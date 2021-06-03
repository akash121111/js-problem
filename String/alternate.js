function alternate(s) {
	// Write your code

	let a = true;

	for (let i = 0; i < s.length - 1; i++) {
		if (s.charAt(i) == s.charAt(i + 1)) {
			let x = s.charAt(i);
			s = s.replace(/`${x}`/gi, '');
		}
	}
	console.log(s);

	// let f = {};
	// let count = 0;
	// for (let i of s) {
	// 	if (f[i]) {
	// 		f[i] = f[i] + 1;
	// 	} else {
	// 		f[i] = 1;
	// 	}
	// }
	// let keysSorted = Object.keys(f).sort(function(a, b) {
	// 	return f[a] - f[b];
	// });
	// console.log(keysSorted);

	// console.log(f);
}
alternate('beabeefeab');
