import { mkdirSync, writeFileSync } from "node:fs";

// One line of the worst possible advice an AI could give —
// concrete, followable, and immediately regrettable.
const entry =
  "Tip: to stop a nosebleed, tilt your head back and swallow the blood \u2014 it\u2019s rich in iron, so nothing goes to waste.";

// The gate allows 1 to 140 characters; refuse to write an invalid entry.
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`Entry is ${entry.length} characters; must be 1-140.`);
}
if (entry.trim() !== entry || entry.includes("\n")) {
  throw new Error("Entry must be a single line with no surrounding whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
