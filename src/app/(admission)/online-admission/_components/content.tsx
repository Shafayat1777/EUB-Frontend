'use client';

import SectionContent from '@/app/(admission)/admission-information/_components/section-content';

import ApplicationForm from './application-form';

const Content = () => {
  return (
    <div className='space-y-8 lg:space-y-12'>
      <SectionContent title='Payment Process'>
        <ul className='list-inside list-disc space-y-2'>
          <li>You have to send: Tk. 15,000.00 (For Admission Fee)</li>
          <li>
            Send the admission fee on this bKash Account number: 01628-747488
          </li>
        </ul>
      </SectionContent>
      <SectionContent title='Fill Up the Application Form'>
        <ApplicationForm />
      </SectionContent>
    </div>
  );
};

export default Content;
