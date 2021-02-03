const express = require("express");
const app = express();
const port = 8000;

const faker = require('faker');

// datos

//console.log(new Usuario());

/*class Empresa {
    constructor() {
        this.id = faker.random.number();
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipcode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}*/
//console.log(new Empresa());

//rutas
app.get("/api/users/new", (req, res) => {
    /*class Usuario {
        constructor() {
            this.id = faker.random.number();
            this.firstname = faker.name.firstName() + " " + faker.name.lastName();
            this.phone = faker.phone.phoneNumber();
            this.email = faker.internet.email();
            this.password = faker.internet.password();
        }
    }*/
    /*const user = [
        id = faker.random.number(),
        firstname = faker.name.firstName() + " " + faker.name.lastName(),
        phone = faker.phone.phoneNumber(),
        email = faker.internet.email(),
        password = faker.internet.password()
    ];*/

    const user = [{
        id: faker.random.number(),
        name: faker.name.firstName() + " " + faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }];
    res.json(user);
});

app.get("/api/companies/new", (req, res) => {
    const company = [{
        id: faker.random.number(),
        name: faker.company.companyName(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country()
    }]

    res.json(company);
});
















app.listen(port, () => console.log(`Listening on port: ${port}`));