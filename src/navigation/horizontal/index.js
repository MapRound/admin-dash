const navigation = () => [
  {
    title: 'Home',
    path: '/dashboard',
    icon: 'tabler:smart-home'
  },
  {
    title: 'Second Page',
    path: '/second-page',
    icon: 'tabler:mail'
  },
  {
    path: '/acl',
    action: 'read',
    subject: 'acl-page',
    title: 'Access Control',
    icon: 'tabler:shield'
  }
]

export default navigation