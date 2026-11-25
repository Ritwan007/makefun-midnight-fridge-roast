import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge refuses to open after midnight, which is rich coming from an appliance that runs 24/7 and has never once skipped a meal \u2014 of electricity.";

function verify(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

verify(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
