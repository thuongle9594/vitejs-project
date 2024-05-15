export const Help = () => {
  return (
    <>
      <div className="container">
        <h2>Carousel Example</h2>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img
                src="https://picsum.photos/200/300"
                alt="Los Angeles"
                style={{ width: '100%' }}
              />
            </div>

            <div className="item">
              <img
                src="https://picsum.photos/200/300"
                alt="Chicago"
                style={{ width: '100%' }}
              />
            </div>

            <div className="item">
              <img
                src="https://picsum.photos/200/300"
                alt="New york"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};
