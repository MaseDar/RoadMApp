import { Avatar, Col, Row } from "antd";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSeletor";
import {
  getRoadmap,
  getUserRoadmaps,
} from "../../store/action-creators/PRActions";
import { RHat } from "./RHat";
let hat = {
  name: "Lorem ipsum dolor sit amet",
  percent: 88,
  short_desctiption:
    "Et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies",
  full_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae. Ornare massa eget egestas purus viverra accumsan in nisl. Vulputate dignissim suspendisse in est ante in. Sem fringilla ut morbi tincidunt augue interdum velit euismod in.",
};

// нужен удобный контенер
export const Roadmap: React.FC = () => {
  const { stateProfile } = useTypedSelector((state) => state);
  const { getRoadmap } = useActions();
  const params = useParams();
  console.log(stateProfile.single_roadmap);
  useEffect(() => {
    const fetchData = async () => {
      await getRoadmap(params.id);
    };
    fetchData();
  }, []);
  return !stateProfile ? (
    <>
      <RHat roadmap={stateProfile} />{" "}
    </>
  ) : (
    <div>ОСсиПизду</div>
  );
};
