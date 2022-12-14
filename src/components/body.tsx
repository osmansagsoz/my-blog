import { useMemo } from "react";
import { useAppSelector } from "../hooks/hooks";
import { Article } from "./article";

export const Body = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const somePosts = useMemo(() => Object.values(posts).slice(0, 5), [posts]);

  console.log(somePosts);

  return (
    <main>
      <section className="posts">
        {somePosts.map((post) => {
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
      <section className="photo">
        <img src="../assets/blog.jpg" alt="blog" />
      </section>
    </main>
  );
};
