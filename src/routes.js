import DefaultLayout from './containers/DefaultLayout'
import Dashboard from './components/Dashboard'
import School1Career from './views/school1/Career'
import School1CollegeCredit from './views/school1/CollegeCredit'
import School1Dashboard from './views/school1/Dashboard'
import School1Parents from './views/school1/Parents'
import School2Career from './views/school2/Career'
import School2CollegeCredit from './views/school2/CollegeCredit'
import School2Dashboard from './views/school2/Dashboard'
import School2Parents from './views/school2/Parents'
import School3Career from './views/school3/Career'
import School3CollegeCredit from './views/school3/CollegeCredit'
import School3Dashboard from './views/school3/Dashboard'
import School3Parents from './views/school3/Parents'

/* const CareerChild = ({match}) => {
  function render () {
    switch (match.params.school) {
      case 'school1':
        return Dashboard
      case 'school2':
      return School2Career
      case 'school3':
      return School3Career
    }
  }

  } */

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {
    path: '/school1',
    name: 'School 1',
    exact: true,
    component: School1Dashboard
  },
  {
    path: '/school1/dashboard',
    name: 'Dashboard',
    component: School1Dashboard
  },
  {
    path: '/school1/students',
    name: 'Students',
    exact: true,
    component: School1Career
  },
  {
    path: '/school1/students/career-preparation',
    name: 'Career',
    component: School1Career
  },
  {
    path: '/school1/students/college-credit',
    name: 'Career',
    component: School1CollegeCredit
  },
  { path: '/school1/parents', name: 'Parents', component: School1Parents },
  {
    path: '/school2',
    name: 'School 2',
    exact: true,
    component: School2Dashboard
  },
  {
    path: '/school2/dashboard',
    name: 'Dashboard',
    component: School2Dashboard
  },
  {
    path: '/school2/students/career-preparation',
    name: 'Career',
    component: School2Career
  },
  {
    path: '/school2/students/college-credit',
    name: 'Career',
    component: School2CollegeCredit
  },
  { path: '/school2/parents', name: 'Parents', component: School2Parents },
  {
    path: '/school3',
    name: 'School 3',
    exact: true,
    component: School3Dashboard
  },
  {
    path: '/school3/dashboard',
    name: 'Dashboard',
    component: School3Dashboard
  },
  {
    path: '/school3/students/career-preparation',
    name: 'Career',
    component: School3Career
  },
  {
    path: '/school3/students/college-credit',
    name: 'Career',
    component: School3CollegeCredit
  },
  { path: '/school3/parents', name: 'Parents', component: School3Parents }
]

export default routes
