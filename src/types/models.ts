export type Feedback = {
  id: string | null;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  color: string | null;
  comments: CommentType[];
  upvoted: boolean | null;
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
  replyingTo: string;
  user: UserType;
  id: string;
};

export interface iFeedbackToAdd extends Feedback {
  id: any;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: [];
}
