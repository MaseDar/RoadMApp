import { Radio } from "antd";
import { Link, useNavigate } from "react-router-dom";
export const PNavigation: React.FC = () => {
  let navigate = useNavigate();
  const changePath = (e: React.MouseEvent<HTMLInputElement>) => {
    navigate(`/profile/${e.currentTarget.value}`);
  };
  return (
    <>
      <Radio.Group
        style={{ transform: "scale(1.25)" }}
        defaultValue="roadmaps"
        size="large"
      >
        <Radio.Button
          value="achieves"
          onClick={changePath}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px 0px 0px 10px",
          }}
        >
          Achieves
        </Radio.Button>
        <Radio.Button
          value="roadmaps"
          onClick={changePath}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Roadmaps
        </Radio.Button>
        <Radio.Button
          value="friends"
          onClick={changePath}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "0px 10px 10px 0px",
          }}
        >
          Friends
        </Radio.Button>
      </Radio.Group>
    </>
  );
};
