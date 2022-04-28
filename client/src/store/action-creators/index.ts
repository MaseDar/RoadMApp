import * as UserActionCreators from "./user.actions";
import * as ProfileActionCreators from "./profileActions";
import * as RoadmapActionCreators from "./roadmapActions";

export default {
  ...ProfileActionCreators,
  ...UserActionCreators,
  ...RoadmapActionCreators,
};
