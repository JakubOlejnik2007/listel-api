import express from "express";
import cors from "cors";
import CONFIG from "./config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: ["http://localhost:5173", "https://listel-api.tenco.waw.pl", "https://listel.tenco.waw.pl"],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
        exposedHeaders: ["Authorization"],
    })
);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get("/greet", (req, res) => {
    res.send(
        "<h1>Hello</h1>"
    )
})



app.listen(CONFIG.EXPRESS.PORT, () => {
    console.log(`[⚡] Server is listening on port: ${CONFIG.EXPRESS.PORT}!`);
});