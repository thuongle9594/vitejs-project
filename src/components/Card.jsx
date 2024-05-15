export const Card = ({ img, description, time, color }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={img} />
      </div>
      <div className="card-info">
        <div className="card-text">{description}</div>
        <div className="card-action">
          <div className="card-button-group">
            <button
              className="card-button-1"
              style={{ backgroundColor: color ? color : 'red' }}
            >
              View
            </button>
            <button className="card-button-2">Edit</button>
          </div>
          <span className="time">{time}</span>
        </div>
      </div>
    </div>
  );
};
