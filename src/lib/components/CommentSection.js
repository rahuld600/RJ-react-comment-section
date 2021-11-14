import React, { useEffect, useState } from "react";
import CommentInput from "./CommentInput";
import MainComment from "./MainComment";

const Comments = ({ comments, setComments, userName, avatar }) => {
  const [isReplying, setReplying] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [isReplyOfReplies, setIsReplyOfReplies] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: userName,
    avatar: avatar,
  });

  const onAddComment = (comment) => {
    if (comment.length === 0) {
      return;
    }
    const newComment = {
      _id: Math.random().toString(),
      name: userInfo?.name,
      comment: comment,
      avatar: userInfo?.avatar,
      likes: 0,
      replies: [],
      CreatedAt: new Date().toLocaleString(),
    };
    setComments([newComment, ...comments]);
  };

  const onClickReply = async (commentInfo) => {
    setReplying(true);
    setReplyingTo(commentInfo);
  };

  const onSendReply = async (reply) => {
    const newComment = {
      _id: Math.random().toString(),
      name: userInfo?.name,
      comment: reply,
      avatar: userInfo?.avatar,
      likes: 0,
      replies: [],
      CreatedAt: new Date().toLocaleString(),
    };
    const newComments = await comments.map((comment) => {
      if (comment._id === replyingTo._id) {
        return { ...comment, replies: [...comment.replies, newComment] };
      }
      return comment;
    });
    setComments(newComments);
    setIsReplyOfReplies(false);
    setReplying(false);
    setReplyingTo(null);
  };

  const onClickReplyOfReplies = (itemInfo) => {
    setReplying(true);
    setIsReplyOfReplies(true);
    setReplyingTo(itemInfo);
  };

  return (
    <div className="w-50">
      <CommentInput onAddComment={onAddComment} />
      <MainComment
        comments={comments}
        onClickReply={onClickReply}
        replyingTo={replyingTo}
        isReplying={isReplying}
        onSendReply={onSendReply}
        onClickReplyOfReplies={onClickReplyOfReplies}
        isReplyOfReplies={isReplyOfReplies}
      />
    </div>
  );
};

export default Comments;
