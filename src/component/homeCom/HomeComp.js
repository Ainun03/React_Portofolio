import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Container, Image, Row, Col, Card } from "react-bootstrap";

import {HiOutlineChevronDown} from 'react-icons/hi';
import './home.css';

function HomeComp() {
    return(
        <Fragment>
            <div className="position-relative">
                <Container>
                    <div className=" position-absolute  h-100 d-flex flex-column justify-content-center align-items-start">
                        <div>
                            <h1 className="text-white" >Hello! I’m Rofiq.</h1>   
                        </div>
                        <div>
                            <p>A tenacious, passionate marketer and maker who loves turning bold ideas into impactful & memorable experiences.</p>
                        </div> 
                        <Link to='/'>                        
                            <p className="text-white">
                                Contact Mee!!
                            </p>
                        </Link>
                        
                    </div>               
                </Container>
                <Image
                style={{
                    width:"100%",
                    height:"50%"
                }}
                src="/images/bg1.jpg" alt="bg"/>  
            </div>
            <div className="pt-3 bg-secondary py-3">
                <Container>
                    <div className="">
                        <h1>Portofolio</h1>
                        <p>Check it out</p>
                        <HiOutlineChevronDown size={20} className=""/>
                    </div>

                    <Row xs={2} md={3} className="pt-2 g-4">
                        <Col>
                            <div className="cont">
                                <div className="flip ">
                                    <Image
                                    className="front"
                                    style={{
                                        width:"100%",
                                        height:"100%",
                                        borderTopRightRadius:"30px",
                                        borderTopLeftRadius:"30px",
                                        borderBottomRightRadius:"30px",
                                        borderBottomLeftRadius:"30px",
                                    }} 
                                    // variant="top" 
                                    src="/images/apel.png" />
                                        <Card.Body 
                                            // onClick={() => navigate('/kantor-sekretariat')}
                                            style={{
                                                borderTopRightRadius:"30px",
                                                borderTopLeftRadius:"30px",
                                                borderBottomRightRadius:"30px",
                                                borderBottomLeftRadius:"30px",
                                            }}
                                            className=" back text-center">
                                            <Card.Title >Project</Card.Title>         
                                            
                                        </Card.Body>                                  
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="cont">
                                <div className="flip ">
                                    <Image
                                        className="front"
                                        style={{
                                            width:"100%",
                                            height:"100%",
                                            borderTopRightRadius:"30px",
                                            borderTopLeftRadius:"30px",
                                            borderBottomRightRadius:"30px",
                                            borderBottomLeftRadius:"30px",
                                        }} 
                                        // variant="top" 
                                        src="/images/apel.png"
                                    />
                                    <Card.Body 
                                        // onClick={() => navigate('/kantor-sekretariat')}
                                        style={{
                                            borderTopRightRadius:"30px",
                                            borderTopLeftRadius:"30px",
                                            borderBottomRightRadius:"30px",
                                            borderBottomLeftRadius:"30px",
                                        }}
                                        className=" back text-center">
                                        <Card.Title >Project</Card.Title>         
                                        
                                    </Card.Body>                                    
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="cont">
                                <div className="flip ">
                                    <Image
                                        className="front"
                                        style={{
                                            width:"100%",
                                            height:"100%",
                                            borderTopRightRadius:"30px",
                                            borderTopLeftRadius:"30px",
                                            borderBottomRightRadius:"30px",
                                            borderBottomLeftRadius:"30px",
                                        }} 
                                    // variant="top" 
                                        src="/images/apel.png" 
                                    />
                                        <Card.Body 
                                            // onClick={() => navigate('/kantor-sekretariat')}
                                            style={{
                                                borderTopRightRadius:"30px",
                                                borderTopLeftRadius:"30px",
                                                borderBottomRightRadius:"30px",
                                                borderBottomLeftRadius:"30px",
                                            }}
                                            className=" back text-center">
                                            <Card.Title >Project</Card.Title>                                 
                                        </Card.Body>                                        
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        </Fragment>
    )
}
export default HomeComp;