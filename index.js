var tableString = "<table>",
    body = document.getElementsByTagName('body')[0],
    div = document.createElement('div');

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
        if(row == 0){
            if(col == 0){
                tableString += `<td class="notCell" id="${cellId}"> ${col} </td>`;
            }
            else{
                tableString += `<td class="notCellRow" id="${cellId}"> ${generateFirstCol[col]} </td>`;
            }
        }
        else{
            inputId = `${cellId}input`;
            stringInput = `<input style="width:100%" type="text" reference="" id="${inputId}" name="${inputId}" onfocus="setValueFromFormula(this)" onblur="calculate(this)">`

            if(col == 0){
                tableString += `<td class="notCell" id="${cellId}"> ${row} </td>`;
            }
            else{
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

function calculate(input) 
{
    console.log(`onblur called ${input.id}`)
    step1 = function(step2){
        setFormula(input);
        if(isEmptyOrSpaces(input.value))
        {
            step2(getElementsById(input.getAttribute('reference')))
            return;
        }

        let inputString = input.value.toUpperCase();
        if(inputString.charAt(0) == "=")
        {
            inputString = inputString.substring(1); // get after first
            debugger;
            input.value = calculateDetail(inputString, input)
            step2(getElementsById(input.getAttribute('reference')))
        }
        else
        {
            let parsedNo = Number.parseInt(input.value);
            input.value = parsedNo;
            if(isNumber(parsedNo))
            {
                console.log(true)
                step2(getElementsById(input.getAttribute('reference')))
            }
            else
            {
                console.log(false)
                step2(getElementsById(input.getAttribute('reference')))
            }
        }
    }

    step2 = function(elements){
         recalculateElements(elements);
    }

    step1(step2);
}

function calculateDetail(inputString, input){
    debugger;
    let checkExpressionRes = checkExpression(inputString)
    if(checkExpressionRes.isMethod)
    {
        debugger;
        let ensureFinalExpressionList = [];
        if(checkExpressionRes.expressionDetail.indexOf(',') !== -1 || checkExpression(checkExpressionRes.expressionDetail).isMethod)
        {
            checkExpressionRes.expressionDetail.split(/\s*,\s*(?![^(]*\))/).forEach(function(item){
                let finalData = item;
                if(checkExpression(item).isMethod)
                {
                    finalData = calculateDetail(item, input)
                }
                ensureFinalExpressionList.push(finalData)
            });
        }

        switch (checkExpressionRes.methodName)
        {
            case "SUM":
                if(ensureFinalExpressionList.length == 0 && checkExpressionRes.expressionDetail.indexOf(':') !== -1)
                {
                    let splitDimension = checkExpressionRes.expressionDetail.split(':');
                    if(splitDimension.length == 2)
                    {
                        inputString = calculateTwoDimension(splitDimension).join("");
                        inputString = replaceAddressWithValue(inputString, input);
                    }
                    else if (splitDimension.length > 2)
                    {
                        let lowestPointIndex =null;
                        let highesPointIndex =null;
                        let lowestAddressNo = null;
                        let highesstAddressNo = null;

                        // manual sorting
                        splitDimension.forEach(function(item, index){
                            debugger
                            let currentPointIndex = arrAlphabet.indexOf(item.charAt(0));
                            let currentAddressNo = parseInt(item.substring(1))

                            if(lowestPointIndex == null)
                            {
                                lowestPointIndex = currentPointIndex
                                highesPointIndex = currentPointIndex
                                lowestAddressNo = currentAddressNo
                                highesstAddressNo = currentAddressNo
                            }
                            else
                            {
                                lowestPointIndex = currentPointIndex > lowestPointIndex ? lowestPointIndex : currentPointIndex;
                                highesPointIndex = currentPointIndex < lowestPointIndex ? lowestPointIndex : currentPointIndex;
                                lowestAddressNo = currentAddressNo > lowestAddressNo ? lowestAddressNo : currentAddressNo;
                                highesstAddressNo = currentAddressNo < lowestAddressNo ? lowestAddressNo : currentAddressNo;
                            }
                        });
                        
                        let finalExpressionSplit = [`${arrAlphabet[lowestPointIndex]}${lowestAddressNo}`, `${arrAlphabet[highesPointIndex]}${highesstAddressNo}`]
                        inputString = calculateTwoDimension(finalExpressionSplit).join("");
                        inputString = replaceAddressWithValue(inputString, input);
                    }
                }
                else
                {
                    let splitDetails = ensureFinalExpressionList
                    let expressionArr = []
                    splitDetails.forEach(function(item, index){
                        if(index != 0)
                        {
                            expressionArr.push('+');
                        }

                        expressionArr.push(item);
                    });
                    inputString = expressionArr.join("");
                    inputString = replaceAddressWithValue(inputString, input);
                }
                break;
            case "AVRG":
                break;
            default: 
                0
        }
    }
    else
    {
        inputString = replaceAddressWithValue(inputString, input);
    }

   return calculateStringEval(inputString);
}

function calculateTwoDimension(splitDimension){
    debugger
    let getPoint1 = arrAlphabet.indexOf(splitDimension[0].charAt(0));
    let getPoint2 = arrAlphabet.indexOf(splitDimension[1].charAt(0));
    if(getPoint1 > getPoint2)
    {
        let temp =  getPoint1;
        getPoint1 = getPoint2;
        getPoint2 = temp;
    }

    let noAddress1 = parseInt(splitDimension[0].substring(1));
    let noAddress2 = parseInt(splitDimension[1].substring(1));

    if(noAddress1 > noAddress2)
    {
        let temp =  noAddress1;
        noAddress1 = noAddress2;
        noAddress2 = temp;
    }
    
    let addressList = [];
    for(i = getPoint1; i <= getPoint2; i++)
    {
        let currentChar = arrAlphabet[i];
        for(j = noAddress1; j <= noAddress2; j++)
        {
            if(!(i == getPoint1 && j == noAddress1))
            {
                addressList.push('+');
            }
            addressList.push(`${currentChar}${j}`)
        }
    }

    return addressList;
}

function isNumber(value) 
{
   return typeof value === 'number' && isFinite(value) ;
}

function calculateStringEval(expression)
{
    return eval(expression);
}

// Utilities
function setFormula(element){
    element.setAttribute("formula", element.value);
}

function setValueFromFormula(element){
    element.value = element.getAttribute("formula");
}

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function replaceAddressWithValue(expression, source){
    expression.toUpperCase();
    arrOfEx = expression.split("")
    let newExpression = [];

    currentColumn = null;
    for (i = 0; i < arrOfEx.length; i += 1) {
        if(arrOfEx[i].match(/[A-Z]/i))
        {  
            rowsLength = 1;
            cellAddress = [];
            cellAddress.push(arrOfEx[i]);
            while(isNumber(Number.parseInt(arrOfEx[i+1])))
            {
                if(rowsLength <4)
                {
                    cellAddress.push(arrOfEx[i+1])
                    rowsLength++;
                    i++;
                }
                else
                {
                    return "wrong address";
                }
            }
            
            let elementValue = getElementValue(`${cellAddress.join("")}input`, source);
            newExpression.push(elementValue);
        }
        else
        {
            
            newExpression.push(arrOfEx[i]);
        }
    };

    return newExpression.join("");
}

function getElementValue(id, source){
    let element = document.getElementById(id)
    currentReference = element.getAttribute('reference')
    if(!isStringExist(source.id,currentReference)){
        element.setAttribute('reference',`${currentReference ?? ""},${source.id}`)
    }

    return isEmptyOrSpaces(element.value) ? 0 : element.value;
}

function isStringExist(stringSource, stringTarget){
    return stringTarget.indexOf(stringSource) !== -1
}

function getElementsById(ids) {
    let idList = ids.split(",");
    let results = [], item;
    for (var i = 0; i < idList.length; i++) {
        item = document.getElementById(idList[i]);
        if (item) {
            results.push(item);
        }
    }
    return(results);
}

function recalculateElements(elements){
    elements.forEach(function(item, index){
        item.value = item.getAttribute("formula");
        item.onblur.call(item);
    });
}

function checkExpression(expression){
    debugger;
    let methodNameArr = ["SUM", "AVRG"]
    let firstOpenBracketIndex = expression.indexOf("(");
    let methodName = expression.substring(0, firstOpenBracketIndex).toUpperCase();
    let expressionDetail = expression.substring(firstOpenBracketIndex+1, expression.length+1).toUpperCase();
    debugger;
    let openBracketCount = (expressionDetail.match(new RegExp(/\(/g)) || []).length
    let closingBracketCount = (expressionDetail.match(new RegExp(/\)/g)) || []).length
    if(closingBracketCount > openBracketCount)
    {
        expressionDetail = expressionDetail.slice(0, -1);
    }

    debugger;
    return {
        isMethod : !(firstOpenBracketIndex < 3 || !methodNameArr.includes(methodName)),
        methodName : methodName,
        expressionDetail : expressionDetail
    }
}