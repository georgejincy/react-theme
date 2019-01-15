const nav0 = {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cui-speedometer icons',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    }
  ]
}

const nav1 = {
  items: [
    {
      name: 'Dashboard',
      url: '/school1/dashboard',
      icon: 'cui-speedometer icons',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Students',
      url: '/students',
      icon: 'cui-puzzle',
      children: [
        {
          name: 'Career Preparation',
          url: '/school1/students/career-preparation',
          icon: 'cui-pencil'
        },
        {
          name: 'College Credit',
          url: '/school1/students/college-credit',
          icon: 'cui-pencil'
        }
      ]
    },
    {
      name: 'Parents',
      url: '/school1/parents',
      icon: 'cui-pencil'
    }
  ]
}

const nav2 = {
  items: [
    {
      name: 'Dashboard',
      url: '/school2/dashboard',
      icon: 'cui-speedometer icons',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Students',
      url: '/students',
      icon: 'cui-puzzle',
      children: [
        {
          name: 'Career Preparation',
          url: '/school2/students/career-preparation',
          icon: 'cui-pencil'
        },
        {
          name: 'College Credit',
          url: '/school2/students/college-credit',
          icon: 'cui-pencil'
        }
      ]
    },
    {
      name: 'Parents',
      url: '/school2/parents',
      icon: 'cui-pencil'
    }
  ]
}

const nav3 = {
  items: [
    {
      name: 'Dashboard',
      url: '/school3/dashboard',
      icon: 'cui-speedometer icons',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Students',
      url: '/students',
      icon: 'cui-puzzle',
      children: [
        {
          name: 'Career Preparation',
          url: '/school3/students/career-preparation',
          icon: 'cui-pencil'
        },
        {
          name: 'College Credit',
          url: '/school3/students/college-credit',
          icon: 'cui-pencil'
        }
      ]
    },
    {
      name: 'Parents',
      url: '/school3/parents',
      icon: 'cui-pencil'
    }
  ]
}

export default {
  nav0: nav0,
  nav1: nav1,
  nav2: nav2,
  nav3: nav3
}
