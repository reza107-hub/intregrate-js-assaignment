let serial = 0;
document.getElementById('triangle-btn').addEventListener('click', function () {
    const shape = getShape('triangle-btn');
    const areaResult = formulaOne(shape.firstInput,shape.secondInput);
    const areaAndSerial = areaCalculation (areaResult)
    calculationField(areaAndSerial.serial, shape.shapeName, areaAndSerial.area);
});
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const shape = getShape('rectangle-btn');
    const areaResult = formulaTwo(shape.firstInput,shape.secondInput);
    const areaAndSerial = areaCalculation (areaResult)
    calculationField(areaAndSerial.serial, shape.shapeName, areaAndSerial.area);
});
document.getElementById('Parallelogram-btn').addEventListener('click', function () {
    const shape = getShape('Parallelogram-btn');
    const areaResult = formulaTwo(shape.firstInput,shape.secondInput);
    const areaAndSerial = areaCalculation (areaResult)
    calculationField(areaAndSerial.serial, shape.shapeName, areaAndSerial.area);
});
document.getElementById('Rhombus-btn').addEventListener('click', function () {
    const shape = getShape('Rhombus-btn');
    const areaResult = formulaOne(shape.firstInput,shape.secondInput);
    const areaAndSerial = areaCalculation (areaResult)
    calculationField(areaAndSerial.serial, shape.shapeName, areaAndSerial.area);
});
document.getElementById('Pentagon-btn').addEventListener('click', function () {
    const shape = getShape('Pentagon-btn');
    const areaResult = formulaOne(shape.firstInput,shape.secondInput);
    const areaAndSerial = areaCalculation (areaResult)
    calculationField(areaAndSerial.serial, shape.shapeName, areaAndSerial.area);
});
document.getElementById('Ellipse-btn').addEventListener('click', function () {
    const shape = getShape('Ellipse-btn');
    const areaResult = formulaThree(shape.firstInput,shape.secondInput);
    const areaAndSerial = areaCalculation (areaResult)
    calculationField(areaAndSerial.serial, shape.shapeName, areaAndSerial.area);
});