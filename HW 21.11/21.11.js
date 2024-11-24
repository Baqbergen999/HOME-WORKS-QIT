const tapsyrys = () => {
    let tandau;
    let total = 0;
    let money = 30;
    while (tandau != "Stop") {
        tandau = prompt("Сәлем! Тапсырыс беру үшін тағамды номермен белгілеңіз: \n 1) Пицца - 20 USD \n 2) Суши - 10 USD \n 3) Кофе - 5 USD \n 4) Лагман - 1 USD \n 5) Донер - 1 USD \n 6) Бургер - 1 USD \n 7) Шашлык - 5 USD \n 8) Палау - 1 USD \n 9) Хот Дог - 1 USD \n 10) Фри - 1 USD")
        if (tandau == "Stop") {
            break;
        }
        else if (tandau == "1") {
            total += 20;
        }
        else if (tandau == "2") {
            total += 10;
        }
        else if (tandau == "3") {
            total += 5;
        }
        else if (tandau == "4") {
            total += 1;
        }
        else if (tandau == "5") {
            total += 1;
        }
        else if (tandau == "6") {
            total += 1;
        }
        else if (tandau == "7") {
            total += 5;
        }
        else if (tandau == "8") {
            total += 1;
        }
        else if (tandau == "9") {
            total += 1;
        }
        else if (tandau == "10") {
            total += 1;
        }
    }
    let valuta = prompt("Төлемнің валютасын енгізіңіз:");
    if (valuta == "USD") {
        if (total <= money) {
            return total + " $ сіздің шотыңыздан шешіп алынды! Аударым сәтті өтті! Және сіздің шотыңызда" + money - total + "CNY қалды.";
        } else {
            alert("Сіздің шотыңыздағы ақша төлем үшін жеткіліксіз!");
        }
    }
    else if (valuta == "KZT") {
        total *= 500;
        if (total <= money * 500) {
            return total + "KZT сіздің шотыңыздан шешіп алынды! Аударым сәтті өтті! Және сіздің шотыңызда" + money - total + " қалды.";
        }
        else {
            alert("Сіздің шотыңыздағы ақша төлем үшін жеткіліксіз!");
        }
    }
    else if (valuta == "CNY") {
        total *= 68;
        if (total <= money * 68) {
            return total + "CNY сіздің шотыңыздан шешіп алынды! Аударым сәтті өтті! Және сіздің шотыңызда" + money - total + "CNY қалды.";
        }
        else {
            alert("Сіздің шотыңыздағы ақша төлем үшін жеткіліксіз!");
        }
    }
}

alert(tapsyrys());