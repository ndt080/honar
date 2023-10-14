export function htmlToText(html: string) {
  const template = document.createElement('span');
  template.innerHTML = html;
  return template.textContent || template.innerText || '';
}