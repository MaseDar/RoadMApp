import { useParams } from "react-router-dom";

interface RoadmapProps {
  id: number;
  name: string;
}
export const Roadmap: React.FC = () => {
  const params = useParams();
  console.log(params);
  return <div>Hello</div>;
};
