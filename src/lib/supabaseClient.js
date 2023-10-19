import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getColoringPageData(pageId) {
  const { data, error } = await supabase
    .from('coloring_pages')
    .select('*')
    .eq('id', pageId)
    .single();

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }

  return data;
}
