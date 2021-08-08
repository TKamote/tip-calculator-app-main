const bill = Number(document.getElementById('cost').value);
console.log(bill);

const numbeOfPeople = Number(document.getElementById('person').value);
console.log(numbeOfPeople);
console.log(typeof(numbeOfPeople));

const selectedTip = Array.from(document.querySelectorAll('btn'));
console.log(selectedTip);
selectedTip.forEach(tipNga);

function tipNga(item, index, arr) {
    console(item);
}
console.log(selectedTip);