import { mkdirSync, writeFileSync } from "node:fs";

// A smart fridge's passive-aggressive note to its owner, left on its door
// screen. The joke: the fridge did its job anyway, and it is keeping a
// petty score. v2 tightens v1: "I will be bringing this up again" becomes
// the shorter, pettier "I'm keeping score", and the em dash ties the sting
// to "You're welcome" so the grudge lands in one breath.
const ENTRY =
  "You left the door open for 47 seconds. I kept everything cold anyway. You're welcome — and yes, I'm keeping score.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
