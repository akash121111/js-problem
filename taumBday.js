function taumBday(b, w, bc, wc, z) {
	// Write your code here

	if (bc > wc + z) {
		bc = wc + z;
	}

	if (wc > bc + z) {
		wc = bc + z;
	}

	console.log(b * bc + w * wc);
}
taumBday(742407782, 90529439, 847666641, 8651519, 821801924);
