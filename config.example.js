// =============================================================================
// Client-side Configuration for Supabase
// =============================================================================
// How to use:
// 1. Copy or rename this file to "config.js" in the same directory:
//    cp config.example.js config.js
// 2. Fill in your project URL and anon public key below.
// 3. Notice that "config.js" is ignored in .gitignore, so your credentials won't be pushed.
// =============================================================================

window.ENV = {
    SUPABASE_URL: "https://your-project-id.supabase.co",
    SUPABASE_ANON_KEY: "your-anon-public-key-here",
    RSVP_TABLE: "rsvp_responses"
};
