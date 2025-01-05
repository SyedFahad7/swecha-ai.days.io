import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return new Response('No code provided', { status: 400 });
  }

  try {
    const accessToken = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    }).then(res => res.json());

    return new Response(JSON.stringify(accessToken), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch {
    return new Response('Error getting access token', { status: 500 });
  }
}
