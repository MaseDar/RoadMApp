interface RoadmapHat {
  name: string;
  short_description?: string;
  full_description?: string;
  background_url?: string;
  avatar_img?: string;
  percent: number;
}

export interface RoadmapState extends RoadmapHat {
  user_id: number;
  roadmap_id: number;
  favorite: boolean;
  isActive: boolean;
  isCreator: boolean;
  isEditor: boolean;
}

export interface RoadmapTransferProps {
  roadmap: RoadmapState;
}
