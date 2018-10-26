import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import {
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from '@coreui/react'

import navigation from './nav'
import DefaultHeader from './DefaultHeader'
import routes from '../../routes'

class DefaultLayout extends Component {
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
            <Grid fluid>
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
              </Switch>
            </Grid>
          </main>
        </div>
      </div>
    )
  }
}

DefaultHeader.propTypes = {
  schoolName: PropTypes.number.isRequired
}

DefaultHeader.defaultProps = {
  schoolName: 0
}

const mapStateToProps = state => ({
  schoolName: state.schoolselect.schoolName
})

export default connect(
  mapStateToProps,
  null
)(DefaultLayout)

// export default DefaultLayout
