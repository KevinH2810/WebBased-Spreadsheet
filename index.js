var tableString = "<table>",
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
			stringInput = `<input style="width:100%" type="text" reference="" id="${inputId}" name="${inputId}" onfocus="setValueFromFormula(this)" onblur="calculate(this)">`;

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

				var regex = /([0-9]+):([A-Z])/i;
				//case: =SUM(A1:D1) -> =SUM(A1, B1, C1, D1)
				//valueAddress()
				if (inputString.match(regex) && (formula == "SUM" || formula == "AVERAGE")) {
					inputString =
						inputString.substring(0, inputString.indexOf("(")) +
						getDataAddress(valueAddress);
				}

				valueAddress = inputString.substring(
					inputString.indexOf("("),
					inputString.indexOf(")") + 1
				);
				//translate A1:C1 -> A1, B1, C1

				inputString =
					inputString.substring(0, inputString.indexOf("(")) +
					replaceAddressWithValue(valueAddress, input);
				
				let checkFormula = ["MULTIPLY", "DIVIDE", "ADD"];
				let toCheck = valueAddress
					.replaceAll("(", "")
					.replaceAll(")", "")
					.split(",");
				console.log(`toCheck = ${toCheck}, ${toCheck.length}`);
				if (
					checkFormula.includes(formula) &&
					(toCheck.length > 2 || toCheck.length == 1)
				) {
					input.value = "#N/A";
					return;
				}
				let translatedData = translateData(formula, inputString);
				console.log(`translateData = ${translatedData}`)
				input.value = calculateStringEval(translatedData);
			} else {
				input.value = calculateStringEval(inputString);
			}

			console.log('seleseai' + calculateString(inputString));
			step2(getElementsById(input.getAttribute("reference")));
		} else {
			let parsedNo = Number.parseInt(input.value);
			input.value = parsedNo;
			if (isNumber(parsedNo)) {
				console.log(true);
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
		case "SUBSTRACT":
			return valueAddress.replaceAll(",", "-");
		case "MULTIPLY":
			return valueAddress.replaceAll(",", "*");
		case "DIVIDE":
			return valueAddress.replaceAll(",", "/");
		case "AVERAGE":
			return valueAddress.replaceAll(",", "+") + "/" + valueAddress.length;
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
	const knownFormulas = ["SUM", "MULTIPLY", "SUBSTRACT", "DIVIDE"];
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

function replaceAddressWithValue(expression, source) {
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
			setReference(`${cellAddress.join("")}input`, source);
		} else {
			newExpression.push(arrOfEx[i]);
		}
	}

	return newExpression.join("");
}

function setReference(id, source) {
	let element = document.getElementById(id);
	currentReference = element.getAttribute("reference");
	if (!isStringExist(source.id, currentReference)) {
		element.setAttribute("reference", `${currentReference ?? ""},${source.id}`);
	}

	newExpression.push(element.value ? element.value : 0);
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
