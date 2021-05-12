import React from 'react'
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown, faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className="text-center">
            <Container>
                <Row className="pt-2 pb-2 justify-content-md-center">
                    <Col xs={12} md={12} lg={1} className="header-logo">
                        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                    </Col>
                    <Col xs={12} md={12} lg={9} className="search-bar">
                        <Row className="d-flex justify-content-center">
                            <Col xs={12} md={12} lg={4} className="location rounded d-flex align-items-center justify-content-around mt-1 mb-1">
                                <span>
                                    <FontAwesomeIcon icon={faSearch} size={'lg'} />
                                </span>
                                <DropdownButton variant="transparent" id="dropdown-item-button" title="Pakistan">
                                    <Dropdown.ItemText className="DropDownOption">
                                        <FontAwesomeIcon icon={faMapMarker} size={'lg'} /> <strong>Use current location</strong><br /> Location blocked. Check browser/phone settings.
                                    </Dropdown.ItemText>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="DropDownOption" as="button">Punjab</Dropdown.Item>
                                    <Dropdown.Item className="DropDownOption" as="button">Sindh</Dropdown.Item>
                                    <Dropdown.Item className="DropDownOption" as="button">KPK</Dropdown.Item>
                                    <Dropdown.Item className="DropDownOption" as="button">Balochistan</Dropdown.Item>
                                </DropdownButton>
                                <span>
                                    <FontAwesomeIcon icon={faCaretDown} size={'lg'} />
                                </span>
                            </Col>
                            <Col xs={12} md={12} lg={8} className="searchQuery d-flex align-items-center justify-content-center mt-1 mb-1">
                                <input type="search" className="rounded px-2" placeholder="Find Cars, Mobile Phones and more..." />
                                <button type="submit">
                                    <span>
                                        <FontAwesomeIcon icon={faSearch} size={'lg'} />
                                    </span>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={12} lg={2} className="action-buttons d-flex align-items-center justify-content-center">
                        <a href="./" className="loginBtn">Login</a>
                        <a className="sellBtn" href="./">+ SELL</a>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}