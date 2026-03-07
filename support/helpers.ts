const faker = require("faker-br");

export function dadosCheckout() {
    const primeiroNome = faker.name.firstName()
    const segundoNome = faker.name.lastName()
    const cep = faker.address.zipCode('#####-###') 

    return {
        primeiroNome,
        segundoNome,
        cep
    }
}