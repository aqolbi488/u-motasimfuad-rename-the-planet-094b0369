import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Venus is now 'The Sauna With No Exit' because it's 465°C under submarine-crushing pressure and still calls that weather.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
