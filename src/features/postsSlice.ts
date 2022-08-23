import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import type { PostType, CommentType } from "src/types";

// const postsUrl = `${process.env.POSTS_API_BASE_URL}`;
const postsUrl = "https://jsonplaceholder.typicode.com";

interface PostsState {
  comments: {
    [key: number]: CommentType;
  };
  posts: {
    [key: number]: PostType;
  };
  status: {
    commentsStatus: string;
    postsStatus: string;
  };
}
const initialState: PostsState = {
  comments: {},
  posts: {},
  status: {
    commentsStatus: "idle",
    postsStatus: "idle",
  },
};

// export const userIdPosts = createSelector(
//   (state) => state.posts.posts,
//   (posts) => Object.values(posts).filter((post) => post.userId === 2)
// );

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await fetch(`${postsUrl}/posts`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const fetchComments = createAsyncThunk(
  "posts/fetchComments",
  async () => {
    try {
      const response = await fetch(`${postsUrl}/comments`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const postsSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status.postsStatus = "loading posts";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const newPosts: {
          [key: number]: PostType;
        } = {};
        action.payload.forEach((post: PostType) => {
          newPosts[post.id] = post;
        });
        state.posts = newPosts;
        state.status.postsStatus = "idle";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status.postsStatus = "There was a problem with posts!";
      })
      .addCase(fetchComments.pending, (state) => {
        state.status.commentsStatus = "loading comments";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const newComments: {
          [key: number]: CommentType;
        } = {};
        action.payload.forEach((comment: CommentType) => {
          newComments[comment.id] = comment;
        });
        state.comments = newComments;
        state.status.commentsStatus = "idle";
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status.commentsStatus = "There was a problem with comments!";
      });
  },
  initialState,
  name: "posts",
  reducers: {},
});

export default postsSlice.reducer;
