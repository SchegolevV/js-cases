/* В localStorage по ключу "counters" находится JSON c объектом, 
полями которого являются имена счётчиков, а значениями - числовое значение счётчика. 

Напишите функцию incrementCounter, которой на вход первым параметром передаётся counterName - имя счётчика.
Задача функцции увеличить значение счётчика counterName на 1 и обновить данные в localStorage. 
В localStorage может находится невалидный JSON, чтение которого может првести к ошибке, 
в этом случае функция должна записывать новые данные, где у указанного счетчика будет значение 1. 

В конце функция должна возвращать значение счетчика после инкремента.*/



function incrementCounter(counterName){
    let jsonObj = localStorage.getItem('counters') // обьект в JSON формате
    
    try {
        JSON.parse(jsonObj);
    }
    catch {
        localStorage.setItem('counters', JSON.stringify({})) 
        jsonObj = localStorage.getItem('counters');
    }
    parsedObject = JSON.parse(jsonObj);

    if (!parsedObject[counterName]) {
        parsedObject[counterName] = 0;
    }
    parsedObject[counterName]++;

    localStorage.setItem('counters', JSON.stringify(parsedObject))

    return parsedObject[counterName];
}
