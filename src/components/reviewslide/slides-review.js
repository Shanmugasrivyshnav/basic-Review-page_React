import { Component } from "react";
import "./slides-review.css";

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  };

  onClickLeft = () => {
    const { activeIndex } = this.state;

    if (activeIndex > 0) {
      this.setState((prevState) => ({
        activeIndex: prevState.activeIndex - 1,
      }));
    }
  };

  onClickRight = () => {
    const { reviewsList } = this.props;
    const { activeIndex } = this.state;

    if (activeIndex < reviewsList.length - 1) {
      this.setState((prevState) => ({
        activeIndex: prevState.activeIndex + 1,
      }));
    }
  };

  render() {
    const { reviewsList } = this.props;
    const { activeIndex } = this.state;

    const { imgUrl, username, companyName, description } =
      reviewsList[activeIndex];

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>

        <div className="review-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="arrow-button"
            onClick={this.onClickLeft}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          <div className="review-card">
            <img src={imgUrl} alt={username} className="profile-image" />
            <p className="username">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            type="button"
            data-testid="rightArrow"
            className="arrow-button"
            onClick={this.onClickRight}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewsCarousel;
