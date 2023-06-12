import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import appStyles from "../../App.module.css";
import styles from "../../styles/ReviewCreateEditForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";

function ReviewCreateForm(props) {
  const { setReviews } = props;
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/reviews/", {
        content,
        rating: parseInt(rating),
      });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: [data, ...prevReviews.results],
      }));
      setReviews((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            reviews_count: prevPost.results[0].reviews_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <p className={appStyles.Heading}>Leave a review!</p>
      <Form className="mt-2 text-center" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Rating (1-5 stars)</Form.Label>
          <Form.Control
            as="select"
            className={`${styles.FormRating} ${styles.Form} mb-2`}
            aria-label="Rating from 1 to 5"
            value={rating}
            onChange={handleChangeRating}
          >
            <option value="1">1 *</option>
            <option value="2">2 **</option>
            <option value="3">3 ***</option>
            <option value="4">4 ****</option>
            <option value="5">5 *****</option>
          </Form.Control>
          <Form.Control
            className={`${styles.Form} ${styles.FormContent}`}
            placeholder="My review..."
            as="textarea"
            value={content}
            onChange={handleChange}
          />
        </Form.Group>

        <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
      </Form>
    </>
  );
}

export default ReviewCreateForm;