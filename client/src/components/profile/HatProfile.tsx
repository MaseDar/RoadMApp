import { Typography, Space, Input } from "antd";

const { Title } = Typography;
interface HatProfileProps {
  nickname?: string;
  firstname?: string;
  secondname?: string;
  background?: string;
  avatar?: string;
}

export const HatProfile: React.FC<HatProfileProps> = ({
  avatar,
  background,
  firstname,
  nickname,
  secondname,
  children,
}) => {
  return (
    <>
      {/* <Space direction="vertical" size={"middle"}> */}
      <Title level={1} style={{ margin: 0 }}>
        <Input
          style={{ width: "30vw", height: "7vh", fontSize: "6vh" }}
          value={"NickName"}
          bordered={false}
          placeholder="Nickname"
        />
      </Title>
      <Title level={5} style={{ margin: 0 }}>
        Firstname Lastname
      </Title>
      {/* </Space> */}
    </>
  );
};
