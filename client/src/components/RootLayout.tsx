import { Col, Layout, Menu, Row } from "antd";
import { Link, Outlet } from "react-router-dom";
import { UpRoadLogoSVG } from "./svg/Logo";

const { Header, Content, Footer } = Layout;

export const RootLayout: React.FC = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "#ffffff" }}>
        <Row
        // justify="center"
        >
          <Col flex={1}>
            <UpRoadLogoSVG />
          </Col>

          <Col flex={1}>
            <Menu
              inlineCollapsed={false}
              style={{ backgroundColor: "#ffffff", marginBottom: "1px" }}
              mode="horizontal"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key="1">
                <Link to="/profile/roadmaps">Profile</Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/roadmaps">Roadmaps</Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to="/steps">Steps</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Content style={{ backgroundColor: "#ffffff" }}>
          <Outlet />
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
        UpRoad ©2022
      </Footer>
    </Layout>
  );
};
