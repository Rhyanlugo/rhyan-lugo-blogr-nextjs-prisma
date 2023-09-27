import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import prisma from "@/lib/prisma";
import User, { UserProps } from "@/components/User";

export const getStaticProps: GetStaticProps = async () => {
  // Get all posts in the DB
  const users = await prisma.user.findMany({});
  return {
    props: { users },
    revalidate: 10,
  };
};

type Props = {
  users: UserProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>List of Users</h1>
        <main>
          {props.users.map((user) => (
            <div key={user.id} className="post">
              <User user={user} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
