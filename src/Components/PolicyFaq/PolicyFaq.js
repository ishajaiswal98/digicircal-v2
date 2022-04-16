import React from 'react'
import { Col, Container, Row , Accordion } from 'react-bootstrap'

const PolicyFaq = () => {
  return (
    <div>
      <Container>
            <Row>
              <Col md={6}>
               <h2>OUR POLICY</h2>
               <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>OUR SERVICE GURANTEE</Accordion.Header>
    <Accordion.Body>
      At GOLDEN HONEY , We prioritize your satisfaction and<br/>
      our expertise. Your positive experience is<br/> paramount and in the event you are not<br/> completely satisfied, please advise us at the<br/> time of your service. Alternatively, you can<br/> reach out to us on Whatsapp within 24 hours <br/>of your service.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>REFUNDS</Accordion.Header>
    <Accordion.Body>
    The amount to be refunded will be<br/> compensated by a full corrective service<br/> should you not like the treatment that has <br/>been provided to you. The process of <br/>corrective service will stem from mistake(s) <br/>provided by our beauticians. We are not able <br/>to provide you with the corrective treatment<br/> should you change your mind after the service<br/> was provided. Clients are requested to <br/>contact us via Whatsapp within 24 hours of <br/>the service provided to discuss the concern <br/>and to schedule a follow-up corrective service <br/>(if deem applicable). The corrective services <br/>should take place within 3 days post the initial<br/> service date.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>RESCHEDULE</Accordion.Header>
    <Accordion.Body>
    At GOLDEN HONEY, we pride on our flexibility. Please<br/> reach out to us on Whatsapp should you wish<br/> to change the time and date of your service.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>CANCELLATION</Accordion.Header>
    <Accordion.Body>
    We understand impromptu things pop up all<br/> the time. We just ask for you to kindly cancel <br/>the service you have booked 2 hours prior to the scheduled time.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>PRIVACY</Accordion.Header>
    <Accordion.Body>
    <p>It is important for you to know how your personal information may be collected, stored and used during your visit to our website. This information may include:</p>
    
    <p>Transactions you are conducting on RUHEE's website, including the process of booking a service through Whatsapp
Registration details used to create an account
Name and email addresses provided for subscription of newsletter and offers</p>
    <p>Please note that all credit or debit card details used for transaction(s) on our website will not be stored nor shared with any third party</p>
    </Accordion.Body>

  </Accordion.Item>
</Accordion>
              </Col>

              <Col md={6}>
              <h2>FAQ</h2>

              <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>HOW DO I SCHEDULE AN APPOINTMENT </Accordion.Header>
    <Accordion.Body>
     
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>WHAT ARE THE OPERATING HOURS?</Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="0">
    <Accordion.Header>WHAT CAN I EXPECT FROM THE BEAUTICIAN DURING THE HOME VISIT?</Accordion.Header>
    <Accordion.Body>
      lorem
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="0">
    <Accordion.Header>HOW DO I PAY FOR THE HOME SERVICE?</Accordion.Header>
    <Accordion.Body>
      lorem
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="0">
    <Accordion.Header>WHAT ARE THE SERVICES OFFERED BY GOLDEN HONEY?</Accordion.Header>
    <Accordion.Body>
      lorem
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="0">
    <Accordion.Header>CAN I HAVE GOLDEN HONEY SERVICES AT MY OFFICE RATHER THAN MY HOME?</Accordion.Header>
    <Accordion.Body>
      lorem
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
              </Col>
            </Row>

      </Container>
    </div>
  )
}

export default PolicyFaq