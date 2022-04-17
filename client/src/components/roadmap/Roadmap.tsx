import { Avatar, Col, Row } from "antd";
import { Outlet, useParams } from "react-router-dom";
import { HatProfile } from "../profile/HatProfile";
import { NavigatorProfile } from "../profile/NavigatorProfile";
import { HatRoadmap } from "./HatRoadmap";

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
  const params = useParams();
  console.log(params);
  return (
    <>
      <HatRoadmap
        name={hat.name}
        percent={hat.percent}
        short_desctiption={hat.short_desctiption}
        full_description={hat.full_description}
        small={false}
      />
    </>
  );
};
