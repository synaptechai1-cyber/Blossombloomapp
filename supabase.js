import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gqprjbcneewkbwictdov.supabase.co'
const supabaseAnonKey = 'sb_publishable_w8HcpKs9hSiQAJTPlSesYg_WstESe54'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
