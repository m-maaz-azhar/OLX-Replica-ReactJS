import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function AdBanner() {
    return (
        <Container className="ad-banner py-4 my-4" >
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <h2>Ad Banner 728 x 90</h2>
                </Col>
            </Row>
        </Container>
    );
}