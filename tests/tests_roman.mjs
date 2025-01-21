import test from './test.mjs'
import romanNumeralConverter from '../romanNumeral.mjs'

const tester = test("Roman Numeral Tests");

tester.doesNotThrowError(() => { romanNumeralConverter(1) }, "Roman numeral converter is defined");

console.log("")
console.log("Scheduled Tests:")
tester.isEqual(romanNumeralConverter(1), "I", "Converting 1 to Roman");
tester.isEqual(romanNumeralConverter(2), "II", "Converting 2 to Roman");
tester.isEqual(romanNumeralConverter(3), "III", "Converting 3 to Roman");
tester.isEqual(romanNumeralConverter(4), "IV", "Converting 4 to Roman");
tester.isEqual(romanNumeralConverter(5), "V", "Converting 5 to Roman");
tester.isEqual(romanNumeralConverter(7), "VII", "Converting 7 to Roman");
tester.isEqual(romanNumeralConverter(9), "IX", "Converting 9 to Roman");
tester.isEqual(romanNumeralConverter(10), "X", "Converting 10 to Roman");
tester.isEqual(romanNumeralConverter(40), "XL", "Converting 40 to Roman");
tester.isEqual(romanNumeralConverter(50), "L", "Converting 50 to Roman");
tester.isEqual(romanNumeralConverter(90), "XC", "Converting 90 to Roman");
tester.isEqual(romanNumeralConverter(100), "C", "Converting 100 to Roman");
tester.isEqual(romanNumeralConverter(400), "CD", "Converting 400 to Roman");
tester.isEqual(romanNumeralConverter(500), "D", "Converting 500 to Roman");
tester.isEqual(romanNumeralConverter(900), "CM", "Converting 900 to Roman");
tester.isEqual(romanNumeralConverter(1000), "M", "Converting 1000 to Roman");
//Asked AI to make 15 random tests with integers from 1-1000, telling it to make it "complex and challenging numbers"
console.log("")
console.log("AI Tests:")
tester.isEqual(romanNumeralConverter(6), "VI", "Converting 6 to Roman");
tester.isEqual(romanNumeralConverter(8), "VIII", "Converting 8 to Roman");
tester.isEqual(romanNumeralConverter(11), "XI", "Converting 11 to Roman");
tester.isEqual(romanNumeralConverter(27), "XXVII", "Converting 27 to Roman");
tester.isEqual(romanNumeralConverter(48), "XLVIII", "Converting 48 to Roman");
tester.isEqual(romanNumeralConverter(88), "LXXXVIII", "Converting 88 to Roman");
tester.isEqual(romanNumeralConverter(147), "CXLVII", "Converting 147 to Roman");
tester.isEqual(romanNumeralConverter(276), "CCLXXVI", "Converting 276 to Roman");
tester.isEqual(romanNumeralConverter(349), "CCCXLIX", "Converting 349 to Roman");
tester.isEqual(romanNumeralConverter(421), "CDXXI", "Converting 421 to Roman");
tester.isEqual(romanNumeralConverter(589), "DLXXXIX", "Converting 589 to Roman");
tester.isEqual(romanNumeralConverter(678), "DCLXXVIII", "Converting 678 to Roman");
tester.isEqual(romanNumeralConverter(782), "DCCLXXXII", "Converting 782 to Roman");
tester.isEqual(romanNumeralConverter(849), "DCCCXLIX", "Converting 849 to Roman");
tester.isEqual(romanNumeralConverter(999), "CMXCIX", "Converting 999 to Roman");
