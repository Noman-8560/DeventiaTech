// assets
import {OrderedListOutlined } from '@ant-design/icons';

// icons
const icons = {
  OrderedListOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  type: 'group',
  children: [
    {
      id: 'table',
      title: 'Table',
      type: 'item',
      url: '/table',
      icon: icons.OrderedListOutlined,
      breadcrumbs: false
    },
    
  ]
};

export default dashboard;
