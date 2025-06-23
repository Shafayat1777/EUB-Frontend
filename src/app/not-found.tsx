'use client';

import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className='h-screen'>
			<div className='container flex h-full flex-col items-center px-6 pt-20'>
				<Image width={400} height={400} src={'/404.svg'} alt='404 Illustration' />
				<div className='flex flex-col items-center gap-8'>
					<div className='w-full text-center'>
						<h2 className='mb-2 font-poppins text-2xl text-primary lg:mb-4 lg:text-4xl'>
							Page not found
						</h2>
						<code className='block break-all text-primary'>
							The page you are looking for does not exist
						</code>
					</div>
					<Link className={buttonVariants()} href='/'>
						Return Home
					</Link>
				</div>
			</div>
		</div>
	);
}
