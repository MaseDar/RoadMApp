import { Typography, Space, Row, Avatar, Col } from "antd";

const { Title, Text } = Typography;
interface HatRoadmapProps {
  name: string | "test";
  percent: number | "50";
  short_desctiption?: string;
  full_description?: string;
  background?: string;
  image?: string;
  small?: boolean | true;
}

export const HatRoadmap: React.FC<HatRoadmapProps> = ({
  name,
  percent,
  short_desctiption,
  full_description,
  background,
  image,
  small,
}) => {
  return (
    <>
      {small ? (
        <Row align="middle" style={{ marginTop: "10px" }}>
          <Col flex={1} />
          <Col flex={2}>
            <Avatar size={72} />
          </Col>
          <Col flex={15}>
            <Title level={4} style={{ margin: 0 }}>
              1234567890
            </Title>
            <Text>1234567890</Text>
          </Col>

          {/* <h4 style={{ margin: 0 }}>{name}</h4> */}

          <Col flex={2}>
            <Text strong style={{ margin: 0, fontSize: "35px" }}>
              {percent}%
            </Text>
          </Col>
        </Row>
      ) : (
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
              {name}
            </Title>
            <Title level={4} style={{ margin: 0 }}>
              {short_desctiption}
            </Title>
            <Title level={5} style={{ margin: 0 }}>
              {full_description}
            </Title>
          </Col>
          <Col span={3} offset={1}>
            <Text strong style={{ margin: 0, fontSize: "80px" }}>
              {percent}%
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};
