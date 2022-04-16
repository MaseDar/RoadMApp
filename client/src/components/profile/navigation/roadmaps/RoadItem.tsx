import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { HatRoadmap } from "../../../roadmap/HatRoadmap";

export const RoadItem: React.FC = () => {
  let height = "92px";
  let navigate = useNavigate();
  const changePath = (idRoadmap: number) => {
    navigate(`/roadmap/${idRoadmap}`);
  };
  let id = 52;
  let hat = {
    name: "Lorem ipsum dolor sit amet",
    percent: 88,
    short_desctiption:
      "Et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies",
    full_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae. Ornare massa eget egestas purus viverra accumsan in nisl. Vulputate dignissim suspendisse in est ante in. Sem fringilla ut morbi tincidunt augue interdum velit euismod in.",
  };
  return (
    <>
      <Row gutter={[0, 16]}>
        <Col
          span={22}
          offset={1}
          style={{
            borderRadius: "10px",
            // TODO: здесь должен быть background roadmap
            backgroundColor: "#7BA4A8",
            height: height,
          }}
          onClick={() => changePath(id)}
        >
          <HatRoadmap
            name={hat.name}
            percent={hat.percent}
            short_desctiption={hat.short_desctiption}
            full_description={hat.full_description}
            small={true}
          />
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
