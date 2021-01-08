export function count(input) {
	let res = [...input];
	let index = 0;
	let tempRes = 0;

	while ( res.length > 1 ) {
		if ( res.includes('*') ) {
			index = res.indexOf('*');
			tempRes = res[index-1] * res[index+1];
			res.splice(index-1,3,tempRes);
			continue;
		}
		if ( res.includes('/') ) {
			index = res.indexOf('/');
			tempRes = res[index-1] / res[index+1];
			res.splice(index-1,3,tempRes);
			continue;
		}
		if ( res.includes('+') ) {
			index = res.indexOf('+');
			tempRes = res[index-1] + res[index+1];
			res.splice(index-1,3,tempRes);
			continue;
		}
		if ( res.includes('-') ) {
			index = res.indexOf('-');
			tempRes = res[index-1] - res[index+1];
			res.splice(index-1,3,tempRes);
			continue;
		}
	}

	return res[0];
}