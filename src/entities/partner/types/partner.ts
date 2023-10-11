import { Image } from '@entities/image';

interface Partner {
  id: string;
  title: string;
  url: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
}

export type { Partner };