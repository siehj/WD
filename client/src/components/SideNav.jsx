import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


const SideNav = (props) => {
return (
    <nav id="sidebar" >
      {props.navOpen ?
      <div>
        <div className="sidebar-header text-center" >
          <h2>Wellness Dental</h2>
        </div>
          {/* REFACTOR LIST FOR NAV */}
        <ul className="list-unstyled components">
          {props.status === 'Admin' ?
            Object.keys(props.adminSidebar).map((option, i) => {
              if (option !== props.currScreen) {
                return (
                  <li key={i} >
                    <a className="text-center" name={option} onClick={props.changeScreen} >{option}</a>
                  </li>
                )
              }
            })
            :
            Object.keys(props.staffSidebar).map((option, i) => {
              if (option !== props.currScreen) {
                return (
                  <li key={i} >
                    <a className="text-center" name={option} onClick={props.changeScreen} >{option}</a>
                  </li>
                )
              }
            })
          }
        </ul>
        
        <Container>
          <Row>
            <Col className="navIcons text-center">
              <a>
                {props.newMessages.length ? <Badge color="success" style={{ marginBottom: '10px' }} >{props.newMessages.length}</Badge> : null }
              {/* chat bubble */}
                <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN4SURBVGhD7ZpNSBRhHMZXLa2QwAq69Q0dokOJdKwkJREvUociIQIjhA4GQUZQUEHYKVKhQx9IhZRI1CUKCuoiiBGdiki0DwMp+hSLSvu9+z7uMM2uM2u7s7OwP3h4Z97/1zPr7uqsGytQoED2mZycLJuamtrC2oZuokE0hn6xH4fj72gEPUQX0D60Vi1yB96KMVKPetBXazd9qH2OTqOVah0OzC5laAsaslYyA/3+oDtoo0ZlD4bUoZeanRXob7iGlmps5qB/OY0v21HhwLwPaIcs/D80W42eqX+oMNdwlsMS2ZkdNFmH3tu2uQMP11nmyFZ6ULwGjdlWuQcvV1mKZC8YFFRQmNUX9WzA0ylZDAYFPaqNFPgybJXNmSF/py2LJlzICMsC2U0OSWXolS2JLng8JsvJIaFZuZEGn59YymXbCwlPbWr0wesB2XZDYL1y8gL8PpZ1N8SO2JT8gAv5jRbJvgObfcrJG/BcI/sObL5QPBDkj6IvOk0JOW/RN52mhJzXaFyngSC/VfYd2P9sw/7Q4KipYZ2PbmnbA7Fm5S1ED7Ttgn1Do8njdAnHgzbiD7ntps6FYr5QbB61YpUZk1U24ob9YaXE4bxOIRfsP1FKHM6bFPKF3C6VObD5Q/EZIc+8yBI3PRw3KuSCfXP7m3iv53h/PPAP5L1jKVWa6ddmI/6Qe15lDmwG/nOd3H5k7habkDGSFGL3US1qRh+17YFYH6pBB5Hv62kack/KvgOb/YrnE3tl34EL6VQwn6iUfQcuZLeCeQF+zVPVewtMwLxFTti06IPXbln3QvyGTYs+XMhm2fZCvNKmRRsuwvW7Jykk3VZ+lNkmu6khaRkXE/i9PGzw1iur/pAcyTtFfJk/VBfLZjAo6FJ9JMDPONoke8GhtoTCXtsmt+DjJ2qQtfShRwm6Eu+WI7iACVQvS7OHXkU0OmQeFds6PJg5hDbISmagYa36hwLzLrFUaHzmoPF2OyK7MGcAVWts5qH5Oc3KOPQ23EMNnKb3iXs60HweQ0bjUzME/cyL+BE6zOkqjcouDPP9BUnOXZYVrNWoheMzrJ2oG11EHeg42oPMff5ctQ8HBpr/H75hTQoxQweHifvuSILJdmvZC7Fh5P2QLGpgsgolvr0wDXsDLOZTkWj/FKbBcCsyX7cwT50TrLvQcoULFEhJLPYX9MB1kryBNa4AAAAASUVORK5CYII=" />
              </a>
              {/* info icon */}
              <a><img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAORSURBVGhD7ZrNS1RRGMZNK8xNggWtqk0t+tj0sYnINhW5CBd9GQS1Ecmg/AOSCPqAslZGupCijauoICNrEW6LglwkhEhlFlQWCWqUM/3OPQ/drqM2c8+5dzL8wcO5c973PO97ZuY6d+5YMsf/SiaTWYGOovZsNvuYcQh94zjL+BMNoz50G51DOwlVaHlxoZkq1ISemYYLhXWjqBPt5uE82aYHRZdQvAWNBB15AK9edIDD5DdkilCsAQ0H1RMA7x60ViX9g/lS9ED1EoU6Y+i4SvvDPEPoreqkBjVvMCxQG25gthl9ttbpQ+17DOVqJx6YrEeJnQ/5Qg93GMrUVmGw2JwTzm8nPMz7PaOHscHiilrLH9aZv073rUU8WP8G7eCwDC3m+EwQiAnrzZNRqxbzgzUNdnl88Ngiu98wfd1G44HnJ1Qlu5kh0bylnM4L1g/JLgLze5QSGzzaZTczJLZojQtfUc4nNN51NhwfPCbQallODQnm2snLZQc+h2UbwFQpcz026gY+HbKdGhKalOsMXuMMpxk3oV3okY24I+9KtZ0LCc9t6qygXm1HIbDSxmcHPOldaj0KsSM2ZXbARsy5nHsdRqDNpriBzyjD08livo/RK3huUPshTPr6i/JClhEIbbUZ/qBWnexDmBxU3Al8XjFsZFwj6wDmkthIs+xDmAxuFPgCv8grw1QSG7kk+xDFvJHSRq7KPoTJH4p7IaWNtMo+hMkvinshpY2cl30Iky8V90JKGzkh+xAmzddJb6S0kRrZhzB5VnEvpLERWC77EAqbe7HeSHoj+PfLOgqxCoJjNs2dFDZyTda5EOxUnjMpbKRa1rkQrFGeM0luBO8BhlJZ50LQ3AbqDbIdSXgjjbKdHpIOKj8WrB9BD1HkbgeP12n+iVJjwfpBtEi200OueVViX9KzNvJKTIYUp1cG/0Oy+jskm7vv5gt+wbDuNcO+6UT8FGMsWNutFvOHRce0/p+Afj4wLFN7hcHim9amuNDHd4btaqtwWLwQk7uBW5GgvvlFeL9aig9e5RjdsrbpQt1xtFetuINnGYaXkfPvHPlCqfdom1rwC/61mH+0pZKDGt0M8U7sfKGIudHdjiZsWX/g+Q7l/znhAwquQh0o1ufNn+AxgBo5dPvR0wWKV6J6GulCef8kQW4/akPVPJz+ArAY0NB8ZG7O1aFmdFHNtjJ/gfEkMv93kvvNbo7/ipKSXx1HK0yKqpBEAAAAAElFTkSuQmCC"/></a>
              {/* calculator icon */}                  
              <a><img className="icon" onClick={props.openCalc} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE7SURBVGhD7dYBasJAEIXh3Efv0+OYg5fYGfr7SDQbN1OKOzAfBOzb3eGtoHYqpZRc7k+I86C3EOdBbyHOg95CnAe9hTgPegvxeOgXxhghDmNMP86FMUaIwxjTj3NhjBHiMMb041wYY4Q4jDF/xzwhzoPeQpwHvYU4D3oLcR70FuI86C3EpZSRLcty4WVTz56PsGI3e77t+SJ64WvsuRGNwQvxbXmn4MslPPM1tvm+3UuwHMaYflbkui7m/G97dAl/3dhzZYuwHMaYcw4Ket5c4/gGW8IYc95B0e7yjm1hjInxYs+F196VH0LrEinKu9QXaJV/GPoSe+UpvJeN9SH2Qq2iR2sc32BLGGP6WZH8P2R2bv493n53PfM1trmZpQ3Wwhhznp2dW+UfVpfYLf9xVi7vv9OllPKPpukHuov4L0ppPIwAAAAASUVORK5CYII="/></a>
            </Col>
          </Row>
          <Row >
            <Col><Button className="logoutBtn" outline color="success" size="block lg" >Logout</Button></Col>
          </Row>
        </Container>
        </div>
        : null
      }
    </nav>
  )
}

export default SideNav;