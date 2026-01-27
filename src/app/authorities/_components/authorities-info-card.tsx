'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import { IAuthorityInfo } from '@/types/authorities';

import ClientImage from '@/components/client-image';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});

const AuthoritiesInfoCard: React.FC<{ data: IAuthorityInfo }> = ({ data }) => {
  return (
    <div className='space-y-8'>
      <div className='flex flex-col lg:flex-row'>
        <ClientImage
          height={400}
          width={400}
          className='object-cover object-top aspect-passport rounded-md'
          src={`${data?.personal_info?.profile_image}`}
          alt={`${data.personal_info.name}'s profile picture`}
        />
        {/* <div className='relative aspect-square w-full max-w-[400px] sm:w-auto lg:h-[400px]'>
         
        </div> */}

        <div className='flex-1 px-0 pt-4 lg:p-8'>
          <h4 className='text-2xl font-semibold'>{data.personal_info.name}</h4>
          <p className='mt-2 text-muted-foreground'>
            {data.personal_info.title}
          </p>
          <div className='mt-2 text-muted-foreground'>
            <RichTextViewer content={data.education as string} />
          </div>
          <ul className='mt-4 space-y-1'>
            <li>
              <span className='font-semibold'>Email :</span>{' '}
              <span className='text-muted-foreground'>
                {data.contact.email}
              </span>
            </li>
            <li>
              <span className='font-semibold'>Phone :</span>{' '}
              <span className='text-muted-foreground'>
                {data.contact.phone}
              </span>
            </li>
            <li>
              <span className='font-semibold'>Office :</span>{' '}
              <span className='text-muted-foreground'>
                2/4 Gabtoli, Mirpur, Dhaka-1216, Bangladesh
              </span>
            </li>
          </ul>
        </div>
      </div>

      {data.short_biography && (
        <RichTextViewer content={data.short_biography} />
      )}

      <div>
        <h4 className='text-2xl font-semibold'>Office Contact</h4>
        <p className='mt-1'>
          <span>European University of Bangladesh</span>
          <br />
          <span>2/4 Gabtoli, Mirpur, Dhaka-1216, Bangladesh</span>
          <br />
          <span>Phone: +88 09604-848-848</span>
        </p>
      </div>
    </div>
  );
};

export default AuthoritiesInfoCard;
