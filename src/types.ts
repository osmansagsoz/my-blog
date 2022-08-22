export interface PostType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface CommentType {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
