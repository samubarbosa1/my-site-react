import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa lacus, commodo nec venenatis quis, tempor sit amet est. Nam mauris leo, dictum nec dignissim eget, suscipit id elit. Duis orci felis, tincidunt in tempus eget, interdum ut velit. In vulputate velit ut nibh maximus lacinia. Fusce et velit velit</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <img src={meter1} alt="skill img"/>
                                    <h5>Web Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="skill img"/>
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="skill img"/>
                                    <h5>Logo Designer</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="skill img"/>
                                    <h5>UI Designer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="background img"/>
        </section>
    )
}