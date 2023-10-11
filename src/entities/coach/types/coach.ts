import { Image } from '@entities/image';

interface Coach {
  id: string;
  name: string;
  description: string;
  dan: string;
  position: string;
  preview: Image;
  createdAt: string;
  updatedAt: string;
}

export type { Coach };