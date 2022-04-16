import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

export const RootLayout: React.FC = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/profile">Profile</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/roadmaps">Roadmaps</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Layout>
          <Content className="site-layout-background">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        RoadM.App ©2022 Created by MaseDar
      </Footer>
    </Layout>
  );
};
