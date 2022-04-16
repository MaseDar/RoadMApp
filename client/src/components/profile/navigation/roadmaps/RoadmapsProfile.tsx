import { Col, Row } from "antd";
import { RoadItem } from "./RoadItem";
import { CardViewAll } from "../CardViewAll";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const RoadmapsProfile: React.FC = () => {
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
          <Col
            span={14}
            offset={1}
            style={{
              borderRadius: "10px",
              backgroundColor: "#A5C05B",
              height: height,
            }}
          >
            {/* <CardViewAll>Active Roadmaps</CardViewAll> */}
            <CardViewAll nameCard="Active Roadmaps" namePath="active" />
            <RoadItem />
          </Col>
          <Col
            span={7}
            offset={1}
            style={{
              borderRadius: "10px",
              backgroundColor: "#A5C099",
              height: height,
            }}
          >
            <CardViewAll nameCard="Success Roadmaps" namePath="successed" />
            {/* <CardViewAll>Active Roadmaps</CardViewAll> */}
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
            <CardViewAll nameCard="Created Roadmaps" namePath="created" />
            {/* <CardViewAll>Active Roadmaps</CardViewAll> */}
            <RoadItem />
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
            <CardViewAll nameCard="Favorites Roadmaps" namePath="favorites" />
            {/* <CardViewAll>Active Roadmaps2</CardViewAll> */}
            <RoadItem />
          </Col>
          <Col span={1} />
        </Row>
      )}
    </>
  );
};
