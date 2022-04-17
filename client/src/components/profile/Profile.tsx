import { Row, Col, Space } from "antd";
import { PHat } from "./PHat";
import { Avatar } from "antd";
import { Radio } from "antd";
import { Link, Outlet } from "react-router-dom";
import { PNavigation } from "./navigation/PNavigation";
import { useEffect } from "react";
import { getTestUser } from "../../store/action-creators/users";
import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { getUserRoadmaps } from "../../store/action-creators/roadmap";
import { useActions } from "../../hooks/useActions";

let hat = {
  name: "Lorem ipsum dolor sit amet",
  percent: 88,
  short_desctiption:
    "Et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies",
  full_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae. Ornare massa eget egestas purus viverra accumsan in nisl. Vulputate dignissim suspendisse in est ante in. Sem fringilla ut morbi tincidunt augue interdum velit euismod in.",
};

export const Profile: React.FC = () => {
  const { user } = useTypedSelector((state) => state);
  const { getUserRoadmaps, getTestUser } = useActions();

  useEffect(() => {
    const fetchData = async () => {
      await getTestUser();
      // TODO: НУЖЕН ФИКС, А ТО ПОКАЗЫВАЕТСЯ СНАЧАЛА ПАРАША
      if (user.user.id != 1) await getUserRoadmaps(user.user);
    };

    fetchData();
    console.log("a", user);
  }, []);
  return !user.loading ? (
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
