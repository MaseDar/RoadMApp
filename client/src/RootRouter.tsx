import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Active } from "./components/profile/navigation/Active";
import { Friends } from "./components/profile/navigation/Friends";
import { RoadmapsProfile } from "./components/profile/navigation/RoadmapsProfile";
import { Profile } from "./components/profile/Profile";
import { Roadmaps } from "./components/roadmaps/Roadmaps";
import { RootLayout } from "./components/RootLayout";

const RootRouter: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="profile" element={<Profile />}>
              <Route path="active" element={<Active />} />
              <Route path="roadmaps" element={<RoadmapsProfile />} />
              <Route path="friends" element={<Friends />} />
            </Route>
            <Route path="roadmaps" element={<Roadmaps />} />
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<Navigate to="/profile" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
export default RootRouter;
