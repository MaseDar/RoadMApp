import { Row, Col } from "antd";
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
        style={{ backgroundColor: "#A5C05B", height: "200px" }}
      >
        <Col span={6} offset={5}>
          <UserName />
        </Col>
        <Col span={4} offset={5}>
          <Avatar size={125}></Avatar>
        </Col>
        <Col span={4} />
      </Row>
      <Row align="middle" justify="center" style={{ height: "100px" }}>
        <NavigatorProfile />
      </Row>
      <Outlet />
    </>
  );
};
