import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Profile } from "./components/profile/Profile";
import { Roadmaps } from "./components/roadmaps/Roadmaps";
import { RootLayout } from "./components/RootLayout";

const RootRouter: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="profile" element={<Profile />} />
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
