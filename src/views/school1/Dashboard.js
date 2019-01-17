import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <h1>School-1 Dashboard</h1>
        <Row>
          <Col xs='12' sm='6' md='4'>
            <Card className='card-accent-primary'>
              <CardHeader>
                Card actions
                <div className='card-header-actions'>
                  {/* eslint-disable-next-line */}
                  <a href="#" className="card-header-action btn btn-setting">
                    <i className='cui-settings' />
                  </a>

                  {/* eslint-disable-next-line */}
                  <a className="card-header-action btn btn-close">
                    <i className='cui-close' />
                  </a>
                </div>
              </CardHeader>

              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col col='12' xl className='mb-3 mb-xl-0'>
            Normal
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button block color='primary'>
              Primary
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button block color='secondary'>
              Secondary
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button block color='success'>
              Success
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button block color='warning'>
              Warning
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button block color='danger'>
              Danger
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button block color='info'>
              Info
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button block color='light'>
              Light
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button block color='dark'>
              Dark
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button block color='link'>
              Link
            </Button>
          </Col>
        </Row>
        <Row className='align-items-center mt-3'>
          <Col col='12' xl className='mb-3 mb-xl-0'>
            Active State
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button active block color='primary' aria-pressed='true'>
              Primary
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button active block color='secondary' aria-pressed='true'>
              Secondary
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button active block color='success' aria-pressed='true'>
              Success
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button active block color='warning' aria-pressed='true'>
              Warning
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button active block color='danger' aria-pressed='true'>
              Danger
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button active block color='info' aria-pressed='true'>
              Info
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button active block color='light' aria-pressed='true'>
              Light
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button active block color='dark' aria-pressed='true'>
              Dark
            </Button>
          </Col>
          <Col col='6' sm='4' md='2' xl className='mb-3 mb-xl-0'>
            <Button active block color='link' aria-pressed='true'>
              Link
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard
