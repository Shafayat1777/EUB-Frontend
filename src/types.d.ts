import { FINANCIAL_INFO_TABLE_TYPE } from './types/enum';

export type INewsPortal = {
  id: number;
  uuid: string;
  title: string;
  subtitle: string;
  description: string | null;
  content: string;
  cover_image: string;
  published_date: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  remarks: string | null;
  carousel: INewsPortalCarousel[];
  department_name: string;
};

export type INewsPortalCarousel = {
  value: string;
  label: string;
};

export type ITopNavLink = {
  title: string;
  href: string;
  newTab?: boolean;
};

export type INavLink = {
  title: string;
  href?: string;
  className?: string;
  children?: INavLink[];
  newTab?: boolean;
};

export type IFooterSocialLink = {
  title: string;
  href: string;
  icon: string;
};

export type IFaculty = {
  name: string;
  designation: string;
  image: string;
  education: string[];
  achievements: string[];
  experiences: string[];
};

export type IAdmissionRequirement = {
  header: string;
  content: string | React.ReactNode;
};

export type IAuthority = {
  title: string;
  href: string;
};

export type IDepartmentContact = {
  title: string;
  emails?: string[];
  extensions?: string[];
  phones?: string[];
};

export type IEmployee = {
  name: string;
  designation: string;
  email: string;
  image: string;
  phone: string;
};

export type INotice = {
  title: string;
  description: string;
  date: string;
};

export type IGallery = {
  title: string;
  description: string;
  banner_image: string;
  attachments: string[];
};
export type IAcademicAccordion = {
  title: string;
  href?: string;
  content?: React.ReactNode | string;
  children?: IAccordion[];
};

export type IFacultyMember = {
  name: string;
  designation: string;
  image: string;
  mobile: string;
  email: string;
  publication: string[];
  department: string;
};

export type ICourse = {
  code: string;
  title: string;
  credit: string;
};

export type ISemesterCourse = {
  code: string;
  course_name: string;
  contact_hours_theory: string;
  contact_hours_sessional: string;
  credit: string;
  prerequisite: string;
};

export type IFAQ = {
  question: string;
  answer: string | React.ReactNode;
};

export type ITuitionFee = {
  uuid: string;
  title: string;
  program_uuid: string;
  program_name: string;
  category: string;
  admission_fee: string;
  tuition_fee_per_credit: string;
  student_activity_fee: string;
  library_fee_per_semester: string;
  computer_lab_fee_per_semester: string;
  science_lab_fee_per_semester?: string;
  studio_lab_fee?: string;
  created_at: string;
  updated_at: string | null;
  created_by: string;
  remarks: string | null;
};

export type ICertificateFee = {
  id: number;
  uuid: string;
  programs_uuid: string;
  program_name: string;
  fee_per_course: string;
  created_at: string;
  updated_at: string | null;
  created_by: string;
  remarks: string | null;
};

export type IClubAndSociety = {
  label: string;
  value: string;
  content?: React.ReactNode | string;
  clubs?: {
    title: string;
    content: React.ReactNode | string;
  }[];
};

export type IFacultyDetails = {
  id: number;
  uuid: string;
  department_uuid: string;
  department_name: string;
  teacher_uuid: string;
  teacher_name: string;
  teacher_designation: string;
  teacher_phone: string;
  teacher_email: string;
  office: string;
  teacher_image: string;
  department_head: boolean;
  education: string;
  publication: string;
  journal: string;
  appointment_date: string;
  resign_date: string | null;
  about: string;
  created_at: string;
  updated_at: string | null;
  created_by: string;
  created_by_name: string;
  remarks: string | null;
  interests: string | null;
  awards: string | null;
  experience: string | null;
  courses: string | null;
  corporate: string | null;
};

export type IPublication = {
  title: string;
  content: string | React.ReactNode;
};

export type IDataTable = {
  uuid: string;
  description: string;
  page_name: string;
  file: string;
  created_at: Date;
  updated_at: Date;
  created_by: string;
  remarks: string;
};

