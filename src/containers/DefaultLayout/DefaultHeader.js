import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  AppSidebarToggler,
  // AppNavbarBrand,
  AppAsideToggler
} from '@coreui/react'
import { Nav, NavItem } from 'reactstrap'
import PropTypes from 'prop-types'
import { schoolSelectOperations } from '../../state/ducks/shared/school-select'
// import logo from '../../assets/img/favicon.ico'

class DefaultHeader extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)
    this.state = {
      schoolName: this.props.schoolName || 0
    }

    this._handleChange = this._handleChange.bind(this)
    this._redirectPage = this._redirectPage.bind(this)
    this._syncSchool = this._syncSchool.bind(this)
  }

  componentDidMount () {
    this._syncSchool()
  }

  _handleChange (e) {
    console.log(e.target.value)
    const value = e.target.value
    const intValue = parseInt(value, 10)
    this.setState({
      [e.target.name]: intValue
    })
    this.props.setSchool(intValue)
    this._redirectPage(intValue)
  }

  _redirectPage (school) {
    console.log(school)
    switch (school) {
      case 1:
        this.props.history.push('/school1/dashboard')
        return
      case 2:
        this.props.history.push('/school2/dashboard')
        return
      case 3:
        this.props.history.push('/school3/dashboard')
        return
      default:
        this.props.history.push('/dashboard')
    }
  }

  _syncSchool () {
    // get current Location from props, match currentLocation to school property
    let currentLocation = this.props.location.pathname
    let parts = currentLocation.split('/')
    let currSchool = parts.length > 1 ? parts[1] : ''
    let school = 0
    console.log('current school-->' + currSchool)
    if (currSchool && currSchool.startsWith('school')) {
      school = parseInt(currSchool.substring(currSchool.length - 1), 10)
    }
    if (school !== this.props.schoolName) {
      this.props.setSchool(school)
    }
  }

  render () {
    console.log(this.props)
    console.log('YOU are at ' + this.props.location.pathname)
    this._syncSchool()
    return (
      <React.Fragment>
        <AppSidebarToggler className='d-lg-none' display='md' mobile />
        {/* <AppNavbarBrand
          full={{ src: logo, width: 30, height: 25, alt: 'Ringleader Logo' }}
          minimized={{
            src: logo,
            width: 30,
            height: 30,
            alt: 'Ringleader Logo'
          }}
        /> */}
        <AppSidebarToggler className='d-md-down-none' display='lg' />
        <Nav navbar>
          <NavItem className='px-3'>
            <label htmlFor='school'>School:</label>
            <select
              id='school'
              className='school'
              name='school'
              ref='school'
              onChange={this._handleChange}
              value={this.props.schoolName}
            >
              <option value={0}>--NA--</option>
              <option value={1}>School-1</option>
              <option value={2}>School-2</option>
              <option value={3}>School-3</option>
            </select>{' '}
          </NavItem>
        </Nav>
        <AppAsideToggler className='d-md-down-none' />
      </React.Fragment>
    )
  }
}

DefaultHeader.propTypes = {
  schoolName: PropTypes.number.isRequired,
  setSchool: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

DefaultHeader.defaultProps = {
  schoolName: 0
}

const mapStateToProps = state => ({
  schoolName: state.schoolselect.schoolName
})

const mapDispatchToProps = {
  setSchool: schoolSelectOperations.setSchool
}

// const VisibleDefaultHeader = connect( mapStateToProps, mapDispatchToProps )( DefaultHeader )

const ConnectedDefaultHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultHeader)

export default withRouter(ConnectedDefaultHeader)
