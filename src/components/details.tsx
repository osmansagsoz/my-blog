import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

export const Details = () => {
  const { id } = useParams();
  const { posts } = useAppSelector((state) => state.posts);
  const currentPost = useMemo(() => {
    if (id !== undefined) {
      return Object.values(posts).find((post) => post.id === +id);
    }
  }, [id, posts]);

  return (
    <div className="details">
      <h1>{currentPost?.title}</h1>
      <p>{currentPost?.body}</p>
    </div>
  );
};
