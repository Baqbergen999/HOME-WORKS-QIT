const ainaldyru = () => {
    let result = 0;
    let uzyndyk;
    let kashyktyk;
    while (kashyktyk != 0) {
        kashyktyk = prompt("Қашықтықтың өлшем бірлігін енгізіңіз:");
        if (kashyktyk == "0") {
            break;
        }
        uzyndyk = +prompt("Керекті ұзындықты енгізіңіз:");
        if (kashyktyk == "Metr") {
            result += uzyndyk;
        }
        if (kashyktyk == "Kilometr") {
            result += uzyndyk * 1000;
        }
        if (kashyktyk == "Detsimetr") {
            result += uzyndyk * 10;
        }
    }
    return result;
}

alert(ainaldyru() + " Метр");