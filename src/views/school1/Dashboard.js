import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

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
      </div>
    )
  }
}

export default Dashboard
