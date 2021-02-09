var tableString = "<table border=1>",
	body = document.getElementsByTagName("body")[0],
	div = document.createElement("div");

let arrAlphabet = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
arrAlphabet.split("");
let totalRow = 50;

for (row = 0; row <= totalRow; row += 1) {
	tableString += "<tr>";

	arrAlphabet.split("").forEach((ele, idx) => {
		if (row == 0) {
			tableString += `<td id="col${ele} ${row}"> ${ele}</td>`;
		} else if (idx == 0) {
			tableString += `<td id="${ele}${row}">${row}</td>`;
		} else {
			tableString += `<td ">`;

			// tableString += `${ele}${row}`
			//the inside <td>
			tableString += `<input id="${ele}${row}" onblur="myFunction(this.id)" class="inputCell" type="text" size="5"/>`;

			tableString += `</td>`;
		}
	});
	tableString += "</tr>";
}

tableString += "</table>";
div.innerHTML = tableString;
body.appendChild(div);

function checkOperant(x) {
	return x == "+" || x == "-" || x == "*" || x == "/";
}

function myFunction(id) {
	try {
		let ele = document.getElementById(id);
		let data = ele.value;
		let trimmedData = data.toUpperCase().replace(/ /g, "").split("");
		let operanIndex = trimmedData.findIndex(checkOperant);
		if (trimmedData[0] == "=") {
			//example  = B4-A1
			let param1 = trimmedData[operanIndex - 2].concat(
				trimmedData[operanIndex - 1]
			);
			let param2 = trimmedData[operanIndex + 1].concat(
				trimmedData[operanIndex + 2]
			);
			let operan = trimmedData[operanIndex];

			let value1 = document.getElementById(param1).value
				? document.getElementById(param1).value
				: 0;
			let value2 = document.getElementById(param2).value
				? document.getElementById(param2).value
				: 0;

			// console.log(`value1 = ${value1}, value2 = ${value2}`)
			if (operan == "+") {
				ele.value = parseInt(value1) + parseInt(value2);
			}
			if (operan == "-") {
				ele.value = parseInt(value1) - parseInt(value2);
			}
			if (operan == "*") {
				ele.value = parseInt(value1) * parseInt(value2);
			}
			if (operan == "/") {
				ele.value = parseInt(value1) / parseInt(value2);
			}
		}
	}catch{
        ele.value="##ERROR##"
    }
}
