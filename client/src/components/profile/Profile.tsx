import { Row, Col, Space } from "antd";
import { PHat } from "./PHat";
import { Avatar } from "antd";
import { Outlet, useParams } from "react-router-dom";
import { PNavigation } from "./navigation/PNavigation";
import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { useActions } from "../../hooks/useActions";

export const Profile: React.FC = () => {
  const { loading } = useTypedSelector((state) => state.stateUser);
  const { getUserByName } = useActions();
  const params = useParams();

  useEffect(() => {
    console.log(params);
    const fetchData = async () => {
      await getUserByName(params.username);
    };

    fetchData();
  }, []);
  return !loading ? (
    <>
      <Row
        align="middle"
        justify="center"
        style={{ backgroundColor: "#A5C05B", height: "300px" }}
      >
        <Col span={6} offset={5}>
          <PHat />
        </Col>
        <Col span={4} offset={6}>
          <Avatar size={200}></Avatar>
        </Col>
        <Col span={3} />
      </Row>
      <Row align="middle" justify="center" style={{ height: "100px" }}>
        <PNavigation />
      </Row>
      {/* TODO: вынести в консанты стили*/}
      <div style={{ padding: "0px 25px 0px 25px" }}>
        {/* <Space direction="horizontal" align="center"> */}
        <Outlet />
        {/* </Space> */}
      </div>
    </>
  ) : (
    <div>ПОсоси пизду</div>
  );
};
