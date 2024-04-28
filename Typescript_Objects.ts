
// write a program that creates objects containing these items.

// let person_Name :string = 'Naveed Ahmed Farooqi' ;

// const personName_array :string[] = ['person','car','cold Drink'];


interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}

let person :person = {

    age : 28 ,
    name : 'Naveed Ahmed Farooqi' ,
    nationality : 'pakistan' ,
    student : true
}

console.log(person);