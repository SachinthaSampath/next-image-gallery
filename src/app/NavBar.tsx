"use client";

import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { usePathname } from "next/navigation";

const NavBar = () => {

  const pathname = usePathname();
console.log(pathname);

  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          NextJS 18 Image Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href="/static" active={pathname=='/static'}>
              Static
            </Nav.Link>
            <Nav.Link as={Link} href="/dynamic" active={pathname=='/dynamic'}>
              Dynamic
            </Nav.Link>
            <Nav.Link as={Link} href="/isr" active={pathname=='/isr'}>
              ISR
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
