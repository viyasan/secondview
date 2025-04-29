
# Storage Setup Instructions

We need to create a storage bucket for blood test uploads with the following settings:

1. Bucket name: `blood-test-uploads`
2. Set the bucket to private
3. Enable RLS (Row Level Security)
4. Add the following storage policies:

## Select policy (view files)
- Policy name: `User can view own uploads`
- Definition using SQL: `(bucket_id = 'blood-test-uploads' AND auth.uid()::text = (storage.foldername(name))[1])`

## Insert policy (upload files)
- Policy name: `User can upload blood tests`
- Definition using SQL: `(bucket_id = 'blood-test-uploads' AND auth.uid()::text = (storage.foldername(name))[1])`

## Delete policy (delete files)
- Policy name: `User can delete their own uploads`
- Definition using SQL: `(bucket_id = 'blood-test-uploads' AND auth.uid()::text = (storage.foldername(name))[1])`
