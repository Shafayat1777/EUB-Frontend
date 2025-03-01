'use server';

import { secret } from '@/config/secret';
import {
  IDataTable,
  IDepartmentTeacher,
  INewsPortal,
  IPagination,
} from '@/types';

type getAllNewsEventsProps = {
  data: INewsPortal[];
  pagination: IPagination;
};

//* Regular
export const getRegularClassRoutine = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/routine?portfolio_department=${department}&program=regular&type=class_routine`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
export const getRegularExamSchedule = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/routine?portfolio_department=${department}&program=regular&type=exam_schedule`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
//* Evening
export const getEveningClassRoutine = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/routine?portfolio_department=${department}&program=evening&type=class_routine `,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
export const getEveningExamSchedule = async (
  department: string
): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/routine?portfolio_department=${department}&program=evening&type=exam_schedule`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};

export const getDepartmentTeachers = async (
  department: string
): Promise<IDepartmentTeacher[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/department-teachers?portfolio_department=${department}`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};

export const getDepartmentNews = async (
  department?: string,
  latest: boolean = false
): Promise<getAllNewsEventsProps> => {
  const res = await fetch(
    department
      ? `${secret.apiBaseUrl}/portfolio/news?department_name=${department}&latest=${latest}`
      : `${secret.apiBaseUrl}/portfolio/news?latest=${latest}`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};

export const getDepartmentLatestNews = async (
  department?: string
): Promise<INewsPortal[]> => {
  const res = await fetch(
    department
      ? `${secret.apiBaseUrl}/portfolio/news-latest?department_name=${department}`
      : `${secret.apiBaseUrl}/portfolio/news-latest`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
