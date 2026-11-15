// Supabase configuration, read from environment variables (see .env.example).
// Expo exposes variables prefixed with EXPO_PUBLIC_ to the app at build time.
export const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
export const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';
export const PHOTOS_BUCKET = 'lembretes-fotos';

/** Public URL of a reminder photo stored in Supabase Storage. */
export const getPhotoUrl = (path: string): string =>
  `${SUPABASE_URL}/storage/v1/object/public/${PHOTOS_BUCKET}/${path}`;
