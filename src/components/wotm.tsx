import { useMemo } from "react";
import { useAppSelector } from "../hooks/hooks";
import { Article } from "./article";

export const WriterOfTheMonth = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const wotmPosts = useMemo(
    () => Object.values(posts).filter((post) => post.userId === 2),
    [posts]
  );

  return (
    <section className="wotm">
      {wotmPosts.map((post) => {
        return (
          <Article
            key={post.id}
            title={post.title}
            postBody={post.body}
            id={post.id}
          />
        );
      })}
    </section>
  );
};
