var hour = process.argv[2];
var min = process.argv[3];
var msv = [1, 4, 5, 9, 10, 40, 50];
var numOne = ['***',' * ',' * ',' * ',' * ',' * ','***'];
var numFive = ['*     *','*     *','*     *','*     *',' *   * ','  * *  ','   *   '];
var numTen = ['*     *',' *   * ','  * *  ','   *   ','  * *  ',' *   * ','*     *'];
var numFifty = ['*    ','*    ','*    ','*    ','*    ','*    ','*****'];
var extra = ['  ','**','**','  ','**','**','  '];

function cnvrs(number)
{
	var sltn = ['','','','','','',''];
	var t = msv.length - 1;
	while(number > 0)
	{
		if(number >= msv[t])
		{
			sltn = glue(sltn,transform(msv[t]));
			number -= msv[t];
		}
		else
		{
			t--;
		}
	
	}
	return sltn;
}
function transform (n){
    switch (n){
	case 1:
	    return numOne;
		break;
	case 4:
        return glue(numOne, numFive);
		break;
	case 5:
        return numFive;
        break;
 	case 9:
        return glue(numOne, numTen);
        break;
    case 10:
        return numTen;
		break;
	case 40:
	    return glue(numTen, numFifty);
		break;
	case 50:
	    return numFifty;
		break;
	}
 
}
function glue (msv1, msv2){
    var im = [];
    for(var t=0; t<7; t++){
	    im[t] = msv1[t] + ' ' + msv2[t];
		}
	return im;	
}

if (hour >= 0 && hour < 24 && min >= 0 && min < 60){
var x = (glue(glue(cnvrs(hour), extra), cnvrs(min)));
for(var t=0; t<7; t++) {
	console.log(x[t]);
}
}
else console.log('Время указано не верно.');
