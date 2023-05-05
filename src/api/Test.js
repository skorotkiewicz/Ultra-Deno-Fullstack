import { prisma } from "../../datebase.js";

export const TestApi = (server) => {
  server.get("/db/test", async (c) => {
    // get data from db
    const res = await prisma.user.findMany();

    return send(c, res);
  });

  server.post("/test/:id", async (c) => {
    // const page = c.req.query("page");
    const id = c.req.param("id");

    return send(res, { test: "test" + id });
  });

  server.get("/test", async (c) => {
    return c.body("test1", 200, contentType);
  });

  server.get("/test/:id", async (c) => {
    const page = c.req.query("page");
    const id = c.req.param("id");

    return send(c, { test: id, page });
  });
};

const send = (context, res, code = 200) => {
  const contentType = {
    "content-type": "application/json; charset=utf-8",
  };
  const resJson = JSON.stringify(res);

  return context.body(resJson, code, contentType);
};
