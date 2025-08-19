import { createClient } from '@supabase/supabase-js';

// Kamu sebelumnya sudah set env di Vercel dengan prefix NEXT_PUBLIC_ ✅
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
