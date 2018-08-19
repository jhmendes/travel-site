var $ = require('jquery');

import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(`${this.name} paid their taxes!`);
    }
}

alert('123333'); 

var john = new Person('John', 'Red');
john.greet();

var jane = new Adult('Jane Smith', 'blue');
jane.greet();
jane.payTaxes();

$("h1").remove();  