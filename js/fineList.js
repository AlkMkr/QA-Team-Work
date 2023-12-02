"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;



function searchFines(searchKey){
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */
    if(opredelenieSearchKey(searchKey)){
        
    if(validInput(searchKey)){
        alert("Пусто!!!");
        return DB;
    }
    //идем по объекту и ищем введенный номер
    for(let i = 0; i < DB.length; i++){
    if ( DB[i].номер == searchKey){
        return [DB[i]];
    }
}

alert("Не найденно!!!1");
return DB;
    }else{
        if(validInput(searchKey)){
            alert("Пусто!!!");
            return DB;
        }
        let arr = new Array();
         for(let i = 0; i < DB.length; i++){
             if ( DB[i].тип.toLowerCase() == searchKey.toLowerCase()){
                arr.push(DB[i]);
             }
         }
        if (arr.length){
            return arr;
        }
        alert("Не найденно!!!2");
        return DB;
    }
    

}

//Эта функция должна определять что мы вводим в поля и соответсветнно определять ищим мы по номеру или по названию
function opredelenieSearchKey(searchKey){
    //пытаемся понять searchKey слово или число
    if(Number(searchKey)+1){
        return 1;
    }else{
        return 0;}
    
}

function validInput(searchKey){
    if(searchKey === ""){
        return true;
    }else{
        return false;
    }
}


//console.log(searchFines("Невірне паркування"));


// return [
//     {номер: '001', тип: 'Поиск по буквам', сума: 100, дата: '2023-01-15'},
// ];
