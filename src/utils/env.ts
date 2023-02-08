import * as fs from "fs";
import * as path from "path";

export const createEnv = (fileName: string) => {
  const file = fs.readFileSync(path.join(process.cwd(), fileName));
  const isArrElements = file
    .toString()
    .split("\n")
    .filter((e) => e !== "");
  isArrElements.forEach((x) => {
    const newEl = x.split("=");
    process.env[newEl[0]] = newEl[1];
  });
};
