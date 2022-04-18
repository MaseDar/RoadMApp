import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { PRCard } from "./components/extends/roadmap/PRCard";
import { Achieves } from "./components/profile/navigation/achieves/Achieves";
import { Friends } from "./components/profile/navigation/friends/Friends";
import { PActiveRoadmaps } from "./components/profile/navigation/roadmaps/active/PActiveRoadmaps";
import { PRoadmaps } from "./components/profile/navigation/roadmaps/PRoadmaps";
import { Profile } from "./components/profile/Profile";
import { RCreate } from "./components/roadmap/RCreate";
import { Roadmap } from "./components/roadmap/Roadmap";

import { RootLayout } from "./components/RootLayout";
import { AppSteps } from "./components/steps/AppSteps";
import { Test } from "./components/Test";

const RootRouter: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="profile" element={<Profile />}>
              <Route path="achieves" element={<Achieves />} />
              <Route path="roadmaps" element={<PRCard />} />
              <Route path="roadmaps/all/active" element={<PActiveRoadmaps />} />
              <Route path="roadmaps/all/successed" element={<Friends />} />
              <Route path="roadmaps/all/created" element={<Friends />} />
              <Route path="roadmaps/all/favorites" element={<Achieves />} />
              <Route path="friends" element={<Friends />} />
            </Route>
            <Route path="roadmap/:id" element={<Roadmap />} />
            <Route path="roadmap/create" element={<RCreate />} />
            <Route path="roadmaps" element={<Test />} />
            <Route path="steps" element={<AppSteps />} />
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<Navigate to="/profile" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
export default RootRouter;
