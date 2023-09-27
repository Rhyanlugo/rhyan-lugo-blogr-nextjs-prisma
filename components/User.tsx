import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type UserProps = {
  id: string;
  name: string;
  email: string;
};

const Post: React.FC<{ user: UserProps }> = ({ user }) => {
  const authorName = user.name;
  const authorEmail = user.email;
  return (
    <div>
      <h2>{authorName}</h2>
      <span>Email: {authorEmail}</span>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
