import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono();

app.get("/api/health", (c) => c.json({ status: "ok" }));

export default handle(app);
