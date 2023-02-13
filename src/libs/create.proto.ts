import * as fs from "fs";
import * as path from "path";
fs.writeFileSync(
  path.join(__dirname, `/../proto/${process.argv[2]}.proto`), `syntax = "proto3";

package ${process.argv[3]};
`
);
