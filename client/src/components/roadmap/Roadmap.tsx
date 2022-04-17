import { Avatar, Col, Row } from "antd";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { getRoadmaps } from "../../store/action-creators/roadmap";
import { HatProfile } from "../profile/HatProfile";
import { NavigatorProfile } from "../profile/NavigatorProfile";
import { HatRoadmap } from "./HatRoadmap";
import { RoadmapContainer } from "../../types/roadmap";
interface RoadmapProps {
  id: number;
  name: string;
}
let hat = {
  name: "Lorem ipsum dolor sit amet",
  percent: 88,
  short_desctiption:
    "Et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies",
  full_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae. Ornare massa eget egestas purus viverra accumsan in nisl. Vulputate dignissim suspendisse in est ante in. Sem fringilla ut morbi tincidunt augue interdum velit euismod in.",
};

export const Roadmap: React.FC = () => {
  const { stateRoadmap } = useTypedSelector((state) => state);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    getRoadmaps();
    console.log(stateRoadmap);
  }, []);
  return (
    <>
      <HatRoadmap
        roadmap={stateRoadmap.roadmap}
        loading={stateRoadmap.loading}
        small={false}
      />
    </>
  );
};
