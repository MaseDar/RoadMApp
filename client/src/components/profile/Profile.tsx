import { Row, Col, Space } from "antd";
import { UserName } from "./UserName";
import { Avatar } from "antd";
import { Radio } from "antd";
import { Link, Outlet } from "react-router-dom";
import { NavigatorProfile } from "./NavigatorProfile";
export const Profile: React.FC = () => {
  return (
    <>
      <Row
        align="middle"
        justify="center"
        style={{ backgroundColor: "#A5C05B", height: "300px" }}
      >
        <Col span={6} offset={5}>
          <UserName />
        </Col>
        <Col span={4} offset={6}>
          <Avatar size={200}></Avatar>
        </Col>
        <Col span={3} />
      </Row>
      <Row align="middle" justify="center" style={{ height: "100px" }}>
        <NavigatorProfile />
      </Row>
      {/* TODO: вынести в консанты стили*/}
      <div style={{ padding: "0px 25px 0px 25px" }}>
        {/* <Space direction="horizontal" align="center"> */}
        <Outlet />
        {/* </Space> */}
      </div>
    </>
  );
};
