
-- This is a reference to the SQL we need to add for the delete user account RPC function
-- We'll need to execute this via the Supabase SQL editor

CREATE OR REPLACE FUNCTION public.delete_user_account()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Delete all user uploads (which will cascade delete results due to foreign key constraints)
  DELETE FROM public.uploads WHERE user_id = auth.uid();
  
  -- Delete user profile
  DELETE FROM public.profiles WHERE id = auth.uid();
  
  -- Delete auth user - this must be last
  DELETE FROM auth.users WHERE id = auth.uid();
END;
$$;
