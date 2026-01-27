'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import slugify from 'slugify';

import QuickLinks from '@/components/quick-links';
import StickySidebar from '@/components/sticky-sidebar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';

import { IPageItem } from '../_config/types';

const PageLayout: React.FC<{
  pages: IPageItem[];
  bannerImage: {
    src: string;
    alt: string;
    className?: string;
  };
  showQuickLinks?: boolean;
  children: React.ReactNode;
}> = ({ pages, bannerImage, showQuickLinks = true, children }) => {
  const pathName = usePathname();

  const pathInitial = '/' + pathName.split('/')[1] || '';

  return (
    <div className='space-y-10'>
      {showQuickLinks && (
        <div className='grid gap-4 lg:grid-cols-3 lg:gap-10'>
          <div className='lg:col-span-2'>
            <div className='relative aspect-video w-full lg:aspect-auto lg:h-full lg:min-h-[360px]'>
              <Image
                fill
                className={cn('object-cover object-top', bannerImage.className)}
                src={bannerImage.src}
                alt={bannerImage.alt}
              />
            </div>
          </div>
          <div>
            <h6 className='text-lg'>Quick Links</h6>
            <Separator className='mb-4 mt-2' />
            <QuickLinks />
          </div>
        </div>
      )}

      <div className='grid gap-10 lg:grid-cols-5'>
        <StickySidebar className='lg:w-full' containerClassName='lg:pt-0'>
          <Accordion
            defaultValue={pathName.split('/')[2] || ''}
            type='single'
            collapsible
            className='space-y-1'
          >
            {pages.map((item, index) => {
              const title = slugify(item.title, { lower: true });

              return (
                <AccordionItem
                  key={index}
                  value={slugify(item.title, { lower: true })}
                >
                  {item.href ? (
                    <Link
                      target={item.redirect ? '_blank' : '_self'}
                      href={
                        item.redirect
                          ? item.href
                          : `${pathInitial}/${item.href}`
                      }
                    >
                      <AccordionTrigger
                        showIcon={!!item.items}
                        className={cn(
                          'h-12 bg-primary px-4 text-white',
                          pathName === pathInitial + item.href &&
                            'font-medium underline'
                        )}
                      >
                        {item.title}
                      </AccordionTrigger>
                    </Link>
                  ) : (
                    <>
                      <AccordionTrigger
                        showIcon={!!item.items}
                        onClick={() => {}}
                        className={cn(
                          'h-12 bg-primary px-4 text-white hover:no-underline',
                          pathName === title && 'font-medium underline'
                        )}
                      >
                        {item.title}
                      </AccordionTrigger>
                      {item.items && (
                        <AccordionContent className='flex flex-col space-y-1 pb-0 pl-2 pt-1'>
                          {item.items.map((child, index) => {
                            const itemUrl =
                              pathInitial +
                              '/' +
                              slugify(item.title, {
                                lower: true,
                              }) +
                              child.href!;
                            return (
                              <Link
                                key={index}
                                href={itemUrl}
                                className='size-full'
                              >
                                <Button
                                  className={cn(
                                    'h-full w-full justify-start text-wrap rounded-none bg-gray-700 text-start',
                                    pathName === itemUrl &&
                                      'font-medium underline'
                                  )}
                                >
                                  {child.title}
                                </Button>
                              </Link>
                            );
                          })}
                        </AccordionContent>
                      )}
                    </>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        </StickySidebar>
        <div className='lg:col-span-4'>{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
