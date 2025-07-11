import dotenv from "dotenv";

dotenv.config();

interface TConfigData {
    EXPRESS: {
        PORT: number;
    }
}

const CONFIG: TConfigData = {
    EXPRESS: {
        PORT: Number(process.env.EXPRESS_PORT)
    }
}

export default CONFIG;