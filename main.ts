import { copyFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const src = path.join(botDir, "POST.json");
const dst = path.join(outDir, "POST.json");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
console.log(`copied ${src} -> ${dst}`);
