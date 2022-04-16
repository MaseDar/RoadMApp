import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

export const RoadItem: React.FC = () => {
  let height = "92px";
  let navigate = useNavigate();
  const changePath = (idRoadmap: number) => {
    navigate(`/roadmap/${idRoadmap}`);
  };
  let id = 52;
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col
          span={22}
          offset={1}
          style={{
            borderRadius: "10px",
            backgroundColor: "#7BA4A8",
            height: height,
          }}
          onClick={() => changePath(id)}
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
