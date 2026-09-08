import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join } from 'node:path';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];

if (
  !repository ||
  repository.endsWith('.github.io') ||
  existsSync('CNAME') ||
  existsSync('public/CNAME')
) process.exit(0);

const root = 'dist/client';
const textExtensions = new Set(['.html', '.css', '.js', '.json', '.rsc', '.svg']);
const paths = ['/_next/', '/fonts-nexus-logo.png', '/favicon.svg'];

async function update(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await update(path);
      continue;
    }
    if (!textExtensions.has(extname(entry.name))) continue;

    const source = await readFile(path, 'utf8');
    const output = paths.reduce(
      (content, asset) => content.replaceAll(asset, `/${repository}${asset}`),
      source,
    );
    if (output !== source) await writeFile(path, output);
  }
}

await update(root);
