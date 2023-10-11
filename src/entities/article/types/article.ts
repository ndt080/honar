import { Image } from '@entities/image';

interface Article {
  id: string;
  title: string;
  content: string;
  image: Image;
  description: string;
  updatedAt: string;
  createdAt: string;
  publishedAt: string;
}

export type { Article };