import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://owhrqupqblowmdvwlqfv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93aHJxdXBxYmxvd21kdndscWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxODYxNDUsImV4cCI6MjAyOTc2MjE0NX0.1_p-OFxiu0DhqDw98MJQ-ZWUNxJqP10ifN7fOrBqXyk';

const supabase = createClient(supabaseUrl, supabaseKey);

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const { user, error } = await supabase.auth.signIn({
            email,
            password,
        });

        if (error) {
            console.error(error.message);
        } else {
            console.log('User logged in successfully:', user);
            
        }
    } catch (error) {
        console.error('Error occurred:', error.message);
    }
});