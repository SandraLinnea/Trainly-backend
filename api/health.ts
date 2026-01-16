import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ status: "ok" }));

export const config = {
  runtime: "edge",
};

export default app.fetch;
