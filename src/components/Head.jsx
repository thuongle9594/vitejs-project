import './Head.css';
export const Head = ({ title, description, btnOne, btnTwo, setDes }) => {
  // lifting state
  const onChangeDes = (event) => {
    console.log('event', event);
    setDes(event.target.value);
  };
  // arrow === mui ten
  // arrow function
  // () =>
  // regular function
  // function(){}
  return (
    <>
      <div className="main-top">
        <div className="wrapper">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="button-group">
            <button className="button-1">{btnOne}</button>
            <button className="button-2">{btnTwo}</button>
          </div>
        </div>
      </div>

      <div>
        <form action="">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={description}
              onChange={(event) => onChangeDes(event)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="name">Name</label>
          </div>

          <div className="form-group">
            <input type="text" name="email" />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="email">Email</label>
          </div>
        </form>
      </div>
    </>
  );
};
