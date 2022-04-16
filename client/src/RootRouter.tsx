import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Achieves } from "./components/profile/navigation/achieves/Achieves";
import { Friends } from "./components/profile/navigation/friends/Friends";
import { RoadmapsProfile } from "./components/profile/navigation/roadmaps/RoadmapsProfile";
import { Profile } from "./components/profile/Profile";
import { Roadmap } from "./components/roadmap/Roadmap";
import { Roadmaps } from "./components/roadmaps/Roadmaps";
import { RootLayout } from "./components/RootLayout";

const RootRouter: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="profile" element={<Profile />}>
              <Route path="achieves" element={<Achieves />} />
              <Route path="roadmaps" element={<RoadmapsProfile />}>
                <Route path="all/active" element={<Achieves />} />
                <Route path="all/successed" element={<Friends />} />
                <Route path="all/created" element={<Friends />} />
                <Route path="all/favorites" element={<Achieves />} />
              </Route>
              <Route path="friends" element={<Friends />} />
            </Route>
            <Route path="roadmap/:id" element={<Roadmap />} />
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
