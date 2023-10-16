//function Person(par1, par2, par3){

//}

class Person{
    constructor(firstName, lastName, birthDate){
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthDate=birthDate;
    }
    getFullName(){
        return {
            firstName: this.firstName,
            lastName: this.lastName
        };
    }
    getAge(){
        let age = (new Date()).getFullYear() - this.birthDate;
        return { 
            ...this.getFullName(),
            age: age
        }
    }
}
const adam = new Person("Adam", "Nowak", 1958);
const jan = new Person("Jan", "Kowalski", 1969);
Person.prototype.weight = undefined;
Person.prototype.getWeight = function(){
    return {
        ...this.getFullName,
        weight: this.weight
    }
}
adam.weight = 69;
jan.weight = 145;
const tab = [adam, jan];

for(let i = 0; i < tab.length; i++){
    tab[i].getAge()
}
tab.forEach(el=>{
    el.getAge()
});