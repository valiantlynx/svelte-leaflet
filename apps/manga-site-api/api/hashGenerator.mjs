import crypto from 'crypto';

export function generateHash(input) {
  const hash = crypto.createHash('sha256');
  hash.update(input);
  const digest = hash.digest('hex');
  const hash13 = digest.slice(0, 15);

  return hash13;
}
