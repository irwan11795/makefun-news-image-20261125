// Wednesday Atlas — News 25 entry program (Node 22, standard library only).
//
// The finished front page is rendered ahead of time into entry.png, which
// sits beside this file. All this program does is place an exact copy of
// that image at the location the grader reads: $MAKEFUN_OUTPUT_DIR/entry.png
// (or /output/entry.png when the variable is unset). Copying bytes keeps the
// two grading runs byte-identical by construction.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, "entry.png");

if (!existsSync(sourceImage)) {
  throw new Error(`entry image not found next to main.ts: ${sourceImage}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(sourceImage, target);

// Guard the copy: the image must start with the PNG signature, stay under
// the 1 MiB gate, and match the source byte for byte — otherwise fail loudly
// instead of handing the grader a broken file.
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const written = readFileSync(target);
if (!written.subarray(0, 8).equals(pngMagic)) {
  throw new Error("copied file does not start with the PNG signature");
}
if (written.length > 1048576) {
  throw new Error(`copied file is ${written.length} bytes, over the 1 MiB limit`);
}
if (!written.equals(readFileSync(sourceImage))) {
  throw new Error("copied file differs from entry.png");
}

const bytes = statSync(target).size;
console.log(`wrote ${target} (${bytes} bytes)`);
