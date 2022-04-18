import { Col, Row } from "antd";
import { useEffect } from "react";
import { heightRPCard } from "../../../constants/constants";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSeletor";
import { getUserRoadmaps } from "../../../store/action-creators/PRActions";
import { PSeeAll } from "../../profile/navigation/PSeeAll";
import { PRCardItem } from "./PRCardItem";
/**
 * Roadmap Profile Card Component (4 карточки в профиле во вкладке Roadmaps)
 * @returns
 */
export const PRCard: React.FC<{}> = () => {
  const { stateUser, stateProfile } = useTypedSelector((state) => state);
  const { getUserRoadmaps } = useActions();
  // const active_roadmaps = stateRoadmaps.roadmaps.active_roadmaps;
  // TODO: Для каждого блока написать свой reducer, т.к. история с общими многоволженными объектами - не оч

  useEffect(() => {
    if (stateUser.user.id != 1) getUserRoadmaps(stateUser.user);
  }, []);
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
        {stateProfile.profile_roadmaps?.active_roadmaps?.map((road) => (
          <PRCardItem key={road.roadmap_id} roadmap={road} />
        ))}
      </Row>
    </Col>
  );
};
