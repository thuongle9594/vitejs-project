// component 1
export const Home = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.content}</p>
    </div>
  );
};

// component 2
export const HomePage = ({ propHome, name }) => {
  return (
    <div>
      =================
      <p>{propHome}</p>
      <p>{name}</p>
    </div>
  );
};

// export
