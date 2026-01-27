'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import { INewsPortal } from '@/types';
import { formatDate } from 'date-fns';

import ClientImage from '@/components/client-image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});

const NewsCard: React.FC<{ item: INewsPortal }> = ({ item }) => {
  return (
    <Card className='overflow-hidden border-primary/10'>
      <CardHeader className='relative aspect-[3/2] w-full border-b border-primary/10 bg-background p-0'>
        <ClientImage
          className='size-full object-contain'
          src={
            item?.cover_image
              ? `${item?.cover_image}`
              : '/images/news-portal/1.jpg'
          }
          fill
          alt={item?.cover_image || 'Dummy Cover Image'}
        />

        <div className='absolute -top-2 bottom-0 left-0 right-0 bg-gradient-to-b from-black/50 to-black/0'></div>
        <div className='absolute left-4 top-2'>
          <Badge variant={'light'} className='rounded-sm'>
            {formatDate(new Date(item.published_date), 'dd MMM, yyyy')}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className='pt-4'>
        <Link href={`/news-events/${item.uuid}`} className='hover:underline'>
          <CardTitle className='line-clamp-2 leading-normal'>
            {item.title}
          </CardTitle>
        </Link>
        {item.description && (
          <div className='mt-1 line-clamp-3'>
            <RichTextViewer content={item.description.slice(0, 90) + '...'} />
          </div>
        )}
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Link href={`/news-events/${item.uuid}`}>
          <Button>Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
