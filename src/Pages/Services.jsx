import React from 'react'
import { Container, Row} from 'react-bootstrap'
import ServiceDetail from './ServiceDetail'

function Services() {
    return (
       <Container>
           <Row>
           <div>
             <h1>Services Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        voluptatibus officiis nam accusamus saepe culpa soluta dicta incidunt,
        fugiat quos, quae quasi corrupti illum tempora, tempore necessitatibus
        perspiciatis. Sequi, mollitia.
      </p>
        </div>
           </Row>
           <Row>
               <ServiceDetail />
           </Row>
       </Container>
    )
}

export default Services
