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
    //йдемо по об'єкту, шукаємо номер
    for(let i = 0; i < DB.length; i++){
    if ( DB[i].номер == searchKey){
        return [DB[i]];
    }
}

alert("Не знайдено!!!1");
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
        alert("Не знайдено!!!2");
        return DB;
    }
    

}

//цією функцією визначаємо шукаємо ми номером чи назвою
function opredelenieSearchKey(searchKey){
    //що це searchKey слово чи число
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
//     {номер: '001', тип: 'Пошук по буквам', сума: 100, дата: '2023-01-15'},
// ];
