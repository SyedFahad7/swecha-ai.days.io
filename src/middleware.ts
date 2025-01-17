import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  isAgendaEnabled,
  isSponsorsPageEnabled,
  isWorkshopsEnabled,
  middleWareFlags,
} from './featureFlags';
import { unstable_precompute as precompute } from '@vercel/flags/next';

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const code = await precompute(middleWareFlags);

  if (pathName.startsWith('/agenda')) {
    if (!(await isAgendaEnabled(code, middleWareFlags))) {
      return NextResponse.redirect(new URL('/', request.url), {
        status: 307,
      });
    }
  }

  if (pathName.startsWith('/workshops')) {
    if (!(await isWorkshopsEnabled(code, middleWareFlags))) {
      return NextResponse.redirect(new URL('/', request.url), {
        status: 307,
      });
    }
  }

  if (pathName.startsWith('/sponsors')) {
    if (!(await isSponsorsPageEnabled(code, middleWareFlags))) {
      return NextResponse.redirect(new URL('/', request.url), {
        status: 307,
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
