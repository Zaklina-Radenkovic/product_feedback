export type Feedback = {
  id: string;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: CommentType[];
};

export type CommentType = {
  id: string;
  content: string;
  user: UserType;
  replies: ReplyType[];
};

export type UserType = {
  image: string;
  name: string;
  username: string;
};

export type ReplyType = {
  content: string;
  replayingTo: string;
  user: UserType;
};
