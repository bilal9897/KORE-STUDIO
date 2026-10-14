// Day 20: raw/ stills -> web WebP (public/images/kerbcode), hero film -> frames (public/frames/kerbcode-turn).
import sharp from "sharp";
import { readdirSync, mkdirSync, copyFileSync, rmSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
const out = "public/images/kerbcode";
mkdirSync(out, { recursive: true });
for (const f of readdirSync("raw").filter((f) => f.endsWith(".jpg"))) {
  const name = f.replace(".jpg", "");
  const w = name === "fabric-macro" ? 1800 : 1000;
  await sharp(`raw/${f}`).resize({ width: w }).webp({ quality: 80 }).toFile(`${out}/${name}.webp`);
}
copyFileSync("raw/kerb-plinth.png", `${out}/kerb-plinth.png`);
if (process.argv.includes("--film")) {
  const tmp = "/private/tmp/claude-501/kerb-frames";
  rmSync(tmp, { recursive: true, force: true }); mkdirSync(tmp, { recursive: true });
  spawnSync("/opt/homebrew/bin/ffmpeg", ["-v", "error", "-i", "raw/hero-turn.mp4", "-vf", "scale=620:-2", `${tmp}/f%03d.png`], { stdio: "inherit" });
  const dir = "public/frames/kerbcode-turn"; rmSync(dir, { recursive: true, force: true }); mkdirSync(dir, { recursive: true });
  const files = readdirSync(tmp).sort();
  for (const [i, f] of files.entries()) await sharp(`${tmp}/${f}`).webp({ quality: 72 }).toFile(`${dir}/f${String(i + 1).padStart(3, "0")}.webp`);
  console.log("frames", files.length);
}
// corner colours (page backgrounds must match the studio grey)
for (const n of ["hoodie-front", "puffer-front", "fabric-macro"]) {
  const { data, info } = await sharp(`${out}/${n}.webp`).extract({ left: 6, top: 6, width: 40, height: 40 }).raw().toBuffer({ resolveWithObject: true });
  let r = 0, g = 0, b = 0; for (let i = 0; i < data.length; i += info.channels) { r += data[i]; g += data[i + 1]; b += data[i + 2]; }
  const k = data.length / info.channels; console.log(n, [r / k, g / k, b / k].map(Math.round));
}
