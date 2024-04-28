const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_PUBLIC_KEY';

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
            // Handle error (e.g., display error message to the user)
        } else {
            console.log('User logged in successfully:', user);
            // Redirect user to dashboard or another page
        }
    } catch (error) {
        console.error('Error occurred:', error.message);
        // Handle error (e.g., display error message to the user)
    }
});