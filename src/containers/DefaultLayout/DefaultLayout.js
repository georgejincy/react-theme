import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap'

import {
  AppHeader,
  AppBreadcrumb,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
  AppAside
} from '@coreui/react'

import navigation from './nav'
import DefaultAside from './DefaultAside'
import DefaultHeader from './DefaultHeader'
import routes from '../../routes'

class DefaultLayout extends Component {
  componentDidUpdate (prevProps) {
    if (
      this.props.schoolName !== prevProps.schoolName &&
      this.props.theme.primary !== prevProps.theme.primary
    ) {
      console.log('SCHOOL changed !!!!')
      if (this.props.theme) {
        Object.keys(this.props.theme).forEach(key => {
          const cssKey = `--${key}`
          const cssValue = this.props.theme[key]

          document.body.style.removeProperty(cssKey)
          document.body.style.setProperty(cssKey, cssValue)
        })
      }
    }
  }

  render () {
    console.log('DefaultLayout props ==>' + JSON.stringify(this.props))
    let nav = null
    switch (this.props.schoolName) {
      case 1:
        nav = navigation.nav1
        break
      case 2:
        nav = navigation.nav2
        break
      case 3:
        nav = navigation.nav3
        break
      default:
        nav = navigation.nav0
    }
    return (
      <div className='app'>
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className='app-body'>
          {/* Sidebar */}
          <AppSidebar fixed display='lg'>
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={nav} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          {/* Main */}
          <main className='main'>
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => <route.component {...props} />}
                    />
                  ) : null
                })}
                <Redirect from='/' to='/dashboard' />
              </Switch>
            </Container>
          </main>
          <AppAside fixed>
            <DefaultAside />
          </AppAside>
        </div>
      </div>
    )
  }
}

DefaultHeader.propTypes = {
  schoolName: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
}

DefaultHeader.defaultProps = {
  schoolName: 0,
  theme: {}
}

const mapStateToProps = state => ({
  schoolName: state.schoolselect.schoolName,
  theme: state.schoolselect.theme
})

export default connect(
  mapStateToProps,
  null
)(DefaultLayout)

// export default DefaultLayout
