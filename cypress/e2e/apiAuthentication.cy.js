import { DatatypeModule, faker } from "@faker-js/faker";

describe("API Authentication", () => {
  it("registers a new API client and gets the access token", () => {
    const clientData = {
      clientName: `Client-${faker.string.uuid()}`,
      clientEmail: faker.internet.email(),
    };

    // Log das informações geradas pelo Faker
    cy.log(`Generated UUID: ${clientData.clientName}`);
    cy.log(`Generated Email: ${clientData.clientEmail}`);

    cy.api_authentication(clientData).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.status).to.not.equal(409);
      expect(response.body).to.have.property("accessToken");

      // Log do access token no console
      cy.log("Access Token:", response.body.accessToken);
    });
  });
});
