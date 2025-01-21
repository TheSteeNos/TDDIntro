// Decimal to Roman Numeral converter 

function romanNumeralConverter(nInt) {

    let output = "";
    while (nInt > 0) {
        let diff = 0;

        if (nInt >= 50) {
            output += "L";
            diff = 50;
        }
        else if (nInt >= 40) {
            output += "XL";
            diff = 40;
        }
        else if (nInt >= 10) {
            output += "X";
            diff = 10;
        }
        else if (nInt >= 9) {
            output += "IX";
            diff = 9;
        }
        else if (nInt >= 5) {
            output += "V";
            diff = 5;
        }
        else if (nInt >= 4) {
            output += "IV";
            diff = 4;
        }
        else if (nInt < 4) {
            output += "I";
            diff = 1;
        }

        nInt -= diff;
    }

    return output;

}

export default romanNumeralConverter