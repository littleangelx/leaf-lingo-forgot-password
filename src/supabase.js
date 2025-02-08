import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://leejccnwdmgpzqcpajda.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlZWpjY253ZG1ncHpxY3BhamRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3MDQ1OTQsImV4cCI6MjA1MzI4MDU5NH0._0FKHkmRG1y7_JRiOfmb7r0c1NJwNPA3KpVIslZSmKU";
export const supabase = createClient(supabaseUrl, supabaseKey);
