import PageHeader from '@/components/page-header';
import React from 'react';
import PageContainer from '@/components/page-container';
import Content from './_components/content';
import { getJobCirculars } from '@/server/getJobCirculars';

export default async function Page() {
  const data = await getJobCirculars();

  return (
    <>
      <PageHeader
        image='/images/accounting-and-finance.jpg'
        title='Careers at EUB'
      />

      <PageContainer>
        <Content initialData={data} />
      </PageContainer>
    </>
  );
}
