import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachements[0].file}
          alt="message-attachement"
          className="message-image"
          style={{ float: "right" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "right",
            marginRight: "18px",
            color: "white",
            backgroundColor: "#3b2a50",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
