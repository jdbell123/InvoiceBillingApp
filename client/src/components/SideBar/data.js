import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as FiIcons from 'react-icons/fi';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,

  },
  {
    title: 'Data',
    path: '/data',
    icon: <FiIcons.FiDatabase />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Import Employee Data',
        path: '/data/importemployeedata',
        icon: <AiIcons.AiOutlineImport />,
        cName: 'sub-nav'
      },
      {
        title: 'Create Division EDI Import File',
        path: '/data/importdivisiondata',
        icon: <AiIcons.AiOutlineImport />,
        cName: 'sub-nav'
      },
      {
        title: 'Import Division Data',
        path: '/data/importdivisiondata',
        icon: <AiIcons.AiOutlineImport />,
        cName: 'sub-nav'
      },
      {
        title: 'Create IIF Files',
        path: '/data/createiiffiles',
        icon: <MdIcons.MdOutlineCreateNewFolder />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Billing Report',
        path: '/reports/billing',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Employer Report',
        path: '/reports/employer',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Employer Balance Report',
        path: '/reports/employerbalance',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Employer',
    path: '/employer',
    icon: <MdIcons.MdOutlineRealEstateAgent />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add New Employer',
        path: '/employer/add',
        icon: <IoIcons.IoMdAdd />,
        cName: 'sub-nav'
      },
      {
        title: 'Modify Employer',
        path: '/employer/modify',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Delete Employer',
        path: '/employer/delete',
        icon: <RiIcons.RiDeleteBinLine />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Agent',
    path: '/agent',
    icon: <MdIcons.MdOutlineRealEstateAgent />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add New Agent',
        path: '/agent/add',
        icon: <IoIcons.IoMdAdd />,
        cName: 'sub-nav'
      },
      {
        title: 'Modify Agent',
        path: '/agent/modify',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Delete Agent',
        path: '/agent/delete',
        icon: <RiIcons.RiDeleteBinLine />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Overrides',
    path: '/overrides',
    icon: <IoIcons.IoMdHelpCircle />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Employee Level',
        path: '/overrides/employee',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Account Level',
        path: '/overrides/account',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: <MdIcons.MdOutlineAdminPanelSettings />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/admin/users',
        icon: <FiIcons.FiUsers />,
        cName: 'sub-nav'
      },
      {
        title: 'Set Processing Dates',
        path: '/admin/setdates',
        icon: <MdIcons.MdOutlineDateRange />,
        cName: 'sub-nav'
      }
      ,
      {
        title: 'Reset Employer For New Plan Year',
        path: '/admin/resetnewplanyear',
        icon: <MdIcons.MdOutlineResetTv />,
        cName: 'sub-nav'
      }
    ]
  }
];