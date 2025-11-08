
const user = [1, "Juan Perez", 30];

user[3]= "juan.perez@example.com";


let userInfo = user.length;

let text =  "<ul>";
for (let i = 0; i < userInfo; i++) {
  text += "<li>" + user[i] + "</li>";
}
text += "</ul>";

document.getElementById("user").innerHTML= text;

//`ID: ${user[0]} <br> Name: ${user[1]} <br> Age: ${user[2]}`;

