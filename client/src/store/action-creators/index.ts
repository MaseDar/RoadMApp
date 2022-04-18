import * as UserActionCreators from "./UserActions";
import * as RoadmapActionCreators from "./PRActions";

export default {
  ...RoadmapActionCreators,
  ...UserActionCreators,
};
