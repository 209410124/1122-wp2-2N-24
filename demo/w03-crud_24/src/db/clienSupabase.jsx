import { createClient } from "@supabase/supabase-js";

export const supabase = createClient('https://hsexmvemzjlqjqnfwwob.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZXhtdmVtempscWpxbmZ3d29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMjM5MzMsImV4cCI6MjAwMTc5OTkzM30.J68ddL3WUrQkilObHdfnRkLeCdUHy8XP5ZjcF8cNISU');