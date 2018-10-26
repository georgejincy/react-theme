import React, { Component } from 'react'
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
            <AppSidebarNav navConfig={navigation} {...this.props} />
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

export default DefaultLayout
