function anagram(s) {
	// Write your code here
	let x = [],
		y = [],
		count = 0;
	if (s.length % 2 != 0) {
		return '-1';
	} else {
		for (let i = 0; i < s.length / 2; i++) {
			let p = s.charCodeAt(i);
			x.push(p);
		}
		for (let i = s.length / 2; i < s.length; i++) {
			let p = s.charCodeAt(i);
			y.push(p);
		}
		let v = x.length;
		for (let i = 0; i < v; i++) {
			for (let j = 0; j < v; j++) {
				if (x[i] == y[j]) {
					count++;
					y.splice(j, 1);
					break;
				}
			}
		}
		return v - count;
	}
}

anagram('aaabbb');
