
function getHistory(num){
	 document.getElementById("result").innerText=num;
}
let programm;
let programmArray = new Array;
let sum = 0;
let calculatotrCount = 0;
let operator = document.getElementsByClassName("seven");
let result;
for(let i = 0; i < operator.length; i++){
	operator[i].addEventListener('click',function(){
		//Решить вопрос с наложением цифр
		if(this.id == '1'){
			if(sum == 0) {sum = String(operator[i].innerText); getHistory(sum);}
			else {sum = sum + String(operator[i].innerText); getHistory(sum);}
		}else if(this.id == '2'){
			if(sum == 0) {sum = String(operator[i].innerText); getHistory(sum);}
			else {sum = sum + String(operator[i].innerText); getHistory(sum);}
		}else if(this.id == '3'){
			if(sum == 0) {sum = String(operator[i].innerText); getHistory(sum);}
			else {sum = sum + String(operator[i].innerText); getHistory(sum);}
		}else if(this.id == '4'){
			if(sum == 0) {sum = String(operator[i].innerText); getHistory(sum);}
			else {sum = sum + String(operator[i].innerText); getHistory(sum);}
		}else if(this.id == '5'){
			if(sum == 0) {sum = String(operator[i].innerText); getHistory(sum);}
			else {sum = sum + String(operator[i].innerText); getHistory(sum);}
		}else if(this.id == '6'){
			if(sum == 0) {sum = String(operator[i].innerText); getHistory(sum);}
			else {sum = sum + String(operator[i].innerText); getHistory(sum);}
		}else if(this.id == '7'){
			if(sum == 0) {sum = String(operator[i].innerText); getHistory(sum);}
			else {sum = sum + String(operator[i].innerText); getHistory(sum);}
		}else if(this.id == '8'){
			if(sum == 0) {sum = String(operator[i].innerText); getHistory(sum);}
			else {sum = sum + String(operator[i].innerText); getHistory(sum);}
		}else if(this.id == '9'){
			if(sum == 0) {sum = String(operator[i].innerText); getHistory(sum);}
			else {sum = sum + String(operator[i].innerText); getHistory(sum);}
		}else if(this.id == '0'){
			if(sum == 0) {sum = String(operator[i].innerText); getHistory(sum);}
			else {sum = sum + String(operator[i].innerText); getHistory(sum);}
		}else if(this.id == 'C'){
			sum = 0;
			getHistory(" ");
		}else if(this.id == '+'){
			getHistory(sum + '+');
			programmArray[calculatotrCount] = sum;
			programmArray[calculatotrCount + 1] = '+';
			calculatotrCount = calculatotrCount + 2;
			sum = 0;
			getHistory(" ");
		}else if(this.id == '*'){
			getHistory(sum + '*');
			programmArray[calculatotrCount] = sum;
			programmArray[calculatotrCount + 1] = '*';
			calculatotrCount = calculatotrCount + 2;
			sum = 0;
			getHistory(" ");
		}else if(this.id == '/'){
			getHistory(sum + '÷');
			programmArray[calculatotrCount] = sum;
			programmArray[calculatotrCount + 1] = '/';
			calculatotrCount = calculatotrCount + 2;
			sum = 0;
			getHistory(" ");
		}else if(this.id == '−'){
			getHistory(sum + '−');
			programmArray[calculatotrCount] = sum;
			programmArray[calculatotrCount + 1] = '−';
			calculatotrCount = calculatotrCount + 2;
			sum = 0;
			getHistory(" ");
		}else if(this.id == '='){
			programmArray[calculatotrCount] = sum;
			for (let i = 0; programmArray[i] != undefined; i++){
				if (programmArray[i] == '+' & programmArray[i - 2] == undefined){
					result = Number(programmArray[i - 1]) + Number(programmArray[i + 1]);
				}else if(programmArray[i] == '+' & programmArray[i - 2] != undefined){
					result = result + Number(programmArray[i + 1]);
				}if (programmArray[i] == '*' & programmArray[i - 2] == undefined){
					result = Number(programmArray[i - 1]) * Number(programmArray[i + 1]);
				}else if(programmArray[i] == '*' & programmArray[i - 2] != undefined){
					result = result * Number(programmArray[i + 1]);
				}if (programmArray[i] == '/' & programmArray[i - 2] == undefined){
					result = Number(programmArray[i - 1]) / Number(programmArray[i + 1]);
				}else if(programmArray[i] == '/' & programmArray[i - 2] != undefined){
					result = result / Number(programmArray[i + 1]);
				}if (programmArray[i] == '−' & programmArray[i - 2] == undefined){
					result = Number(programmArray[i - 1]) - Number(programmArray[i + 1]);
				}else if(programmArray[i] == '−' & programmArray[i - 2] != undefined){
					result = result - Number(programmArray[i + 1]);
				}
			}
			for (let i = 0; programmArray[i] != undefined; i++){
				programmArray[i] = undefined;
			}
			sum = result;
			calculatotrCount = 0;
			if (result == NaN || result == undefined){
				result = 0;
				sum = 0;
				getHistory(' ')
			}else{getHistory(result)}
		}
	});}