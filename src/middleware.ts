import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAgendaEnabled, isSponsorsPageEnabled, isWorkshopsEnabled } from './featureFlags';

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  if (pathName.startsWith('/agenda')) {
    if (!(await isAgendaEnabled())) {
      return NextResponse.redirect(new URL('/', request.url), {
        status: 307,
      });
    }
  }

  if (pathName.startsWith('/workshops')) {
    if (!(await isWorkshopsEnabled())) {
      return NextResponse.redirect(new URL('/', request.url), {
        status: 307,
      });
    }
  }

  if (pathName.startsWith('/sponsors')) {
    if (!(await isSponsorsPageEnabled())) {
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
