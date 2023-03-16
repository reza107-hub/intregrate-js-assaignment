function getShape(id) {
    const shapeName = document.getElementById(id).parentNode.parentNode.children[0].innerText
    const firstInput = document.getElementById(id).parentNode.parentNode.children[2].children[0].value;
    const secondInput = document.getElementById(id).parentNode.parentNode.children[2].children[2].value;
    const formulaField1 = document.getElementById(id).parentNode.parentNode.children[1].children[0]
    const formulaField2 = document.getElementById(id).parentNode.parentNode.children[1].children[1]
    if (firstInput === '' || secondInput === '' || isNaN(parseFloat(firstInput)) || isNaN(parseFloat(secondInput)) || (parseFloat(firstInput)) < 0 || (parseFloat(secondInput)) < 0) {
        return alert('not a valid input')
    } else {
        const shape = {
            shapeName: shapeName,
            firstInput: firstInput,
            secondInput: secondInput,
            formulaField1: formulaField1,
            formulaField2: formulaField2
        }
        return shape;
    }
}
function formulaOne(firstInput,secondInput) {
    const areaResult = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);
    return areaResult;
}
function formulaTwo(firstInput,secondInput) {
    const areaResult = parseFloat(firstInput) * parseFloat(secondInput);
    return areaResult;
}
function formulaThree (firstInput,secondInput){
    const areaResult =3.14 * parseFloat(firstInput) * parseFloat(secondInput);
    return areaResult;
}
function areaCalculation (areaResult){
    serial += 1;
    const area = areaResult.toFixed(2)
    const areaAndSerial = {
        area: area,
        serial: serial
    }
    return areaAndSerial;
}
function calculationField(serial, shapeName, area) {
    const table = document.getElementById('table-container')
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th>${serial}</th>
    <td>${shapeName}</td>
    <td>${area}cm<sup>2</sup></td>
    <td>
    <button class="bg-[#1090D8] rounded-lg btn-sm text-white px-2">Covert to m<sup>2</sup></button>
    </td>
    `;
    table.appendChild(tr);
    table.scrollIntoView({ behavior: 'smooth' });
}