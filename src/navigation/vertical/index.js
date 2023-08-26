const navigation = () => {
  return [
    {
      title: 'Dashboards',

      badgeContent: 'new',
      badgeColor: 'error',

      // path: '/home',
      icon: 'tabler:graph',
      children: [
        {
          title: 'Overview',
          path: '/dashboard'
        }
      ]
    },
    {
      sectionTitle: 'Cars/ Apartment'
    },
    {
      title: 'Assets',
      icon: 'tabler:car',

      // badgeContent: 'new',
      // badgeColor: 'error',

      // path: '/dashboards/crm'

      children: [
        // {
        //   title: 'Analytics',
        //   path: '/dashboards/analytics'
        // },
        {
          title: 'Overview',
          path: '/listings/'
        },
        {
          title: 'Cars',
          path: '/listings/cars'
        },
        {
          title: 'Apartments',
          path: '/asset/apartments'
        },
        {
          title: 'Awaiting Approval',
          path: '/assets/approval/crm'
        }
      ]
    },

    {
      sectionTitle: 'Track Cars'
    },
    {
      title: 'Tracker',
      icon: 'tabler:map',
      path: '/tracker/live'
    },
    {
      sectionTitle: 'Manage Users'
    },

    {
      title: 'Users',
      icon: 'tabler:user',
      path: '/apps/user/list/'
    },
    {
      title: 'Roles & Permissions',
      icon: 'tabler:settings',
      children: [
        {
          title: 'Roles',
          path: '/'
        },
        {
          title: 'Permissions',
          path: '/apps/permissions'
        }
      ]
    },
    {
      title: 'Transactions and Payments',
      icon: 'tabler:cash',
      children: [
        {
          title: 'Overview',
          path: '/apps/transactions/overview',
          icon: 'tabler:template'
        },
        {
          title: 'Successful',
          path: '/apps/transactions/successful',
          icon: 'tabler:circle-check-filled'
        },
        {
          title: 'Failed',
          path: '/apps/transactions/failed',
          icon: 'tabler:circle-x-filled'
        },
        {
          title: 'Pending',
          path: '/apps/transactions/pending',
          icon: 'tabler:clock-exclamation'
        }
      ]
    },

    {
      sectionTitle: 'Support'
    },

    // {
    //   title: 'Email',
    //   icon: 'tabler:mail',
    //   path: '/apps/email'
    // },
    {
      title: 'Emails',
      icon: 'tabler:mail',
      path: '/apps/email'
    },
    {
      title: 'Customer Support',
      icon: 'tabler:messages',
      path: '/apps/chat'
    }
  ]
}

export default navigation
