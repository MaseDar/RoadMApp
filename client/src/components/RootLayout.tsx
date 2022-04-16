import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

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
        <Layout style={{ padding: "0 0 0 0" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 0,
              margin: 0,
              // minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
