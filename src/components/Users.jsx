import React, { useState } from 'react';
import {
  Card,
  Col,
  Row,
  Table,
  Avatar,
  Tag,
  Space,
  Button,
  Modal,
  Spin,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import useFetch from '../custumHook/useFetch';
import { Link, Outlet } from 'react-router-dom';
import './User.scss';
const Users = () => {
  const url = 'https://65a146fd600f49256fb1533f.mockapi.io/getAllUser';
  // sau do render ra table ben duoi
  // {
  //   "createdAt": "2024-04-22T04:36:02.087Z",
  //   "name": "Jeff Lebsack",
  //   "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/128.jpg",
  //   "address": "Dewaynechester",
  //   "phone": "1-326-594-1448 x021",
  //   "id": "1"
  //   },
  const [refreshIncrement, setRefreshIncrement] = useState(0);
  const [data, setData] = useFetch('', url, refreshIncrement);
  const [isModalOpen, setCloseModal] = useState(false);
  const [item, setItem] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_) => {
        console.log(_);
        let isTag = _.length > 12 ? 'green' : 'magenta';
        return <Tag color={isTag}>{_}</Tag>;
      },
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (_, { avatar, name, address, id }) => {
        console.log(avatar, name, address, id);
        return (
          <div>
            <Avatar key={id} src={_} />
            <p>{name}</p>
          </div>
        );
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'Action',
      key: 'action',
      //chỉ có render: (_) thì _ chỉ là action, còn thêm props thì props đại diện cho cả object
      render: (_, props) => {
        return (
          <Space size="middle">
            <Link to={`/listUser/${props.id}`}>
              <Button type="primary">Detail</Button>
            </Link>
            <Link to={`/users/edit/${props.id}`}>
              <Button type="primary">Edit</Button>
            </Link>
            <Button type="primary" danger onClick={() => handleDelete(props)}>
              <DeleteOutlined />
            </Button>
          </Space>
        );
      },
    },
  ];

  // return (
  //   <div>
  //     <Row gutter={16}>
  //       <Col span={24}>
  //         <Card title="Users" bordered={true}>
  //            Users
  //         </Card>
  //       </Col>
  //     </Row>
  //     <Table dataSource={data} columns={columns} />;
  //   </div>
  // );

  const handleCancel = () => {
    setCloseModal(!isModalOpen);
    // clear item onclick, đong Modal, state lai de giải phong bo nhơ
    setItem(null);
  };

  const handleOk = () => {
    // call api delete item
    // http://api.com/2
    setIsSpinning(true);
    fetch(`${url}/${item?.id}`, { method: 'DELETE' })
      .then(() => {
        setItem(null);
        // close modal
        setCloseModal(!isModalOpen);
      })
      .then(() => {
        setRefreshIncrement((prev) => prev + 1);
        // load list user
        // close spinning
        setIsSpinning(false);
      })
      .catch((err) => {
        setIsSpinning(false);
      });
  };

  const handleDelete = (props) => {
    setCloseModal(!isModalOpen);
    // true => false
    // false => true
    console.log(props, 'props');
    // khi click vao delete lay thong tin dong do va set vao state de su dung
    setItem(props);
  };
  return (
    <div className="page-content">
      <h3>this is table vti railway</h3>
      {/* <Row gutter={16}>
        <Col span={24}>
          <Card title="Users" bordered={true}>
            list User
          </Card>
        </Col>
      </Row> */}
      <Space size="middle" className="space-content">
        <Link to={'/users/new'}>
          <Button type="primary">CreateNewUser</Button>
        </Link>
      </Space>
      <section className="table-content">
        <Table dataSource={data} columns={columns} />;
      </section>
      <article className="modal-content">
        <Modal
          title="Delete item user"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            Are you sure delete item{' '}
            <span style={{ color: 'red' }}>{item?.name}</span> ?
          </p>
        </Modal>
      </article>

      {/* cách khác đưa spin ra thành global, đưa ra ngoai App */}
      <Spin
        style={({ position: 'relative' }, { zIndex: '1233' })}
        tip="Loading"
        size="large"
        fullscreen={true}
        spinning={isSpinning}
      >
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Users;
