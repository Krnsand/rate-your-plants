import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/ReviewCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

function ReviewEditForm(props) {
  const { id, content, rating, setShowEditForm, setReviews } = props;

  const [formContent, setFormContent] = useState(content);
  const [formRating, setFormRating] = useState(rating);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleChangeRating = (event) => {
    setFormRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/reviews/${id}/`, {
        content: formContent.trim(),
        rating: formRating.trim(),
      });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? {
                ...review,
                content: formContent.trim(),
                rating: formRating.trim(),
                updated_at: "now",
              }
            : review;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-center">
      <Form.Group className="pr-1">
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
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          disabled={!content.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default ReviewEditForm;