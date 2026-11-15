import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('Supabase is not configured: copy .env.example to .env and fill in your project values.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
