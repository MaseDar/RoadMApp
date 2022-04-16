import { Col, Row } from "antd";
import { RoadItem } from "./RoadItem";

export const RoadmapsProfile: React.FC = () => {
  let height = "432px";
  return (
    <>
      <Row
        // style={{ backgroundColor: "#A5B05B", padding: "25px 0px 25px 0px " }}
        gutter={[40, 40]}
      >
        <Col
          span={14}
          offset={1}
          style={{
            borderRadius: "10px",
            backgroundColor: "#A5C05B",
            height: height,
          }}
        >
          <RoadItem />
        </Col>
        <Col
          flex="auto"
          offset={1}
          style={{
            borderRadius: "10px",
            backgroundColor: "#A5C099",
            height: height,
          }}
        >
          <RoadItem />
        </Col>
        <Col span={1} />

        <Col
          span={7}
          offset={1}
          style={{
            borderRadius: "10px",
            backgroundColor: "#A5C05B",
            height: height,
          }}
        >
          <RoadItem />
        </Col>
        <Col
          flex="auto"
          offset={1}
          style={{
            borderRadius: "10px",
            backgroundColor: "#A5C099",
            height: height,
          }}
        >
          <RoadItem />
        </Col>
        <Col span={1} />
      </Row>
    </>
  );
};
