import { Col, Row } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PRCard } from "../../../extends/roadmap/PRCard";

export const PRoadmaps: React.FC = () => {
  let height = "400px";
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("all") ? (
        <Outlet />
      ) : (
        <Row
          // style={{ backgroundColor: "#A5B05B", padding: "25px 0px 25px 0px " }}
          gutter={[40, 40]}
        >
          <PRCard />
          {/* <Col
            span={7}
            offset={1}
            style={{
              borderRadius: "10px",
              backgroundColor: "#A5C099",
              height: height,
            }}
          >
            <PSeeAll nameCard="Success Roadmaps" namePath="successed" />
            
            <PRCardItem />
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
            <PSeeAll nameCard="Created Roadmaps" namePath="created" />
            
            <PRCardItem />
          </Col>
          <Col
            span={14}
            offset={1}
            style={{
              borderRadius: "10px",
              backgroundColor: "#A5C099",
              height: height,
            }}
          >
            <PSeeAll nameCard="Favorites Roadmaps" namePath="favorites" />
            
            <PRCardItem />
          </Col>
          <Col span={1} /> */}
        </Row>
      )}
    </>
  );
};
