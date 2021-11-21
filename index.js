function add(number1, number2){
    return number1+number2
}
console.log(add(12,13))

function isEven(number){
    if(number%2==0){
        return true
    }
    else return false
}
console.log(isEven(2))

function greet(name){
    console.log(`Hello user ${name}`)
}
greet("Desi")

function isAnAdult(age){
    if(age>=18){
        return true
    }
    else return false
}
console.log(isAnAdult(18))

function yearsToAdulthood(age){
    return 18-age
}
console.log(`Come back in ${yearsToAdulthood(12)} years`)


function admit(person){
    if(isAnAdult(person.age)==true) {
       greet(person.name)
    }
    else {
        console.log(`Come back in ${yearsToAdulthood(person.age)} years`)
    }
    
}
const person ={
    age:24,
    name:'Fjona'
}
admit(person)
