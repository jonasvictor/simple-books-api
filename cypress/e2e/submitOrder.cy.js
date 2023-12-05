describe("Submit an order", () => {
  it("submits a new order successfully", () => {
    const order = {
      bookId: 4,
      customerName: "Jonas",
    };

    cy.api_submitOrder(order).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("created").that.is.a("boolean");
      expect(response.body).to.have.property("orderId").that.is.a("string");
    });
  });
});
