import { Col, Row } from "antd";
import { useEffect } from "react";
import { heightRPCard } from "../../../constants/constants";
import { useTypedSelector } from "../../../hooks/useTypedSeletor";
import { PSeeAll } from "../../profile/navigation/PSeeAll";
import { PRCardItem } from "./PRCardItem";
/**
 * Roadmap Profile Card Component (4 карточки в профиле во вкладке Roadmaps)
 * @returns
 */
export const PRCard: React.FC<{}> = () => {
  const { active_roadmaps } = useTypedSelector(
    (state) => state.stateRoadmaps.roadmaps
  );
  // TODO: Для каждого блока написать свой reducer, т.к. история с общими многоволженными объектами - не оч
  useEffect(() => {}, []);
  return (
    <Col
      span={14}
      offset={1}
      style={{
        borderRadius: "10px",
        backgroundColor: "#A5C05B",
        height: heightRPCard,
      }}
    >
      <PSeeAll nameCard="Active Roadmaps" namePath="active" />
      <Row gutter={[0, 16]}>
        {active_roadmaps.map((road) => (
          <PRCardItem key={road.roadmap.roadmap_id} roadmap={road.roadmap} />
        ))}
      </Row>
    </Col>
  );
};
