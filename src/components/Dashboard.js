import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Row } from 'reactstrap'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <Row>
          <Col xs='12' sm='6' md='4'>
            <Card className='text-white text-center'>
              <CardBody>
                <Link to='/school1'>School 1</Link>
              </CardBody>
            </Card>
          </Col>
          <Col xs='12' sm='6' md='4'>
            <Card className='text-white text-center'>
              <CardBody>
                <Link to='/school2'>School 2</Link>
              </CardBody>
            </Card>
          </Col>
          <Col xs='12' sm='6' md='4'>
            <Card className='text-white text-center'>
              <CardBody>
                <Link to='/school3'>School 3</Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard
