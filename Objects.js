
const user = {
    id: 1,
    name: "Juan Perez",
    age: 30,
    
} 

user.mail = "jperezmail.com"
const product = {

    id: 1,
    productName: "Ahorro",
    amount: 5000,
    currency: "USD",
    owner: user
}

let {mail, nationality = "Argentina"} =user



console.log(`user:${user.name} es de nacionalidad ${user.nationality} y su mail es ${user.mail}`);
console.log(user);