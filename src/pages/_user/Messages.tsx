import React from "react";
import Comments from "../../components/_user/messages/Comments";
import MessageForm from "../../components/_user/messages/MessageForm";
import useDocTitle from "../../lib/customHooks";

const Messages = () => {
  useDocTitle("وامک | پیامها");
  return (
    <>
      <MessageForm />
    </>
  );
};

export default Messages;
