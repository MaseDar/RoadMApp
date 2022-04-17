import { Typography, Space, Row, Avatar, Col } from "antd";

const { Title, Text } = Typography;
interface HatRoadmapProps {
  name?: string;
  percent?: number;
  short_desctiption?: string;
  full_description?: string;
  background?: string;
  image?: string;
  success?: boolean;
  small?: boolean | true;
}

let hat2: HatRoadmapProps = { name: "test" };
export const HatRoadmap: React.FC<HatRoadmapProps> = ({
  name = "test",
  percent = 50,
  short_desctiption,
  full_description,
  background,
  image,
  success = false,
  small,
}) => {
  return <>{small ? <SmallHatRoadmap /> : <BigHatRoadmap children={hat2} />}</>;
};

const SmallHatRoadmap: React.FC<HatRoadmapProps> = (hat2) => {
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

      {!hat2.success ? (
        <Col flex={1}>
          <Text strong style={{ margin: 0, fontSize: "35px" }}>
            {hat2.percent ? hat2.percent + "%" : null}
          </Text>
        </Col>
      ) : null}
    </Row>
  );
};

const BigHatRoadmap: React.FC<HatRoadmapProps> = (hat3) => {
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
          {hat3.name}
        </Title>
        <Title level={4} style={{ margin: 0 }}>
          {hat3.short_desctiption}
        </Title>
        <Title level={5} style={{ margin: 0 }}>
          {hat3.full_description}
        </Title>
      </Col>
      {!hat3.success ? (
        <Col span={3} offset={1}>
          <Text strong style={{ margin: 0, fontSize: "80px" }}>
            {hat3.percent ? hat3.percent + "%" : null}
          </Text>
        </Col>
      ) : null}
    </Row>
  );
};
