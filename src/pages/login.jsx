import { Form, Input, Button, Row, Col, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { signIn } from "../api/authentication";
import { setCookies } from "../lib/cookies";

export default function Login() {
  const router = useRouter()

  const onFinish = async (values) => {
    const data= await signIn(values)
    // if (data.error) return!
    console.log(data)
    setCookies('access_token', data.access_token)
    router.push('/')
  }

  return <Row align="center" justify="center">
    <Col span={8}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ email: "admin@gmail.com", password: "123123123" }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    </Col>

  </Row>
}