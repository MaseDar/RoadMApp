import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSeletor";

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
    postChangeUser(values.firstname, values.lastname);
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
            // TODO: Фикс типов
            firstname: user.username,
            lastname: user.username,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}
          >
            <Input />
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
