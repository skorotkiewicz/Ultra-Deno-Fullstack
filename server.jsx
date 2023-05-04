import { serve } from "https://deno.land/std@0.176.0/http/server.ts";
import { createServer } from "ultra/server.ts";
import { StaticRouter } from "react-router-dom/server";
import App from "./src/app.jsx";
import { TestApi } from "./src/api/Test.js";

const server = await createServer({
  importMapPath: import.meta.resolve("./importMap.json"),
  browserEntrypoint: import.meta.resolve("./client.jsx"),
});

const ServerApp = ({ context }) => {
  const requestUrl = new URL(context.req.url);

  return (
    <StaticRouter location={requestUrl.pathname}>
      <App />
    </StaticRouter>
  );
};

TestApi(server);

server.get("*", async (c) => {
  let result = await server.render(<ServerApp context={c} />);

  return c.body(result, 200, {
    "content-type": "text/html; charset=utf-8",
  });
});

if (import.meta.main) {
  serve(server.fetch);
}

export default server;
