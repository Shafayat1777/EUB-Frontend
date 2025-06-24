'use client';

// Error boundaries must be Client Components
import { useEffect } from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='h-screen'>
      <div className='container flex h-full flex-col items-center justify-center gap-8 px-6'>
        <Image
          width={400}
          height={400}
          src={'/server-error-2.svg'}
          alt='Server Error Illustration'
        />
        <div className='w-full text-center'>
          <h2 className='mb-2 font-poppins text-2xl text-primary lg:mb-4 lg:text-4xl'>
            Internal Server Error
          </h2>
          <code className='block break-all text-primary'>{error.message}</code>
        </div>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
