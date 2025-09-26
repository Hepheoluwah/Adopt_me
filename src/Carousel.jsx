/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <div className="carousel-main">
          <div className="carousel-image-container">
            <img 
              src={images[active]} 
              alt="animal hero" 
              className="carousel-main-image"
              key={active} // Force re-render for smooth transition
            />
          </div>
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === active ? "active" : ""}`}
                onClick={() => this.setState({ active: index })}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="carousel-thumbnails">
          {images.map((photo, index) => (
            <button
              key={photo}
              className={`carousel-thumbnail ${index === active ? "active" : ""}`}
              onClick={() => this.setState({ active: index })}
              aria-label={`View thumbnail ${index + 1}`}
            >
              <img
                src={photo}
                alt={`animal thumbnail ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
