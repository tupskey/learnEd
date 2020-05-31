import React from 'react'
import { Container, Row, Col } from "shards-react";
import Videos from "../components/LearningOverview/Videos";
import Books from "../components/LearningOverview/Books";
import Audio from "../components/LearningOverview/Audio";
import Courses from "../components/LearningOverview/Courses";
 const LearningOverview = ()=> {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4"></Row>
        <Row>
          {/* Display Videos */}
          <Col sm="12" md="4" lg="3" className="mb-4">
            <Videos />
          </Col>

          {/* Display Audio */}
          <Col sm="12" md="4" lg="3" className="mb-4">
            <Audio />
          </Col>

          {/* Display Books */}
          <Col sm="12" md="4" lg="3" className="mb-4">
            <Books />
          </Col>

          {/* Display Courses */}
          <Col sm="12" md="4" lg="3" className="mb-4">
            <Courses />
          </Col>
        </Row>
      </Container>
    );
}

export default LearningOverview;    