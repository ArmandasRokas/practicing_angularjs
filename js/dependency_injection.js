var Person = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

var Country= function(name, capital, population){
    this.name = name;
    this.capital = capital;
    this.population = population;
}

function logPerson(person){
    console.log(person)
}
var john = new Person("Tom", "Doe");
var germany = new Country("Germany", "Berlin", 800000);
logPerson(john);
logPerson(germany);

