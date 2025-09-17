import { type FC } from "react";
import { Link, useParams } from "react-router-dom";
import { CommentList } from "../../widgets/CommentList/ui/CommentList";
import styles from "./PostDetailsPage.module.css";
import { useGetPostByIdQuery } from "../../entities/post/api/postsApi";
import { useGetCommentsByPostIdQuery } from "../../entities/comment/api/commentsApi";
import { useGetUserByIdQuery } from "../../entities/user/api/usersApi";
import { skipToken } from "@reduxjs/toolkit/query";

export const PostDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const isInvalidId = isNaN(postId);

  const { data: post, error: postError } = useGetPostByIdQuery(
    isInvalidId ? skipToken : postId,
  );

  const { data: postComments = [], error: commentsError } =
    useGetCommentsByPostIdQuery(isInvalidId ? skipToken : postId);

  const userId = post?.userId;

  const { data: user } = useGetUserByIdQuery(userId ?? skipToken);

  if (isInvalidId) return <div>Invalid post Id</div>;

  if (postError) {
    console.error("Error loading post:", postError);
    return <div>Error loading post</div>;
  }

  if (!post) return <div>Post with ID {postId} not found</div>;

  if (commentsError) {
    console.error("Error loading post comments:", commentsError);
    return <div>Error loading comments for post {post.title}</div>;
  }

  if (!user) return <div>User with ID {post.userId} not found</div>;

  const hasComments: boolean = postComments.length > 0;

  return (
    <div className={styles.postDetails}>
      <h1 className={styles.postDetailsTitle}>{post.title}</h1>
      <Link
        className={styles.postDetailsAuthor}
        to={`/users/${post.userId}/posts`}
      >
        Author: {user.name}
      </Link>
      <p>{post.body}</p>

      <h2 className={styles.postDetailsCommentsTitle}>
        {hasComments ? postComments.length : "No"} comments
      </h2>
      <CommentList comments={postComments} />
    </div>
  );
};
