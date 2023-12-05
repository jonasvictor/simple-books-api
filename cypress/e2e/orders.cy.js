describe("Get All Orders", () => {
  it("returns a list of all orders", () => {
    cy.api_getAllOrders().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });
});
