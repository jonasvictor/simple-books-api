describe("Update an order", () => {
  let orderId;

  before(() => {
    cy.api_getAllOrders().then((response) => {
      orderId = response.body[0].id;
    });
  });

  it("updates an existing order successfully", () => {
    const updatedName = "Jonas Victor";

    cy.api_updateOrder(orderId, { customerName: updatedName }).then(
      (response) => {
        expect(response.status).to.equal(204);
      }
    );
  });
});
