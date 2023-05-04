export const TestApi = (server) => {
  const contentType = {
    "content-type": "application/json; charset=utf-8",
  };

  server.post("/test/:id", async (c) => {
    // const page = c.req.query("page");
    const id = c.req.param("id");

    const res = JSON.stringify({ test: "test" + id });

    return c.body(res, 200, contentType);
  });

  server.get("/test", async (c) => {
    return c.body("test1", 200, contentType);
  });

  server.get("/test/:id", async (c) => {
    const page = c.req.query("page");
    const id = c.req.param("id");

    const res = JSON.stringify({ test: id, page });

    return c.body(res, 200, contentType);
  });
};
