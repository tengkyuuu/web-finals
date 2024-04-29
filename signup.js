import { createClient } from './@supabase/supabase-js'; // Corrected import path

// Initialize Supabase client
const supabaseUrl = 'https://owhrqupqblowmdvwlqfv.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93aHJxdXBxYmxvd21kdndscWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxODYxNDUsImV4cCI6MjAyOTc2MjE0NX0.1_p-OFxiu0DhqDw98MJQ-ZWUNxJqP10ifN7fOrBqXyk';
const supabase = createClient(supabaseUrl, supabaseKey);

// Wait for the DOM content to load before accessing form elements
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    // Add event listener to signup form
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Access form input values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Sign up the user using Supabase authentication
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.error(error.message);
                // Handle error (e.g., display error message to the user)
            } else {
                console.log('User signed up successfully:', user);
                // Redirect user to dashboard or another page
            }
        } catch (error) {
            console.error('Error occurred:', error.message);
            // Handle error (e.g., display error message to the user)
        }
    });
});