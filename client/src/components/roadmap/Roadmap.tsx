import { Avatar, Col, Row } from "antd";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSeletor";

import { RHat } from "./RHat";

export const Roadmap: React.FC = () => {
  const { loading, roadmap } = useTypedSelector((state) => state.stateRoadmap);
  const { getRoadmap } = useActions();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await getRoadmap(params.id);
    };
    fetchData();
  }, []);
  return !loading ? (
    <>
      <RHat roadmap={roadmap!} />{" "}
    </>
  ) : (
    <div>ОСсиПизду</div>
  );
};
