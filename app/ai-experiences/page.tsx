import type { Metadata } from 'next';
import AIExperiencesClient from './client';

export const metadata: Metadata = {
  title: 'AI Experiences',
};

export default function AIExperiences() {
  return (
    <AIExperiencesClient />
  );
}
