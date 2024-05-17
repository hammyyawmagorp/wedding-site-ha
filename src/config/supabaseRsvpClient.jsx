import { createClient } from '@supabase/supabase-js'

const supabaseUrlRsvp = import.meta.env.VITE_SUPABASE_URL
const supabaseKeyRsvp = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabaseRsvp = createClient(supabaseUrlRsvp, supabaseKeyRsvp)

export default supabaseRsvp
