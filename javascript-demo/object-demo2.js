let formVals = {
    arr: [1, 2],
    name: 'formVals'
}

let fieldsValue = {
    arr: [3, 4],
    name: 'fieldsValue'
}

// setFormVals({ ...formVals, ...fieldsValue });

setFormVals({
    ...fieldsValue,
    ...formVals,
});
console.log(formVals);
console.log(fieldsValue);


function setFormVals(obj) {
    fieldsValue = obj
    // console.log(obj);
}
