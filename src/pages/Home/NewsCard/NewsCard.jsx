import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NewsCard.css";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, rating, author, total_view } = news;
  const { img, published_date, name } = author;
  const { number } = rating;
  return (
    <div>
      <Card className=" mb-3">
        <Card.Header className="d-flex align-items-center">
          <Image
            className="img-fluid img-header-height"
            src={img && img}
            roundedCircle
          />
          <div className="mb-0 ps-3 flex-grow-1">
            <p className="mb-0">{name && name}</p>
            <p>
              <small>
                {published_date && moment(published_date).format("YYYY-MM-DD")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark className="me-2 text-secondary "></FaRegBookmark>
            <FaShareAlt className="text-secondary"></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250) + ". . ."}
                <Link to={`/news/${_id}`} className="btn text-danger">
                  See more
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex ">
          <div className="flex-grow-1 ">
            <Rating
              readonly
              placeholderRating={number && number}
              emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span>{number && number}</span>
          </div>
          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
