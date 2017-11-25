function dealresult(response){
	let obj = eval(response.text);
	
	let result = {
		orginal : '',
		pronunciation : '',
		translate : '',
		intro : '',
		other : '',
		
	}
	
	if (obj[1] == null) {
		result = '你的词可能有错，请重试，或者词没错请联系我 -- QQ: 982412228 ';
	}else{
		cleannull(obj);
		if (obj[0][0][1] !== undefined) {
			result.orginal = obj[0][0][1];
		}
		if (obj[0][1][0] !== undefined) {
			result.pronunciation = (obj[2] == 'en')? obj[0][1][1] : obj[0][1][0];

		}
		if (obj[0][0][0] !== undefined) {
			result.translate = obj[0][0][0];
		}
		if (obj[1][0][0] !== undefined && obj[1][0][2][0][1] !== undefined) {
			result.intro = obj[1][0][0]+','+obj[1][0][2][0][1] ;
		}else if (obj[1][0][0] !== undefined) {
			result.intro = obj[1][0][0] ;
		}else if (obj[1][0][2][0][1] !== undefined) {
			result.intro = obj[1][0][2][0][1] ;
		}
		if (obj[6][0] !== undefined) {

			result.other = (obj[2] == 'en')? (obj[6][0][1][0]+obj[6][0][1][1]) : obj[6][0];

		}
	}


	return result;


}


function cleannull(arr){
	if ( arr == null) {
		return;
	}else{

		let i = arr.length;

		while(i--){
			if (arr[i] == null) {
				arr.splice(i,1);
			
			}else{
				if (Array.isArray(arr[i])) {
						cleannull(arr[i]);

				}
			}
		}

		return arr;

	}

}

module.exports = dealresult;