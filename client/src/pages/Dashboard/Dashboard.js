import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import SchoolInfo from "../../components/SchoolInfo";
import CheckIn from "../../components/CheckIn";
import HomeworkWrapper from "../../components/HomeworkWrapper";
import SessionWrapper from "../../components/SessionWrapper";
import ProfileWrapper from "../../components/ProfileWrapper";
import ViewAllBtn from "../../components/ViewAllBtn";

class Dashboard extends Component {
  // Setting our component's initial state
  // state = {
  //   books: [],
  //   title: "",
  //   author: "",
  //   synopsis: ""
  // };

  render() {
    return (
      <Container>
        <Row>
          <ProfileWrapper />
          <div className="DashboardWrapper">
            <SchoolInfo />
            <CheckIn />
            <HomeworkWrapper />
            <ViewAllBtn />
            <SessionWrapper />
            <ViewAllBtn />
          </div>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
