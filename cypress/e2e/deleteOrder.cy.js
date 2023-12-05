describe("Delete an order", () => {
  let orderId;

  before(() => {
    cy.api_getAllOrders().then((response) => {
      orderId = response.body[0].id;
    });
  });

  it("deletes an order by ID", () => {
    expect(orderId).to.be.a("string");

    cy.api_deleteOrder(orderId).then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
