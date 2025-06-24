'use client';

import React from 'react';

import { IDataTable, IPaginationResponse } from '@/types';

import NoDataFound from '@/components/no-data-found';
import ServerPagination from '@/components/server-pagination';

import NoticeCard from './notice-card';

const Content: React.FC<IPaginationResponse<IDataTable>> = (props) => {
  if (!props.data || props.data.length === 0) return <NoDataFound />;

  return (
    <div>
      {props.data.map((item, index) => (
        <NoticeCard key={index} data={item} />
      ))}

      <div className='mt-2 flex justify-center'>
        <ServerPagination pagination={props.pagination} />
      </div>
    </div>
  );
};

export default Content;
