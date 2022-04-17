import * as UserActionCreators from "./users";
import * as RoadmapActionCreators from "./roadmap";

export default {
  ...RoadmapActionCreators,
  ...UserActionCreators,
};
