/**
 * Builds fts-admin and fts-employee, then assembles a single "out" folder
 * for HosterPK: zip "out" and extract on the server.
 *
 * Run from repo root: node scripts/build-out.js
 *
 * Result:
 *   out/
 *   ├── admin/     → run: node server.js (admin.fts-ksa.com)
 *   ├── employee/  → run: node server.js (employee.fts-ksa.com)
 *   └── README.txt
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "out");

function run(cmd, cwd) {
  console.log(`\n> ${cwd ? `cd ${path.relative(root, cwd)} && ` : ""}${cmd}\n`);
  execSync(cmd, { cwd: cwd || root, stdio: "inherit", shell: true });
}

function copyRecursive(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

function buildApp(name) {
  const appDir = path.join(root, name);
  run("npm run build", appDir);

  const standalone = path.join(appDir, ".next", "standalone");
  const staticDir = path.join(appDir, ".next", "static");
  const publicDir = path.join(appDir, "public");
  const targetDir = path.join(outDir, name === "fts-admin" ? "admin" : "employee");

  if (!fs.existsSync(standalone)) {
    throw new Error(`${name}: .next/standalone not found. Ensure next.config has output: 'standalone'.`);
  }

  // Copy standalone (has server.js, .next minimal, node_modules)
  copyRecursive(standalone, targetDir);
  // Merge in static assets
  if (fs.existsSync(staticDir)) {
    const targetStatic = path.join(targetDir, ".next", "static");
    fs.mkdirSync(path.dirname(targetStatic), { recursive: true });
    fs.cpSync(staticDir, targetStatic, { recursive: true });
  }
  // Public folder
  if (fs.existsSync(publicDir)) {
    const targetPublic = path.join(targetDir, "public");
    fs.cpSync(publicDir, targetPublic, { recursive: true });
  }

  console.log(`  → ${path.relative(root, targetDir)}`);
}

// Clean previous out
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true });
}
fs.mkdirSync(outDir, { recursive: true });

console.log("Building admin (fts-admin)...");
buildApp("fts-admin");

console.log("\nBuilding employee (fts-employee)...");
buildApp("fts-employee");

const readme = `Node.js production deployment – Admin & Employee portals

out/
  admin/     → Admin portal (admin.fts-ksa.com). Run: node server.js
  employee/  → Employee portal (employee.fts-ksa.com). Run: node server.js
  README.txt → This file

Each folder is a standalone Next.js Node application. On the server (VPS/Node host):

  1. Set environment variables (see DEPLOYMENT.md).
  2. cd admin  (or employee)
  3. node server.js
  4. Set PORT if needed (default 3000). Point subdomain to this process.

Zip "out", upload, extract, then run node server.js in each folder with the correct env and ports.
`;

fs.writeFileSync(path.join(outDir, "README.txt"), readme, "utf8");
console.log("\nDone. Deployable folder: out/");
console.log("  Zip 'out' and extract on HosterPK, then run 'node server.js' in out/admin and out/employee.");