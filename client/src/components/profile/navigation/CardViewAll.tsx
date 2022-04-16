import { Button, Col, Row } from "antd";
import { Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;

interface CardViewAllProps {
  nameCard: string;
  namePath: string;
}

export const CardViewAll: React.FC<CardViewAllProps> = ({
  nameCard,
  namePath,
}) => {
  return (
    <Row style={{ height: "60px" }}>
      <Col flex={1} />
      <Col flex={16} style={{ paddingTop: "20px" }}>
        <Title level={4}>{nameCard}</Title>
      </Col>
      <Col flex={1} style={{ paddingTop: "15px" }}>
        <Link
          to={`/profile/roadmaps/all/${namePath}`}
          // style={{ paddingBottom: "25px" }}
        >
          <Button type="text" size="large">
            See all
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
