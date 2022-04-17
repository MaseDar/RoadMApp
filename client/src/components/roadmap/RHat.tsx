import { Typography, Space, Row, Avatar, Col } from "antd";
import { RoadmapContainer, RoadmapState } from "../../types/roadmap";

const { Title, Text } = Typography;

export const RHat: React.FC<RoadmapContainer> = ({ roadmap }) => {
  return <BigHatRoadmap roadmap={roadmap} />;
};

const BigHatRoadmap: React.FC<RoadmapContainer> = ({ roadmap }) => {
  return (
    <Row
      align="middle"
      // justify="center"
      style={{ backgroundColor: "#A5C05B", height: "300px" }}
    >
      <Col span={4} offset={2}>
        <Avatar size={200} />
      </Col>
      <Col span={14}>
        <Title level={1} style={{ margin: 0 }}>
          {roadmap.name}
        </Title>
        <Title level={4} style={{ margin: 0 }}>
          {roadmap.short_description}
        </Title>
        <Title level={5} style={{ margin: 0 }}>
          {roadmap.full_description}
        </Title>
      </Col>
      {roadmap.percent != 100 ? (
        <Col span={3} offset={1}>
          <Text strong style={{ margin: 0, fontSize: "80px" }}>
            {roadmap.percent}%
          </Text>
        </Col>
      ) : null}
    </Row>
  );
};
