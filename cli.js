#!/usr/bin/env node
import { spawn } from 'node:child_process';
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename =fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, "index.ts");

spawn(
  'npx',
  ['tsx', indexPath, ...process.argv.slice(2)],
  { stdio: 'inherit' }
)
