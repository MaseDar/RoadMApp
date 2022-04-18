import * as UserActionCreators from "./userActions";
import * as ProfileActionCreators from "./profileActions";
import * as RoadmapActionCreators from "./roadmapActions";

export default {
  ...ProfileActionCreators,
  ...UserActionCreators,
  ...RoadmapActionCreators,
};
