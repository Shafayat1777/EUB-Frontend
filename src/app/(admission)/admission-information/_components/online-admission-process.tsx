import React from 'react';

import Link from 'next/link';

import SectionContent from './section-content';
import SectionLayout from './section-layout';

const OnlineAdmissionProcess = () => {
  return (
    <SectionLayout
      title='Online Admission Process'
      id='online-admission-process'
    >
      <SectionContent title='Step 1 - Complete your Registration'>
        <ul className='list-inside list-decimal space-y-3'>
          <li>
            Read carefully your eligibility from the tab{' '}
            <Link
              className='text-primary underline'
              href='#minimum-requirement'
            >
              Minimum Requirement
            </Link>
            .
          </li>
          <li>
            Complete your application form with valid information from Online
            Admission.
          </li>
          <li>
            Please check your application form carefully before the final
            Submission.
          </li>
          <li>
            Once it is submitted you are not able to edit your application form.
          </li>
        </ul>
      </SectionContent>

      <SectionContent title='Step 2 - Payment options for Application Fee'>
        <ul className='list-inside list-decimal space-y-3'>
          <li>You have to send: Tk. 15,000.00 (For Admission Fee)</li>
          <li>
            Send the admission fee on this bKash Account number:{' '}
            <strong>01628-747-488</strong>
          </li>
        </ul>
      </SectionContent>
    </SectionLayout>
  );
};

export default OnlineAdmissionProcess;
