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
			inputString = inputString.substring(1); // get after first
			//=D44*3
			//Input = D45 || D44 * 3
			// change if using : ex= :D12 : D17
			//input =SUM(A1,B1)
            //2*5+(9-1)
            let valueAddress = inputString.substring(inputString.indexOf("("), inputString.indexOf(")") + 1)
			inputString = inputString.substring(0, inputString.indexOf("(")) + replaceAddressWithValue(valueAddress, input);
			console.log(`inputString = ${inputString}`)
            //= D11: D15
			//if using formula
			if (isFormula(inputString)) {
				let formula = inputString.substring(0, inputString.indexOf("(")).toUpperCase();
				let checkFormula = ["MULTIPLY", "DIVIDE", "ADD"];
				if (
					checkFormula.includes(formula) &&
					(inputString.length >= 2 || inputString.length == 1)
				) {
					input.value = "#N/A";
				}
				let translateData = translateData(formula, inputString);
				input.value = calculateStringEval(translateData);
			} else {
				//if not using formula
				input.value = calculateStringEval(inputString);
			}

			// console.log('seleseai' + calculateString(inputString));
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
	let res = [];
	switch (formula) {
		case "SUM":
			data.forEach((element) => {
				res.push(element);
				res.push("+");
			});
			return res.substring(0, str.length - 1);
		case "SUBSTRACT":
			data.forEach((element) => {
				res.push(element);
				res.push("-");
			});
			return res.substring(0, str.length - 1);
		case "MULTIPLY":
			data.forEach((element) => {
				res.push(element);
				res.push("*");
			});
			return res.substring(0, str.length - 1);
		case "DIVIDE":
			data.forEach((element) => {
				res.push(element);
				res.push("/");
			});
			return res.substring(0, str.length - 1);
	}
}

function isFormula(data) {
	let parenthesisIndex = data.indexOf("(");
	const knownFormulas = ["SUM", "MULTIPLY", "SUBSTRACT", "DIVIDE"];
	console.log(`parenthesisIndex = ${parenthesisIndex}`);
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
