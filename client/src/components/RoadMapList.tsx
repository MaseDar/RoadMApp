import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSeletor";
import { useActions } from "../hooks/useActions";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

const RoadMapList: React.FC = () => {
  // const { error, loading, roadmaps, limit } = useTypedSelector(
  //   (state) => state.roadmap
  // );
  // const { getRoadmaps } = useActions();
  // const pages = [1, 2, 3, 4, 5];

  // useEffect(() => {
  //   // getRoadmaps()
  // }, []);

  // if (loading) {
  //   return <h1>Идет загрузка...</h1>;
  // }
  // if (error) {
  //   return <h1>{error}</h1>;
  // }

  return (
    <div>
      {/* {roadmaps.map((roadmap) => (
        <div key={roadmap.id}>
          {roadmap.id} - {roadmap.name} - {roadmap.description}
        </div>
      ))} */}
    </div>
  );
};

export default RoadMapList;
