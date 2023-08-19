import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg"
export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormsChange = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value}
        )
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("https://localhost:5000/contact", {
            method:"POST",
            headers: {
                "Content-Type":"Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        setFormDetails(formInitialDetails); 
        let result = response.json();
        if(result.code() === 200){
            setStatus({success: true, message: 'Message Sent Successfully'})
        } else{
            setStatus({success: false, message: "Something went wrong. Please try again later."})
        }

    }

    return (
        <section className = "contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src = {contactImg} alt = "Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormsChange('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormsChange('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="Email Adress" onChange={(e) => onFormsChange('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormsChange('phone', e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea row="6" type="text" value={formDetails.message} placeholder="Message" onChange={(e) => onFormsChange('message', e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger":"success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
    
}