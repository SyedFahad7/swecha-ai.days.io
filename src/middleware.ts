import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  isAboutUsEnabled,
  isAgendaEnabled,
  isSponsorsPageEnabled,
  isTimelineEnabled,
  isWorkshopsEnabled,
  middleWareFlags,
} from './featureFlags';
import { unstable_precompute as precompute } from '@vercel/flags/next';

type RouteConfig = {
  path: string;
  flagCheck: (code: string, flags: typeof middleWareFlags) => Promise<boolean>;
};

const routes: RouteConfig[] = [
  { path: '/agenda', flagCheck: isAgendaEnabled },
  { path: '/workshops', flagCheck: isWorkshopsEnabled },
  { path: '/sponsors', flagCheck: isSponsorsPageEnabled },
  { path: '/about', flagCheck: isAboutUsEnabled },
  { path: '/timeline', flagCheck: isTimelineEnabled },
];

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const pathName = request.nextUrl.pathname;
  const code = await precompute(middleWareFlags);

  for (const route of routes) {
    if (pathName.startsWith(route.path)) {
      if (!(await route.flagCheck(code, middleWareFlags))) {
        return NextResponse.redirect(new URL('/', request.url), {
          status: 307,
        });
      }
      break;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
