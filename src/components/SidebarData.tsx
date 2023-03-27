import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {FcAbout} from 'react-icons/fc'
import {IoAnalyticsOutline} from 'react-icons/io5'

export const SidebarData= [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Users',
            path: '/overview/users',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Revenue',
            path: '/overview/revenue',
            icon: <IoIcons.IoIosPaper />
          }
        ]
      },
      {
        title: 'About',
        path: '/about',
        icon: <FcAbout />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        
      },
      {
        title: 'Anaytics',
        path: '/analytics',
        icon: <IoAnalyticsOutline />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
          {
            title: 'Users',
            path: '/overview/users',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Revenue',
            path: '/overview/revenue',
            icon: <IoIcons.IoIosPaper />
          }
        ]
      },
      
   
  ]

