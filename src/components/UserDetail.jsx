import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import './UserDetail.scss';

const { Meta } = Card;

const UserDetail = () => {
  const [item, setItem] = useState(null);
  let { id } = useParams();
  let url = `https://65a146fd600f49256fb1533f.mockapi.io/getAllUser/${id}`;
  const fetchItem = async () => {
    try {
      let response = await fetch(url, { method: 'GET' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      response = await response.json();
      setItem(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchItem();
  }, []);
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={item?.avatar} />}
    >
      <Meta title={item?.name} description={item?.email} />
    </Card>
  );
};
export default UserDetail;
