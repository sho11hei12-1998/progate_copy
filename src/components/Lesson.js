import React from "react";

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    // stateの初期値を定義してください
    this.state = { isModalOpen: false };
  }

  handleClickLesson() {
    this.setState({ isModalOpen: true });
  }

  handleClickClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    let modal;

    if (this.state.isModalOpen) {
      modal = (
        <div className="modal">
          <div className="modal-inner">
            <div className="modal-header"></div>
            <div className="modal-introduction">
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className="modal-close-btn"
              onClick={() => {
                this.handleClickClose();
              }}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="lesson-card">
        <a className="card-hover">
          <div
            className="lesson-item"
            onClick={() => {
              this.handleClickLesson();
            }}
          >
            <h4>{this.props.name}</h4>
            <img src={this.props.image} />
            <div className="introduction">{this.props.introduction}</div>
            <p className="lesson-num">
              <img src="https://d2aj9sy12tbpym.cloudfront.net/javascripts/dist/assets/lesson-book-471ff51241d3aa8b65f455a9bdeea4e0.svg" />
              <span>{this.props.num}記事</span>
            </p>
          </div>
        </a>
        {modal}
      </div>
    );
  }
}

export default Lesson;
