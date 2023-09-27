import { RoutePath } from '@processes/navigation';

export function currentPath() {
  return new URL(window.location.href).pathname as RoutePath;
}