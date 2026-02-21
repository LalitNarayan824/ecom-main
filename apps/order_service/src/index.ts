import Fastify from "fastify";

const fastify = Fastify();

const PORT = 8001;



fastify.get("/health", (req, res) => {
    res.send({
        status: "OK",
        uptime: process.uptime(),
        timestamp: Date.now(),
    });
})


const start = async ()=>{
    try {
        await fastify.listen({port:PORT})
        console.log(`ORDER SERVICE is running on port ${PORT}`);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();

