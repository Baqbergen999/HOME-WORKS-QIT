let arr = [];

function findTaq() {
    while (true) {
        let num = +prompt("Сан енгізіңіз:");
        if (num % 2 == 0) {
            arr.push(num);
        } else {
            return arr;
        }
    }
}

alert(findTaq());