import { Typography, Space } from "antd";

const { Title } = Typography;

export const UserName: React.FC = () => {
  return (
    <>
      {/* <Space direction="vertical" size={"middle"}> */}
      <Title level={1} style={{ margin: 0 }}>
        NickName
      </Title>
      <Title level={5} style={{ margin: 0 }}>
        Firstname Lastname
      </Title>
      {/* </Space> */}
    </>
  );
};
