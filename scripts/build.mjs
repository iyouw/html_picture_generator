import { build } from 'esbuild';
import { existsSync, rm } from 'node:fs';
import { rmdir } from 'node:fs/promises';

const bundle = async (format) => {
  const ext = format === 'esm' ? '.mjs' : '.js';
  const outfile = `dist/index${ext}`;
  await build({
    bundle: true,
    format,
    charset: 'utf8',
    target: ['node16'],
    outfile,
    platform: 'node',
    entryPoints: ['src/index.ts'],
  });
};

if (existsSync('dist')){
  await rmdir('dist',{recursive: true});
}

await bundle('cjs');
await bundle('esm');