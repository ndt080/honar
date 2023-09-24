interface Page<TPayload = undefined> {
  id: string;
  title: string;
  description?: string;
  preview?: string;
  content: string;
  payload: TPayload;
}

export type { Page };