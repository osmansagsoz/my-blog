import { Link } from "react-router-dom";

export const Article = ({
  title,
  postBody,
  id,
}: {
  title: string;
  postBody: string;
  id: number;
}) => {
  return (
    <Link to={`/details/${id}`}>
      <article>
        <h2>{title}</h2>
        <p>{postBody}</p>
      </article>
    </Link>
  );
};
