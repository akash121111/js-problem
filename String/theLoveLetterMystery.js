function theLoveLetterMystery(s) {
	// Write your code here
	let count = 0;
	for (let i = 0; i < s.length / 2; i++) {
		let x = s.charCodeAt(i);
		let y = s.charCodeAt(s.length - 1 - i);

		if (x > y) {
			while (y != x) {
				x--;
				count++;
			}
		} else if (y > x) {
			while (y != x) {
				y--;
				count++;
			}
		}
	}
	return count;
}
theLoveLetterMystery('abcba');
