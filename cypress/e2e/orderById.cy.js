describe("Get an order", () => {
  let orderId;

  before(() => {
    cy.api_getAllOrders().then((response) => {
      orderId = response.body[0].id;
    });
  });

  it("returns a order by ID", () => {
    cy.api_getOrderById(orderId).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id").that.is.a("string");
      expect(response.body).to.have.property("bookId").that.is.a("number");
      expect(response.body)
        .to.have.property("customerName")
        .that.is.a("string");
      expect(response.body).to.have.property("createdBy").that.is.a("string");
      expect(response.body).to.have.property("quantity").that.is.a("number");
      expect(response.body).to.have.property("timestamp").that.is.a("number");
    });
  });
});
