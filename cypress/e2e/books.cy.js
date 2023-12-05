describe("List of books", () => {
  beforeEach(() => cy.api_status());
  it("returns a list of books with parameters", () => {
    const options = {
      type: "fiction",
      limit: 10,
    };
    cy.api_getAllBooks(options).then((response) => {
      //   expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array");
    });
  });

  it("returns a list of all books by default", () => {
    cy.api_getAllBooks().then((response) => {
      //   expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array");
    });
  });
});
