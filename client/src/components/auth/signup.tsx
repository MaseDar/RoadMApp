import { Form, Input, Button, Select, Col, Row } from "antd";
import { useActions } from "../../hooks/useActions";

const { Option } = Select;

export const SignUp: React.FC = () => {
  const { postSignUp } = useActions();
  const onFinish = (values: any) => {
    console.log(values);
    postSignUp(values);
  };

  return (
    <Row style={{ paddingTop: "20px" }} justify="center">
      <Col span={12}>
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              SignUp
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
