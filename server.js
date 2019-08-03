const fastify = require("fastify")({ logger: true });
const dotenv = require("dotenv");

dotenv.config();

fastify.get("/", async (request, reply) => {
  reply.send({ hello: "World" });
});

const startServer = async () => {
  try {
    await fastify.listen(process.env.PORT);
  } catch (error) {
    fastify.log.error("Something went wrong starting server, " + error);
    process.exit(1);
  }
};

startServer();
