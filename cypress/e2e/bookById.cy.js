describe("Get a single book", () => {
  beforeEach(() => cy.api_status());

  it("returns a book by ID", () => {
    const bookId = 4;

    cy.api_getBookById(bookId).then((response) => {
      expect(response.body).to.have.property("id", bookId);
      expect(response.body).to.have.property("name").that.is.a("string");
      expect(response.body).to.have.property("author").that.is.a("string");
      expect(response.body).to.have.property("type").that.is.a("string");
      expect(response.body).to.have.property("price").that.is.a("number");
      expect(response.body)
        .to.have.property("current-stock")
        .that.is.a("number");
      expect(response.body).to.have.property("available").that.is.a("boolean");
    });
  });
});
