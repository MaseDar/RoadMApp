import * as UserActionCreators from "./user.actions";
import * as ProfileActionCreators from "./profile.actions";
import * as RoadmapActionCreators from "./roadmap.actions";

export default {
  ...ProfileActionCreators,
  ...UserActionCreators,
  ...RoadmapActionCreators,
};
