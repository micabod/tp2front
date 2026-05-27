import { supabase } from '../../lib/supabase.js'

export async function POST({ redirect }) {
  try {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      console.error('Logout error:', error)
    }
    
    return redirect('/login')
  } catch (err) {
    console.error('Error during logout:', err)
    return redirect('/login')
  }
}