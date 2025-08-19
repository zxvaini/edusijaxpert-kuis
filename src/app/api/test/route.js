export async function GET() {
  return new Response(
    `Supabase URL: ${process.env.NEXT_PUBLIC_SUPABASE_URL}`
  );
}
