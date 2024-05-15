import React, { useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import './CreateNewUser.scss';

const handleSubmit = (Event) => {
  axios
    .post('https://65a146fd600f49256fb1533f.mockapi.io/getAllUser', {
      id: id,
      name: name,
      avatar: avatar,
      address: address,
      phone: phone,
      email: email,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
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
const NewUser = () => {
  const [name, setName] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  return (
    <section className="form-content">
      <Form
        onSubmit={handleSubmit}
        {...layout}
        name0="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <h1>NewUser:</h1>

        <Form.Item
          name1={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item
          name2={['user', 'avatar']}
          label="Avatar"
          rules={[
            {
              type: 'string',
            },
          ]}
        >
          <Input onChange={(e) => setAvatar(e.target.value)} />
        </Form.Item>

        <Form.Item
          name3={['user', 'address']}
          label="Address"
          rules={[
            {
              type: 'string',
            },
          ]}
        >
          <Input onChange={(e) => setAddress(e.target.value)} />
        </Form.Item>

        <Form.Item
          name4={['user', 'phone']}
          label="Phone"
          rules={[
            {
              type: 'phone',
              // min: 0,
              // max: 99,
            },
          ]}
        >
          <InputNumber onChange={(e) => setPhone(e.target.value)} />
        </Form.Item>

        <Form.Item
          name5={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
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
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default NewUser;
