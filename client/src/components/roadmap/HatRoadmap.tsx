import { Typography, Space, Row, Avatar, Col } from "antd";
import { RoadmapContainer, RoadmapState } from "../../types/roadmap";

const { Title, Text } = Typography;
interface extendsRoadmapContainer extends RoadmapContainer {
  small: boolean;
}

export const HatRoadmap: React.FC<extendsRoadmapContainer> = ({
  roadmap,
  loading,
  small,
}) => {
  // return <>{roadmap. ? <SmallHatRoadmap /> : <BigHatRoadmap children={hat2} />}</>
  return <BigHatRoadmap roadmap={roadmap} loading={loading} small={small} />;
};

const SmallHatRoadmap: React.FC<extendsRoadmapContainer> = ({
  roadmap,
  loading,
  small,
}) => {
  return (
    <Row align="middle" style={{ marginTop: "10px" }}>
      <Col flex={1} />
      <Col flex={1}>
        <Avatar size={72} />
      </Col>
      <Col flex={21}>
        <Title level={4} style={{ margin: 0 }}>
          1234567890
        </Title>
        <Text>1234567890</Text>
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

const BigHatRoadmap: React.FC<extendsRoadmapContainer> = ({
  roadmap,
  loading,
}) => {
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
