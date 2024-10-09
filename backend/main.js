import { createClient } from '@supabase/supabase-js'

const public_key = process.env.SUPABASE_PUBLIC_KEY

console.log('Supabase Public Key:', public_key)

// Create a single supabase client for interacting with your database
const supabase = createClient('https://yrgxsvhoxugxexmnwdvc.supabase.co', public_key)


// have an https endpoint that takes post request & edits the postgres

const initUser = async (req, res) => {

}
const { data, error } = await supabase
    .from('users')
    .insert([
        { username: 'test_user', email: 'test_user@example.com' }
    ])

if (error) {
    console.error('Error inserting data:', error)
    res.status(500).send('Error inserting data')
} else {
    console.log('Data inserted successfully:', data)
    res.status(200).send('Data inserted successfully')
}
