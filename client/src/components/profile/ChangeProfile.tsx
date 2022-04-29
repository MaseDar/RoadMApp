import { Form, Input, Button, Row, Col, Select } from "antd";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSeletor";

const { Option } = Select;

export const ChangeProfile: React.FC = () => {
  const { user, loading } = useTypedSelector((state) => state.stateUser);
  const { getUserByName, postChangeUser } = useActions();
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      await getUserByName(localStorage.getItem("username"));
    };

    fetchData();
  }, []);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    postChangeUser(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return !loading ? (
    <Row style={{ paddingTop: "20px" }} justify="center">
      <Col span={12}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{
            remember: true,
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            email: user.email,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: false, message: "Please input your First Name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: false, message: "Please input your Last Name!" },
            ]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item name="password" label="Password">
            <Input.Password />
          </Form.Item> */}

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="gender" label="Gender">
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  ) : (
    <div>Пососи пизду </div>
  );
};
