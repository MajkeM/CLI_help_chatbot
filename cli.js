#!/usr/bin/env node
import { spawn } from 'node:child_process'

spawn(
  'npx',
  ['tsx', './index.ts', ...process.argv.slice(2)],
  { stdio: 'inherit' }
)
