import { Card } from './Card';

export const MainHead = ({ data }) => {
  return (
    <div className="main-bottom">
      {data.length > 0 ? (
        <>
          {data.map((item, index, arr) => (
            <Card
              key={item.id}
              img={'https://picsum.photos/id/237/200/300'}
              description={item.title}
              time={item.time}
              color={item.colorBtn}
            />
          ))}
        </>
      ) : (
        <h2>nodata</h2>
      )}
    </div>
  );
};

// if (a > b) {
//   return a;
// } else b;

// a > b ? a : b;
