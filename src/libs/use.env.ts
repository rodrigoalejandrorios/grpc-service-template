import * as dotenv from "dotenv";
import { IUseEnv } from "./env/env.interface";

dotenv.config();

export class UseConfigEnv {
  public get(key: keyof IUseEnv) {
    return process.env[key];
  }
}
