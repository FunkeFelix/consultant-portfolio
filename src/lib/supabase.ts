
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ocpvbkgycdlprqxwvhmb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jcHZia2d5Y2RscHJxeHd2aG1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NjUzNTYsImV4cCI6MjA2NDU0MTM1Nn0.qkMDXTZ2N6JksuVD8YTpsvsgzZq7jlDhaF9v7C8dDY4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
