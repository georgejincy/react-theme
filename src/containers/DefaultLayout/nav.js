export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cui-speedometer icons',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Students',
      url: '/students',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Career Preparation',
          url: '/students/career-preparation',
          icon: 'icon-pencil'
        },
        {
          name: 'College Credit',
          url: '/students/college-credit',
          icon: 'icon-pencil'
        }
      ]
    },
    {
      name: 'Parents',
      url: '/parents',
      icon: 'icon-pencil'
    }
  ]
}
