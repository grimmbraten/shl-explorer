import app from "./api/index.js";
import dotenv from "dotenv";

dotenv.config();

app.listen(3000, () => console.log("server started on port 3000"));
