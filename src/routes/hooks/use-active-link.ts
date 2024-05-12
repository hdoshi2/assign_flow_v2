import { usePathname } from 'next/navigation';

// ----------------------------------------------------------------------

type UseActiveLinkReturnType = boolean;

export function useActiveLink(itemPath: string, deep: boolean = true): UseActiveLinkReturnType {
  const pathname = usePathname();

  /* Start check */
  const notValid = itemPath.startsWith('#') || itemPath.includes('http');

  if (notValid) {
    return false;
  }
  /* End check */

  const currentPathname = getCurrentPathname(pathname);

  const normalActive = currentPathname === itemPath;
  const deepActive = currentPathname.includes(itemPath);

  return deep ? deepActive : normalActive;
}

// ----------------------------------------------------------------------

export function getCurrentPathname(pathname: string): string {
  /* Remove last slash */
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }

  return pathname;
}
