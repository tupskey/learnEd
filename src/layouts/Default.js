import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../../src/components/layout/MainNavbar/MainNavbar";
import MainFooter from "../components/layout/MainFooter";

const DefaultLayout = ({noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-0"
        lg={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <MainNavbar />}

        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false,
};

export default DefaultLayout;
