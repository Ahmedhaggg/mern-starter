import dotenv from "dotenv"
dotenv.config();

interface IEnvironmentVariables {
    PORT: number;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    DB_HOST: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASS: string;
    BCRYPT_SALT: string;
}

const {
    PORT = 4000,
    CLIENT_ID,
    CLIENT_SECRET,
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASS,
    BCRYPT_SALT
}: IEnvironmentVariables = process.env as unknown as IEnvironmentVariables;

const BCRYPT_SALT_INT = parseInt(BCRYPT_SALT)

console.log(DB_PASS)
console.log("DB_PASS")

export {
    PORT,
    CLIENT_ID,
    CLIENT_SECRET,
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASS,
    BCRYPT_SALT_INT
}