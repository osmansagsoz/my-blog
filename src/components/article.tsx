export const Article = ({
  title,
  postBody,
}: {
  title: string;
  postBody: string;
}) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{postBody}</p>
    </article>
  );
};
