import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap"

import {AiOutlineCopyright} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram}  from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlinePause} from 'react-icons/ai'

function Footer() {
    return(
        <Fragment>
            <Container>
                <Row className="py-3">
                    <Col>
                        <div className="d-flex">
                            <AiOutlineCopyright className="mt-1 me-1"/>
                            <p >Rofiq</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex gap-2 w-100 justify-content-end">
                            <Link to='/'>
                                <p style={{fontWeight:500}}>Send An Email</p>
                            </Link>
                            <p className="ms-3">|</p>
                            <div className="px-2">
                                <BsLinkedin className="me-2" size={20}/>
                                <BsInstagram className="me-2" size={20}/>
                                <FaFacebookSquare  size={23}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default Footer;