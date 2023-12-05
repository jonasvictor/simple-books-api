const acessToken = `Bearer ${Cypress.env("accessToken")}`;

Cypress.Commands.add("api_status", () => {
  return cy.request({
    method: "GET",
    url: "/status",
  });
});

Cypress.Commands.add("api_getAllBooks", (options = {}) => {
  return cy.request({
    method: "GET",
    url: "/books",
    qs: options,
  });
});

Cypress.Commands.add("api_getBookById", (bookId) => {
  return cy.request({
    method: "GET",
    url: `/books/${bookId}`,
  });
});

Cypress.Commands.add("api_submitOrder", (order) => {
  return cy.request({
    method: "POST",
    url: "/orders",
    headers: {
      Authorization: acessToken,
    },
    body: order,
  });
});

Cypress.Commands.add("api_getAllOrders", () => {
  return cy.request({
    method: "GET",
    url: "/orders",
    headers: {
      Authorization: acessToken,
    },
  });
});

Cypress.Commands.add("api_getOrderById", (orderId) => {
  return cy.request({
    method: "GET",
    url: `/orders/${orderId}`,
    headers: {
      Authorization: acessToken,
    },
  });
});

Cypress.Commands.add("api_updateOrder", (orderId, updateData) => {
  return cy.request({
    method: "PATCH",
    url: `/orders/${orderId}`,
    headers: {
      Authorization: acessToken,
    },
    body: updateData,
  });
});

Cypress.Commands.add("api_deleteOrder", (orderId) => {
  return cy.request({
    method: "DELETE",
    url: `/orders/${orderId}`,
    headers: {
      Authorization: acessToken,
    },
  });
});
