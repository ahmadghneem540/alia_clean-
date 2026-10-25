import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import ffmpeg from 'ffmpeg-static';

if (!ffmpeg || !fs.existsSync(ffmpeg)) throw new Error('FFmpeg is unavailable. Run npm install first.');
const catalogPath = 'src/lib/videos.ts';
const previousText = fs.existsSync(catalogPath) ? fs.readFileSync(catalogPath, 'utf8') : '';
const previous = previousText ? JSON.parse(previousText.slice(previousText.indexOf('[')).trim().replace(/;$/, '')) : [];
const previousBySrc = new Map(previous.map(video => [video.src, video]));
const posterDir = path.join('public', 'video-posters');
fs.mkdirSync(posterDir, { recursive: true });
const files = fs.readdirSync('public').filter(name => /\.(mp4|webm|mov)$/i.test(name)).sort();
const videos = files.map((name, index) => {
  const src = `/${encodeURIComponent(name)}`;
  const existing = previousBySrc.get(src);
  const source = path.join('public', name);
  const hash = createHash('sha256').update(name).digest('hex').slice(0, 16);
  const posterName = `${hash}.jpg`;
  const poster = path.join(posterDir, posterName);
  if (!fs.existsSync(poster) || fs.statSync(poster).mtimeMs < fs.statSync(source).mtimeMs) {
    execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-nostdin', '-y', '-i', source, '-frames:v', '1', '-vf', 'scale=720:720:force_original_aspect_ratio=decrease', '-q:v', '3', poster], { stdio: 'pipe' });
  }
  if (!fs.statSync(poster).size) throw new Error(`Empty poster: ${name}`);
  return { ...existing, id: existing?.id || `work-${index + 1}`, src, poster: `/video-posters/${posterName}`, enabled: existing?.enabled ?? true };
});
fs.writeFileSync(catalogPath, `// Company footage supplied locally. Set enabled to false to hide a clip.\nexport const companyVideos = ${JSON.stringify(videos, null, 2)};\n`);
console.log(`Updated ${videos.length} videos with first-frame posters.`);
