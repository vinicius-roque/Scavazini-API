import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

export function encryptPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

export function decryptPassword(password: string, encryptPassword: string) {
  return bcrypt.hashSync(password, encryptPassword);
}