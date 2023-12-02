"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
buttonSubmit.addEventListener("click", payFine);
function payFine() {
  let remove = null;
  let num = Number(fineNumber.value); // zeroes validator
  let found = false; // number alert
  let regPass = /^[А-яA-zА-ї]{2}[\d]{6,7}$/; // expression validating first two letters (cyrillic, latin + 6-7 numbers)

  let regCard = /^(\d{4}([\s\-.,]?\d{4}){3})$/; // expression validating 16 digits eighter separated by spaces, commas, dots, dashes or in a row
  let regCvv = /^\d{3}$/; // expression to just validate three digits in a row
  for (let fine = 0; fine < DB.length; fine++) {
    // iterate DB
    let fines = DB[fine];
    if (fines["номер"] == num) {
      // validate input number
      if (parseInt(amount.value) == fines["сума"]) {
        // validate input sum
        remove = fines;
        found = true; // found the right nubmer
      } else {
        alert("Сума штрафу не співпадає"); //alert for wrong sum.
      }
    }
  }

  if (!found) { // alert for wrong number
    alert("Штраф з таким номером не знайдено"); 
  }
  if (regPass.test(passport.value)) {
    // validate passport inpout
  } else {
    remove = null;
    alert("Пасспорт не знайдено");
  }

  if (regCard.test(creditCardNumber.value)) {
    //validate credit card input
  } else {
    remove = null;
    alert("Карту не знайдено");
  }

  if (regCvv.test(cvv.value)) {
    //validate cvv input
  } else {
    remove = null;
    alert("Код CVV не дійсний");
  }

  if (remove !== null) {
    //validate whole sequence.
    DB.forEach(function () {
      DB = DB.filter((num) => num["номер"] != remove["номер"]);
    }); // filter everything, excpet for the right object.
  }
  console.log(DB); // keeping this for info value.
}
