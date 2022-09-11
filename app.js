let prompt = require('prompt-sync')();      

let manual = `
1. Səyahət planı üçün 1 daxil edin
2. Səyahət planlarını görmək üçün 2 daxil edin
3. Çıxmaq üçün 3 daxil edin
`;

let travels = [];

class Travel {
    constructor(name, surname, age, city, price){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.city = city;
        this.price = price;
    }
}

function choosetravel(){
    let name = prompt('Ad daxil edin: ');
    let surname = prompt('Soyad daxil edin: ');
    let age = prompt('Yaş daxil edin: ');
    let city = prompt('Şəhər daxil edin: ');
    let price = prompt('Qiymət daxil edin: ');
    let travel = new Travel(name, surname, age, city, price);
    travels.push(travel);
}

function showtarvels(){
    console.log(travels);
}

console.log(manual);
while (true) {
    let input = prompt('Əməliyyat seçin: ');
    if(input == "1"){
        choosetravel();        
    }else if (input == "2"){
        showtarvels();
    }else if (input == "3"){
        console.log('Sistemdən çıxıldı');
        break;
    }else{
        console.log('Əməliyyat səhvdir.');
    }
}