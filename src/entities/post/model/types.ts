import type { Comment } from "../../comment/model/types";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type PostWithComments = {
  post: Post;
  comments: Comment[];
};
