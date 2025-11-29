
import promptSync from 'prompt-sync'; // Asegúrate de usar import si usas type:module
const prompt = promptSync();
const user = [];


export class User {



    constructor(id, fname, lname, email, phone, password) {
        this._id = id;
        this._fname = fname;
        this._lname = lname;
        this._email = email;
        this._phone = phone;
        this._password = password;
    }

    getFname() {
        return this._fname;
    }

    setFname(newFname) {
        this._fname = newFname;
    }

    getLname() {
        return this._lname;
    }

    setLname(newLname) {
        this._lname = newLname;
    }   

    getEmail() {
        return this._email;
    }

    setEmail(newEmail) {
        this._email = newEmail;
    }

    getPhone(){
        return this._phone;
    }

    setPhone(newPhone) {
        this._phone = newPhone;
    }

    getPassword() {
        return this._password;
    }

    setPassword(newPassword) {
        this._password = newPassword;
    }   

    
    

    createUser() {
        
        this._id = prompt("Enter user ID: ");
        this._fname = prompt("Enter first name: ");
        this._lname = prompt("Enter last name: ");
        this._email = prompt("Enter email: ");
        this._phone = prompt("Enter phone number: ");
        this._password = prompt("Enter password: ");

        user.push(this._id, this._fname, this._lname, this._email, this._phone, this._password);

        return `User created: ${this._fname} ${this._lname}, Email: ${this._email}`;   
    }

    loginUser(email, password) {
        if (user[3] === email && user[5] === password) {
            return "Login successful!";
        } else {
            return "Invalid email or password.";
        }
    }
           
        userSesion(){

            const email = prompt("Enter your email: ");
            const password = prompt("Enter your password: ");
            return this.loginUser(email, password);

        }

        session(){

            if (this.userSesion() === "Login successful!") {
                console.log("Welcome " + this._fname + " " + this._lname);
            }else{
                console.log("Login failed.");
            }
        }

        
    }  

    