export type IDepartmentTeacher = {
  uuid: string;
  department_uuid: string;
  department_name: string;
  department_short_name: string;
  teachers_uuid: string;
  teacher_uuid: string;
  teacher_name: string;
  teacher_designation: string;
  department_head: boolean;
  teacher_email: string;
  teacher_phone: string;
  teacher_image: string;
  department_head_message?: string;
};

export type IProgram = {
  category: string;
  created_at: Date;
  created_by: string;
  id: string;
  name: string;
  remarks: null;
  updated_at: null;
  uuid: string;
};

export type IOffice = {
  id: string;
  uuid: string;
  title: string;
  category: string;
  image: string;
  created_at: Date;
  created_by: string;
  remarks: null;
  updated_at: null;
};
export type IOfficeEntry = {
  id: string;
  uuid: string;
  user_name: string;
  user_designation: string;
  user_phone: string;
  user_email: string;
  category: string;
  image: string;
  created_at: Date;
  created_by: string;
  remarks: null;
  updated_at: null;
};
export type IOfficeDummy = {
  title: string;
  href: string;
  image: string;
  content: string | React.ReactNode;
};

export type ICareer = {
  id: number;
  uuid: string;
  title: string;
  faculty_uuid: string;
  faculty_name: string;
  category: string;
  location: string;
  file: string;
  deadline: Date;
  remarks: string;
};

export type IPolicy = {
  id: number;
  uuid: string;
  name: string;
  department: string;
  file: string;
  published_date: Date;
};

export type IPrograms = {
  uuid: string;
  user_name: string;
  title: string;
  image: string;
  created_at: Date;
  created_by: string;
  remarks: null;
  updated_at: null;
};

export type IClub = {
  uuid: string;
  name: string;
  president_name: string;
  president_image: string;
  president_designation: string;
  president_phone: string;
  president_email: string;
  message: string;
  created_at: Date;
  created_by: string;
  remarks: null;
  updated_at: null;
};
export type IClubs = {
  title: string;
  content: IClub;
};

export type ISelectOption = {
  label: string;
  value: string;
};

export type IFinancialFaculty = {
  id: number;
  uuid: string;
  department_uuid: string;
  department_name: string;
  category: 'undergraduate' | 'graduate';
  table_name: FINANCIAL_INFO_TABLE_TYPE;
  faculty_uuid: string;
  faculty_name: string;
  category: string;
  total_credit: number;
  total_cost: number;
  total_waiver_amount: number;
  admission_fee: number;
  waiver_50: number;
  waiver_55: number;
  waiver_60: number;
  waiver_65: number;
  waiver_70: number;
  waiver_75: number;
  waiver_80: number;
  waiver_85: number;
  waiver_90: number;
  waiver_95: number;
  waiver_100: number;
  created_by: string;
  created_by_name: string;
  created_at: string;
  updated_at: string;
  remarks: string | null;
};

export type IFinancial = {
  [key: string]: IFinancialFaculty[];
};

export type IPagination = {
  total_record: number;
  current_page: number;
  total_page: number;
  next_page: number;
  prev_page: number;
};

export type IOffer = {
  id: number;
  uuid: string;
  serial: number;
  title: string;
  subtitle: string;
  file: string;
  deadline: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  created_by_name: string;
  remarks: string;
};

export type IHero = {
  uuid: string;
  index: number;
  title: string;
  description: string;
  file: string;
  type: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  created_by: string;
  created_by_name: string;
  remarks: string;
};

export interface IPaginationResponse<T> {
  data: T[];
  pagination: IPagination;
}

export type ITender = {
  code: string;
  created_at: string;
  created_by: string;
  created_by_name: string;
  file: string;
  published_date: string;
  remarks: string | null;
  table_name: string;
  title: string;
  type: string;
  updated_at: string | null;
  uuid: string;
};

export type IFeature = {
  id: number;
  uuid: string;
  index: number;
  title: string;
  description: string;
  file: string;
  is_active: boolean;
  remarks: string;
};

export interface IAlumni {
  name: string;
  designation?: string;
  description: string;
  image: string;
}
