import { Typography, Col, Row, Steps } from "antd";

const { Step } = Steps;
const { Title } = Typography;

export const AppSteps: React.FC = () => {
  return (
    <>
      <Row justify="center" style={{ paddingTop: "30px" }}>
        <Col offset={6} span={6}>
          <Title level={2}>Frontend roadmap</Title>
          <Steps direction="vertical" current={1}>
            <Step title="Create project" description="Start UpRoad" />
            <Step
              title="Typeset minimal template"
              description="Minimal template for fetching data and creation functional"
            />
            <Step
              title="Basic functional"
              description="Create/Edit/Delete roadmaps"
            />
            <Step title="User access" description="Login/Signup users data" />
            <Step title="..." />
            <Step title="Release" description="Entry first users" />
          </Steps>
        </Col>
        <Col offset={4} flex="auto">
          <Title level={2}>Backend roadmap</Title>
          <Steps direction="vertical" current={0}>
            <Step
              title="Create database"
              description="Create database on PostgreSQL"
            />
            <Step title="REST API" description="Create REST API w\ sequelize" />
            <Step title="Waiting" description="This is a description." />
            <Step
              title="User access"
              description="Protected Login/Signup users data"
            />
            <Step title="..." />
            <Step title="Release" description="Entry first users" />
          </Steps>
        </Col>
      </Row>
    </>
  );
};
