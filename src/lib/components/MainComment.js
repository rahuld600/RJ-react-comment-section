import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CommentInput from "./CommentInput";

const CommentReply = (props) => {
  return (
    <div
      className="border-bottom border-secondary  my-3"
      style={{
        backgroundColor: "#f2eded",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <Stack direction="row" spacing={2}>
        <Avatar alt={props?.name} />
        <div>
          <h5>{props?.name}</h5>
          <p>{props?.comment}</p>
          <div className="com-like-rep-container d-flex">
            <p className="mx-1">
              <a href="" style={{ color: "grey", textDecoration: "none" }}>
                Like
              </a>
            </p>
            <p className="mx-1">
              <button
                style={{ color: "grey", textDecoration: "none" }}
                onClick={() => {
                  props?.onClickReply(props);
                }}
              >
                Reply
              </button>
            </p>
          </div>
        </div>
      </Stack>
    </div>
  );
};

const MainComment = (props) => {
  const { comments } = props;
  return (
    <>
      {comments.map((item, index) => {
        console.log(item?.avatar);
        return (
          <div
            className="border-bottom border-secondary  my-3 "
            style={{
              backgroundColor: "#f2eded",
              padding: 20,
              borderRadius: 10,
              paddingTop: 20,
            }}
          >
            <Stack direction="row" spacing={2} key={index}>
              <Avatar alt={item?.name} />
              <div>
                <h5>{item?.name}</h5>
                <p>{item?.comment}</p>
                <div className="com-like-rep-container d-flex">
                  <p className="mx-1">
                    <a
                      href=""
                      style={{ color: "grey", textDecoration: "none" }}
                    >
                      Like
                    </a>
                  </p>
                  <p className="mx-1">
                    <button
                      onClick={() => {
                        props?.onClickReply(item);
                      }}
                      style={{ color: "grey", textDecoration: "none" }}
                    >
                      Reply
                    </button>
                  </p>
                </div>
                <div className="replies-container">
                  {item?.replies?.map((val, i) => {
                    return (
                      <CommentReply
                        key={i}
                        _id={item?._id}
                        name={val?.name}
                        comment={val?.comment}
                        onClickReply={(data) =>
                          props?.onClickReplyOfReplies(data)
                        }
                      />
                    );
                  })}
                </div>
                {props?.isReplying && props?.replyingTo?._id === item?._id && (
                  <CommentInput
                    replyingTo={props?.replyingTo}
                    isReplying={props?.isReplying}
                    onSendReply={props?.onSendReply}
                    isReplyOfReplies={props?.isReplyOfReplies}
                  />
                )}
              </div>
            </Stack>
          </div>
        );
      })}
    </>
  );
};

export default MainComment;
