import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

export const Header = () => {
  const { status } = useAppSelector((state) => state.posts);
  return (
    <header>
      <h1>My Blog</h1>
      {status.commentsStatus !== "idle" && status.postsStatus !== "idle" ? (
        <div>
          {status.commentsStatus} {status.postsStatus}
        </div>
      ) : null}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wotm">Writer of the Month</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
