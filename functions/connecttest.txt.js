export async function onRequest(context) {
  return new Response('Microsoft Connect Test', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}
