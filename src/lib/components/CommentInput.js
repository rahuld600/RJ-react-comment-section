import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const CommentInput = (props) => {
  const [comment, setComment] = useState("");
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="onn"
    >
      <Stack
        direction="row"
        spacing={2}
        style={{
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
        }}
      >
        <TextField
          label={props?.isReplying ? "Replying to " : "Comment"}
          id="filled-size-small"
          placeholder={
            props?.isReplying
              ? props?.replyingTo?.name
              : "type something here...."
          }
          value={comment}
          variant="filled"
          size="medium"
          onChange={(event) => {
            let value = event.target.value;
            setComment(value);
          }}
        />

        <Button
          onClick={() => {
            !props?.isReplying
              ? props?.onAddComment(comment)
              : props?.isReplyOfReplies
              ? props?.onSendReply(
                  "@" + props?.replyingTo?.name + " " + comment
                )
              : props?.onSendReply(comment);

            setComment("");
          }}
          size="medium"
          variant="outlined"
          style={{
            padding: 10,
            height: 50,
            borderRadius: 10,
          }}
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default CommentInput;
