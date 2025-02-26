/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/react-fontawesome";
import {
    faStar,
    faStarHalfAlt,
    faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";

// import Header from "../../../ui/Header/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import headphones from "../../../assets/images/headphones.jpg";
import { Badge, Col, Row } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Product({ ...post }) {
    const {
        id,
        availabilityStatus: stock,
        description,
        thumbnail: image,
        title,
        rating,
        price,
    } = post;
    // console.log(post);
    const descriptionE = description.slice(0, 50);
    // console.log(11, descriptionE);

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <>
            {/* <div className="col-12 col-md-6 col-lg-4"> */}
            <Col>
                <Card className="position-relative">
                    <div
                        className="position-absolute "
                        style={{ right: "20px", top: "10px" }}
                    >
                        {stock === "In Stock" ? (
                            <Badge pill bg="success">
                                In Stock
                            </Badge>
                        ) : stock === "Low Stock" ? (
                            <Badge pill bg="danger" className="text-capitalize">
                                out Stock
                            </Badge>
                        ) : (
                            ""
                        )}
                    </div>

                    <Card.Img
                        variant="top"
                        src={image}
                        className="object-fit-contain"
                    />

                    <Card.Body>
                        <div className="row g-2 mb-3">
                            <div className="col-9">
                                <Card.Title className="fw-bold">
                                    {title}
                                </Card.Title>
                            </div>

                            <div className="col-3">
                                <Card.Text className="fw-bold">
                                    ${price}
                                </Card.Text>
                            </div>
                        </div>

                        <Card.Text>{descriptionE}</Card.Text>

                        {/* <Card.Text>{rating}</Card.Text> */}

                        <div className="rating-stars my-3">
                            {[...Array(fullStars)].map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    color="#2fa023"
                                />
                            ))}
                            {hasHalfStar && (
                                <FontAwesomeIcon
                                    icon={faStarHalfAlt}
                                    color="#2fa023"
                                />
                            )}
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <Button
                                    variant="outline-success"
                                    className="text-capitalize rounded-5 fw-bold"
                                >
                                    Add to card
                                </Button>
                            </div>

                            <div className="col-6">
                                <Button
                                    variant="outline-success"
                                    className="text-capitalize rounded-5 fw-bold"
                                >
                                    <Link
                                        className="nav-link"
                                        to={`/products/${id}`}
                                    >
                                        Details
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            {/* </div> */}
        </>
    );
}

export default Product;
