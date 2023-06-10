import React, { useState } from "react";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import ReviewEditForm from "./ReviewEditForm";

import styles from "../../styles/Review.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Review = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    rating,
    id,
    setGame,
    setReviews,
    likes_count,
    like_id,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reviews/${id}/`);
      setGame((prevGame) => ({
        results: [
          {
            ...prevGame.results[0],
            reviews_count: prevGame.results[0].reviews_count - 1,
          },
        ],
      }));

      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.filter((review) => review.id !== id),
      }));
    } catch (err) {}
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { review: id });
      setReviews((prevReviews) => ({
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? {
                ...review,
                likes_count: review.likes_count + 1,
                like_id: data.id,
              }
            : review;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}`);
      setReviews((prevReviews) => ({
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? { ...review, likes_count: review.likes_count - 1, like_id: null }
            : review;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <ReviewEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              rating={rating}
              profileImage={profile_image}
              setReviews={setReviews}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <>
              <p className={styles.Rating}>
                {rating}
                <i className="fa fa-star"></i>
              </p>
              <p>{content}</p>
            </>
          )}
          <div>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't like your own review!</Tooltip>}
              >
                <i className="far fa-heart" />
              </OverlayTrigger>
            ) : like_id ? (
              <span onClick={handleUnlike}>
                <i className={`fas fa-heart ${styles.Heart}`} />
              </span>
            ) : currentUser ? (
              <span onClick={handleLike}>
                <i className={`far fa-heart ${styles.HeartOutline}`} />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like games!</Tooltip>}
              >
                <i className="far fa-heart" />
              </OverlayTrigger>
            )}
            {likes_count}
          </div>
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Review;