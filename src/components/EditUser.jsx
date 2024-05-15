import React, { useState, useEffect } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import Item from 'antd/es/list/Item';
import { useParams } from 'react-router-dom';
import useFetch from '../custumHook/useFetch';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

const EditUser = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const url = `https://65a146fd600f49256fb1533f.mockapi.io/getAllUser`;
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [data, setData] = useFetch(id, url, '');
  useEffect(() => {
    if (data) {
      setName(data.name);
      setAvatar(data.avatar);
      setAddress(data.address);
      setPhone(data.phone);
      setEmail(data.email);
    }
  }, data);

  const submitForm = () => {
    const dataList = {
      name,
      avatar,
      address,
      phone,
      email,
    };

    // call api
    if (id) {
      axios
        .put(url + `/${id}`, dataList)
        .then((res) => {
          // dieu huong ve danh userList
          navigate('/listUser');
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    } else {
      axios
        .post(url, dataList)
        .then((res) => {
          // dieu huong ve danh userList
          navigate('/listUser');
        })
        .catch((err) => {
          console.log(err, 'err');
        });
    }
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <h1>User:</h1>

      <Form.Item
        //name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          type="string"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        //name={['user', 'avatar']}
        label="Avatar"
        rules={[
          {
            type: 'string',
          },
        ]}
      >
        <Input value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      </Form.Item>

      <Form.Item
        //name={['user', 'address']}
        label="Address"
        rules={[
          {
            type: 'string',
          },
        ]}
      >
        <Input value={address} onChange={(e) => setAddress(e.target.value)} />
      </Form.Item>

      <Form.Item
        //name={['user', 'phone']}
        label="Phone"
        rules={[
          {
            type: 'phone',
            // min: 0,
            // max: 99,
          },
        ]}
      >
        <InputNumber value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Form.Item>

      <Form.Item
        //name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      {/* <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Introduction">
      <Input.TextArea />
    </Form.Item> */}
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="update" onClick={() => submitForm()}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditUser;
