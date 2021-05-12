import React from 'react'
import Card from './Card.jsx';
import { Container, Row, Col } from 'react-bootstrap'

export default function Products() {

    let data = require('../data.json');

    return (
        <div>
            <Container className="products">
                <Row>
                    <Col>
                        <p className="section-title py-1"> Fresh Recommendations</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="products-container">
                        <Row >
                            {data[0].products.map((product, i) => {
                                return (
                                    <Col className="mb-1 d-flex justify-content-center align-items-center" xs={12} md={6} lg={4} xl={3}>
                                        <Card data={product} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">
                        <a href="./" className="loadMoreBtn rounded">Load More</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
