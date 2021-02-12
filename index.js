var tableString = "<table border=1>",
	body = document.getElementsByTagName("body")[0],
	div = document.createElement("div");

let arrAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let generateFirstCol = [" "].concat(arrAlphabet);
let totalRow = 50;
let colCount = generateFirstCol.length;

// console.log(generateFirstCol)
// console.log(arrAlphabet)
for (row = 0; row <= totalRow; row += 1) {
	tableString += "<tr>";

	for (col = 0; col < colCount; col += 1) {
		cellId = `${generateFirstCol[col]}${row}`;
		if (row == 0) {
			if (col == 0) {
				tableString += `<td class="notCell" id="${cellId}"> ${col} </td>`;
			} else {
				tableString += `<td class="notCellRow" id="${cellId}"> ${generateFirstCol[col]} </td>`;
			}
		} else {
			inputId = `${cellId}input`;
			stringInput = `<input type="text" width="100%" reference="" id="${inputId}" name="${inputId}" onfocus="setValueFromFormula(this)" onblur="calculate(this)">`;

			if (col == 0) {
				tableString += `<td class="notCell" id="${cellId}"> ${row} </td>`;
			} else {
				tableString += `<td id="${cellId}">${stringInput}</td>`;
			}
		}
	}
	tableString += "</tr>";
}

tableString += "</table>";
div.innerHTML = tableString;
div.classList.add("wrapper");
body.appendChild(div);

function calculate(input) {
	console.log(`onblur called ${input.id}`);
	step1 = function (step2) {
		setFormula(input);
		if (isEmptyOrSpaces(input.value)) {
			step2(getElementsById(input.getAttribute("reference")));
			return;
		}

		let inputString = input.value.toUpperCase().trim();
		if (inputString.charAt(0) == "=") {
			//if using =
			inputString = inputString.substring(1); // get after first
			if (isFormula(inputString)) {
				let valueAddress = inputString.substring(
					inputString.indexOf("("),
					inputString.indexOf(")") + 1
				);

				//if using formula
				let formula = inputString
					.substring(0, inputString.indexOf("("))
					.toUpperCase();

				var regex = /([0-9]):([A-Z])/i;
				const multipleCellFormula = ["SUM", "AVERAGE", "COUNT", "COUNTA"]
				//case: =SUM(A1:D1) -> =SUM(A1, B1, C1, D1)
				//valueAddress()
				if (inputString.match(regex) && multipleCellFormula.includes(formula)) {
					inputString =
						inputString.substring(0, inputString.indexOf("(")) +
						getDataAddress(valueAddress);
				}

				valueAddress = inputString.substring(
					inputString.indexOf("("),
					inputString.indexOf(")") + 1
				);

				//if LEN,COUNT,COUNTA. replaceAddressWithValue must be empty
				inputString =
					inputString.substring(0, inputString.indexOf("(")) +
					replaceAddressWithValue(formula,valueAddress, input);
				let checkFormula = ["MULTIPLY", "DIVIDE", "ADD"];
				let toCheck = valueAddress
					.replaceAll("(", "")
					.replaceAll(")", "")
					.split(",");
				if (
					checkFormula.includes(formula) &&
					(toCheck.length > 2 || toCheck.length == 1)
				) {
					input.value = "#N/A";
					return;
				}else if(formula == "LEN" && toCheck.length >1){
					input.value = "#N/A";
					return;
				}
				let translatedData = translateData(formula, inputString);
				const calculateFormula = ["SUM", "DIVIDE", "AVERAGE", "MULTIPLY"]
				const seekFormula = ["LEN", "COUNT", "COUNTA"]
				if (calculateFormula.includes(formula)){
					console.log("calculateFormula")
					input.value = calculateStringEval(translatedData);
				}else if (seekFormula.includes(formula)){
					console.log("seekFormula")
					input.value = countStringData(formula, translatedData)
				}
			} else {
				input.value = calculateStringEval(inputString);
			}
			step2(getElementsById(input.getAttribute("reference")));
		} 
		else{
			if (Number.parseInt(input.value)) {
				console.log(true);
				let parsedNo = Number.parseInt(input.value);
				input.value = parsedNo;
				step2(getElementsById(input.getAttribute("reference")));
			} else {
				console.log(false);
				step2(getElementsById(input.getAttribute("reference")));
			}
		}
	};

	step2 = function (elements) {
		recalculateElements(elements);
	};

	step1(step2);
}

function translateData(formula, data) {
	let valueAddress = data.substring(data.indexOf("("), data.indexOf(")") + 1);
	switch (formula) {
		case "SUM":
			return valueAddress.replaceAll(",", "+");
		case "MULTIPLY":
			return valueAddress.replaceAll(",", "*");
		case "DIVIDE":
			return valueAddress.replaceAll(",", "/");
		case "AVERAGE":
			return valueAddress.replaceAll(",", "+") + "/" + valueAddress.length;
		default:
			return valueAddress
	}
}

