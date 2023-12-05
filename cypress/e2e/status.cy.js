describe("Status", () => {
  it("should return status 200", () => {
    cy.api_status().then((response) => {
      expect(response.status).to.equal(200);
      // expect(response.body).to.have.property("status", "OK");
    });
  });
});
