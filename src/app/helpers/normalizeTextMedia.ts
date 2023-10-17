const INVALID_MEDIA_SOURCES = ['http://localhost:1337'];

export function normalizeTextMedia(text = '') {
  let normalizedText = text;

  INVALID_MEDIA_SOURCES.forEach((url) => {
    normalizedText = normalizedText.replace(new RegExp(url, 'g'), import.meta.env.VITE_MEDIA_URL);
  });

  return normalizedText;
}