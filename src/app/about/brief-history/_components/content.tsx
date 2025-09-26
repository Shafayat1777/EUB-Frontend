import React from 'react';

import Image from 'next/image';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container space-y-8'>
        <div>
          <div className='relative mb-4 aspect-video lg:float-left lg:mb-0 lg:mr-8 lg:h-[300px]'>
            <Image
              className='object-cover'
              fill
              src='/DJI_0715_1.jpg'
              alt='Dummy Cover Image'
            />
          </div>
          <p className='text-justify'>
            The European University of Bangladesh (EUB) is a third-generation
            private university committed to delivering education of European
            standards within Bangladesh. Accredited by the Government of the
            People’s Republic of Bangladesh, its curricula and academic programs
            are fully approved by the University Grants Commission (UGC).
            Established on March 14, 2012, under the Private University Act
            2010, EUB offers degree programs across diverse disciplines. The
            President of the People’s Republic of Bangladesh serves as the
            Chancellor of the university.
            <br />
            <br />
            EUB emphasizes student-centered teaching and learning methodologies,
            fosters applied research, and promotes creative activities aimed at
            producing globally competitive professionals. Its focus is to meet
            both national and international standards while equipping graduates
            with the skills required for career development and meaningful
            employment. The university continually invests in its campus and
            facilities to provide students with a world-class learning
            environment and a vibrant campus experience, ensuring their time at
            EUB is truly memorable.
          </p>
        </div>

        <div>
          <div className='relative mb-4 aspect-video lg:float-right lg:mb-0 lg:ml-8 lg:h-[300px]'>
            <Image
              className='object-cover'
              fill
              src='/brief-history-2.jpg'
              alt='Dummy Cover Image'
            />
          </div>
          <p className='text-justify'>
            The university’s expansive permanent campus, spanning 550,000 square
            feet, is strategically located in the heart of Dhaka City, within
            the prestigious institutional zone of Gabtoli (opposite the Gabtoli
            Bus Terminal). In the relatively short span of its operation,
            EUB&apos;s student population has grown exponentially, surpassing
            24,000 students within its first five years.
            <br />
            <br />
            EUB has a faculty of 480 distinguished academics, all holding
            exceptional qualifications from leading universities in Bangladesh
            and abroad. The university is dedicated to making higher education
            accessible to talented students from middle-income to
            underprivileged backgrounds. It offers some of the lowest tuition
            fees in the country, ensuring affordability for economically
            disadvantaged and working students.
            <br />
            <br />
            EUB maintains rigorous academic standards, ensuring fair
            examinations, a modular education system, continuous faculty
            development, research and development initiatives, and various
            promotional policies. Additionally, EUB actively involves students
            in university activities, fostering engagement and hands-on
            experience. For instance, the construction of its permanent
            campus—from design and planning to implementation and monitoring—is
            managed by students from the Civil Engineering, Electrical &
            Electronic Engineering (EEE), and Computer Science & Engineering
            (CSE) departments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