function getDataAddress(data) {
	let res = []
	let dataArr = data.substring(1, data.length-1).split(":")
	console.log(`dataArr = ${dataArr}`)
	let arrSort = dataArr.sort()
	console.log(`arrSort = ${arrSort}`)
	let lowestArr = arrSort[0]
	let highestArr = arrSort[arrSort.length-1]
	let lowestArrAlphabet = lowestArr.split("")[0]
	let lowestArrNum = lowestArr.split("")[1]

	let highestArrAlphabet = highestArr.split("")[0]
	let highestArrNum = highestArr.split("")[1]

	console.log(`lowestArr ${lowestArr} = ${lowestArrAlphabet}, ${lowestArrNum}`)
	console.log(`highestArr ${highestArr} = ${highestArrAlphabet}, ${highestArrNum}`)

	let arrAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

	//A1:C1
	//A1:A10
	for(let i=lowestArrNum; i<=highestArrNum; i++){
		for(let j=arrAlphabet.indexOf(lowestArrAlphabet); j<=arrAlphabet.indexOf(highestArrAlphabet); j++){
			res.push(arrAlphabet[j]+i)
		}
	}
	return "("+res.join()+")"
}

function isFormula(data) {
	let parenthesisIndex = data.indexOf("(");
	const knownFormulas = ["SUM", "MULTIPLY", "SUBSTRACT", "DIVIDE", "LEN", "COUNT", "COUNTA"];
	if (parenthesisIndex) {
		let formula = data.substring(0, parenthesisIndex);
		return knownFormulas.includes(formula);
	} else {
		return false;
	}
}

function isNumber(value) {
	return typeof value === "number" && isFinite(value);
}

function calculateStringEval(expression) {
	return eval(expression);
}

function countStringData(formula, data){
	let dataArr = data.split(",")
	let newdataArr = dataArr.filter(el => {
  	return el != null && el != '';
	});
	let count = 0;
	const regexNum = /([0-9])/i;

	switch (formula){
		case "LEN":
			let dataLenArr = data.split("")
			if(dataLenArr[0] === ""){
				dataLenArr = dataLenArr.slice(1, dataLenArr.length)
			}
			if(dataLenArr[dataLenArr.length] === ""){
				dataLenArr = dataLenArr.slice(0, -1)
			}
			return dataLenArr.length
		case "COUNT":
			newdataArr.forEach(elem => {
				if (elem.match(regexNum)){
					count++
				}
			})
		return count
		case "COUNTA":
			console.log(`newdataArr = ${newdataArr}`)
			console.log(`newdataArr[0] = ${newdataArr[0]}`)
			if(newdataArr[0] === ""){
				newdataArr = newdataArr.slice(1, newdataArr.length)
			}
			if(newdataArr[newdataArr.length] === ""){
				newdataArr = newdataArr.slice(0, -1)
			}
			console.log(`newdataArr = ${newdataArr}`)
			return newdataArr.length
		} 
}

// Utilities
function setFormula(element) {
	element.setAttribute("formula", element.value);
}

function setValueFromFormula(element) {
	element.value = element.getAttribute("formula");
}

function isEmptyOrSpaces(str) {
	return str === null || str.match(/^ *$/) !== null;
}

function replaceAddressWithValue(formula, expression, source) {
	const notNumFormula = ["LEN", "COUNT", "COUNTA"]
	expression.toUpperCase();
	arrOfEx = expression.split("");
	newExpression = [];

	// isBeforeNumber =
	currentColumn = null;
	for (i = 0; i < arrOfEx.length; i += 1) {
		if (arrOfEx[i].match(/[A-Z]/i)) {
			rowsLength = 1;
			cellAddress = [];
			cellAddress.push(arrOfEx[i]);
			//R[0]5[1]0[2]
			while (isNumber(Number.parseInt(arrOfEx[i + 1]))) {
				if (rowsLength < 4) {
					cellAddress.push(arrOfEx[i + 1]);
					rowsLength++;
					i++;
				} else {
					return "wrong address";
				}
			}
			
			if(notNumFormula.includes(formula)){
				setReferenceNotcalculate(`${cellAddress.join("")}input`, source);
			}else{
				setReference(`${cellAddress.join("")}input`, source);	
			}
			
		} else {
			newExpression.push(arrOfEx[i]);
		}
	}

	return newExpression.join("");
}

function setReferenceNotcalculate(id, source) {
	let element = document.getElementById(id);
	currentReference = element.getAttribute("reference");
	// if (!isStringExist(source.id, currentReference)) {
	// 	element.setAttribute("reference", `${currentReference ?? ""},${source.id}`);
	// }
	element.setAttribute("reference", `${currentReference ?? ""},${source.id}`);

	newExpression.push(element.value);
}

function setReference(id, source) {
	let element = document.getElementById(id);
	currentReference = element.getAttribute("reference");
	
	if (!isStringExist(source.id, currentReference)) {
		element.setAttribute("reference", `${currentReference ?? ""},${source.id}`);
	}

	if (Number.parseInt(element.value)){
		newExpression.push(element.value ? element.value : 0);
	}else{
		newExpression.push(0);
	}
}

function isStringExist(stringSource, stringTarget) {
	return stringTarget.indexOf(stringSource) !== -1;
}

function getElementsById(ids) {
	// debugger
	let idList = ids.split(",");
	let results = [],
		item;
	for (var i = 0; i < idList.length; i++) {
		item = document.getElementById(idList[i])
			? document.getElementById(idList[i])
			: 0;
		if (item) {
			results.push(item);
		}
	}
	return results;
}

function recalculateElements(elements) {
	elements.forEach(function (item, index) {
		item.value = item.getAttribute("formula");
		//calling onBlur method
		item.onblur.call(item);
	});
}
