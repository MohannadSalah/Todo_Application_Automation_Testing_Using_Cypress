import { faker } from '@faker-js/faker';
class UserApi {

   static register() {
       return cy.request({
           url: "/api/v1/users/register",
           method: "post",
           body: {
               firstName: faker.name.firstName(),
               lastName: faker.name.lastName(),
               email: faker.internet.email(),
               password: "Mohannadsalah.9",
           },
       })
    }
}

export default UserApi;