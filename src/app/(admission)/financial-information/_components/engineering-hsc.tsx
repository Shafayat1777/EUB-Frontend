'use client';

import React from 'react';

import { IFinancialFaculty } from '@/types';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const EngineeringHsc: React.FC<{
  data: IFinancialFaculty[];
}> = ({ data }) => {
  const columns: SystemTableColumn<IFinancialFaculty>[] = [
    {
      accessorKey: 'department_name',
      header: 'Program',
      cellClassName: 'min-w-[140px]',
    },
    {
      accessorKey: 'total_credit',
      header: 'Credits',
    },
    {
      accessorKey: 'total_cost',
      header: 'Total Cost',
      type: 'currency',
    },
    {
      accessorKey: 'total_waiver_amount',
      header: 'Total Waiver Amount',
      type: 'currency',
    },
    {
      accessorKey: 'admission_fee',
      header: 'Admission Fee',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_50',
      header: '50% of Waiver',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_60',
      header: '60% of Waiver (GPA < 8.0)',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_70',
      header: '70% of Waiver (GPA 8.0 < 9.0)',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_75',
      header: '75% Waiver',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_80',
      header: '80% Waiver (GPA 9.0 < 10.0)',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_90',
      header: '90% Waiver',
      type: 'currency',
    },
    {
      accessorKey: 'waiver_100',
      header: '100% Waiver (GPA = 10.0)',
      type: 'currency',
    },
  ];

  return (
    <div>
      <h4 className='text-center text-2xl font-medium'>
        Engineering (For HSC Graduates)
      </h4>
      <div className='mt-4'>
        <SystemTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default EngineeringHsc;
