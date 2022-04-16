import { Col, Row } from "antd";
export const RoadItem: React.FC = () => {
  let height = "92px";
  return (
    <>
      <Row style={{ paddingTop: "67px" }} gutter={[16, 16]}>
        <Col
          span={22}
          offset={1}
          style={{
            borderRadius: "10px",
            backgroundColor: "#7BA4A8",
            height: height,
          }}
        >
          <div>TEST</div>
        </Col>
        <Col span={1} />
        <Col
          span={22}
          offset={1}
          style={{
            borderRadius: "10px",
            backgroundColor: "#7BA4A8",
            height: height,
          }}
        >
          <div>TEST</div>
        </Col>
        <Col span={1} />
        <Col
          span={22}
          offset={1}
          style={{
            borderRadius: "10px",
            backgroundColor: "#7BA4A8",
            height: height,
          }}
        >
          <div>TEST</div>
        </Col>
        <Col span={1} />
      </Row>
    </>
  );
};
