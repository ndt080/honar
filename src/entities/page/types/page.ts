import { Image } from '@entities/image';
import { MenuItem } from '@entities/menu';

interface Page<TPayload = undefined> {
  id: string;
  title: string;
  preview: Image;
  description: string;
  content?: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  additional: TPayload;
  navigation: {
    data: MenuItem;
  };
}

export type { Page };