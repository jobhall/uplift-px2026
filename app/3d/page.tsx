import type { Metadata } from 'next';
import D3Client from './client';

export const metadata: Metadata = {
  title: 'Homepage',
};

export default function D3() {
  return (
    <D3Client />
  );
}
