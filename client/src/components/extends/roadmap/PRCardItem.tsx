import { Typography, Avatar, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RoadmapTransferProps } from "../../../types/common/TypeRoadmap";

const { Text, Title } = Typography;

/**
 * Profile Roadmap Card Item (один элемент карточки в профиле)
 * @returns
 */
export const PRCardItem: React.FC<RoadmapTransferProps> = ({ roadmap }) => {
  let height = "92px";
  let navigate = useNavigate();
  const changePath = (idRoadmap: number) => {
    navigate(`/roadmap/${idRoadmap}`);
  };

  return (
    <>
      <Col
        span={22}
        offset={1}
        style={{
          borderRadius: "10px",
          // TODO: здесь должен быть background roadmap
          backgroundColor: "#7BA4A8",
          height: height,
        }}
        onClick={() => changePath(roadmap.roadmap_id)}
      >
        <PRCardItemInner roadmap={roadmap} />
      </Col>
      <Col span={1} />
    </>
  );
};

const PRCardItemInner: React.FC<RoadmapTransferProps> = ({ roadmap }) => {
  return (
    <Row align="middle" style={{ marginTop: "10px" }}>
      <Col flex={1} />
      <Col flex={1}>
        <Avatar size={72} />
      </Col>
      <Col flex={21}>
        <Title level={4} style={{ margin: 0 }}>
          {roadmap.name}
        </Title>
        <Text>{roadmap.short_description}</Text>
      </Col>

      {/* <h4 style={{ margin: 0 }}>{name}</h4> */}

      {roadmap.percent != 100 ? (
        <Col flex={1}>
          <Text strong style={{ margin: 0, fontSize: "35px" }}>
            {roadmap.percent}%
          </Text>
        </Col>
      ) : null}
    </Row>
  );
};
