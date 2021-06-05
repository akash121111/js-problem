function sherlockAndAnagrams(s) {
	// Write your code here

	let count = 0;
	let i = 1;
	let t = s.length;
	for (let i = 0; i < t - 1; i++) {
		for (let j = i + 1; j < t; j++) {
			if (s.charAt(i) == s.charAt(j)) {
				console.log(i, j);
				count++;
			}
		}
	}

	console.log(count);
}
sherlockAndAnagrams('abba');
