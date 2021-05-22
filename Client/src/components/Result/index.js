import React from "react";
import { FormBtn } from "../Form";
import Thumbnail from "../Thumbnail";
import { Container, Col, Row } from "../Grid";
import "./style.css";

export function Result({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ResultItem({ title, authors, description, image, link }) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <div className="row">
              <div className="col-12">
                <h3 className="float-left">{title}</h3>
                <FormBtn
                  rel="noreferrer noopener"
                  target="_blank"
                  href={link}
                ></FormBtn>
                <FormBtn href={link}></FormBtn>
              </div>
            </div>
            <div className="col-12">
              <h4 className="float-none">{authors}</h4>
              <p>{description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
