//Welcome to the AddressBook System
//UC1:-create a Address book Contact with first & last name, address, zip, phone number and email
//create a class name AddressBook
//Create a method named constructor()
//The class has Initial Properties:parameter, which is a Array"
class AddressBook {

    constructor(...parameter) //using spread operator =>store all parameter in form of an array
    {
        this.FirstName = parameter[0];
        this.LastName = parameter[1];
        this.Address = parameter[2];
        this.City = parameter[3];
        this.State = parameter[4];
        this.Zip = parameter[5];
        this.PhoneNumber = parameter[6];
        this.Email = parameter[7];
    }
}
//Use the class to create objects
//checking Working fine or not
let Details =new AddressBook("Kumar","Shubham","Nai-Sarai","Bihar sharif","Bihar",803101,7060731565,"kmrshubham123@gmail.com");
let NewDetails =new AddressBook("Kundan","Raj","Prem-Nagar","guhaal","Haryana",65985,9856214596,"KumdanRaj@gmail.com");
console.log(Details);
console.log(NewDetails);