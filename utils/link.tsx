import {AppWindow,AreaChart,Layers} from 'lucide-react'


type NavLink = {
  href: string;
  label: string;
  icon:React.ReactNode;
};

const links: NavLink[] = [
  {
    href: '/add-job',
    label: 'add job',
    icon: <Layers className='!w-6 !h-6' />,
  },
  {
    href: '/jobs',
    label: 'all jobs',
    icon: <AppWindow className='!w-6 !h-6'/>,
  },
  {
    href: '/stats',
    label: 'stats',
    icon: <AreaChart className='!w-6 !h-6 ' />,
  },
];

export default links;


