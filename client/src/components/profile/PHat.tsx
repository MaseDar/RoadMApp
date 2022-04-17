import { Typography, Space, Input } from "antd";
import { useTypedSelector } from "../../hooks/useTypedSeletor";

const { Title } = Typography;
interface PHatProps {
  nickname?: string;
  firstname?: string;
  secondname?: string;
  background?: string;
  avatar?: string;
}

export const PHat: React.FC<PHatProps> = () => {
  let user = useTypedSelector((state) => state.user.user);
  return (
    <>
      {/* <Space direction="vertical" size={"middle"}> */}
      <Title level={1} style={{ margin: 0 }}>
        {/* <Input
          style={{ width: "30vw", height: "7vh", fontSize: "6vh" }}
          value={"NickName"}
          bordered={false}
          placeholder="Nickname"
        /> */}
        {user.login}
      </Title>
      <Title level={5} style={{ margin: 0 }}>
        Firstname Lastname
      </Title>
      {/* </Space> */}
    </>
  );
};
