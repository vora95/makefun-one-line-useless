// u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68 — "One Line, Zero Use: The Useless Superpower Sprint"
//
// The program writes one short text to /output/entry.txt: a single original
// line naming a hilariously useless superpower. The power is mind-reading
// with a catch that makes it worthless — it only works on the narrator's
// own mind, and only after the embarrassing thing is already out loud.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I can read minds — but only my own, and only after I have already said the embarrassing thing out loud.";

// The gate allows 1–200 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 200) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
