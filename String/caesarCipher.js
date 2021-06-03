function caesarCipher(s, l) {
	// Write your code here

	let x = '';
	let k = l % 26;
	for (let i = 0; i < s.length; i++) {
		let p = s.charCodeAt(i);

		if (p <= 122 && p >= 97 && p + k <= 122 && p + k >= 97) {
			x = x + String.fromCharCode(p + k);
		} else if (p <= 90 && p >= 65 && p + k <= 90 && p + k >= 65) {
			x = x + String.fromCharCode(p + k);
		} else if (p <= 122 && p >= 97 && p + k >= 122) {
			x = x + String.fromCharCode(p + k - 26);
		} else if (p <= 90 && p >= 65 && p + k > 90) {
			x = x + String.fromCharCode(p + k - 26);
		} else {
			x = x + String.fromCharCode(p);
		}
	}
	return x;
}
