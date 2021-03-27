import Layout from "../components/Layout";
import { posts } from "../profile";
import Link from "next/link";

const PostCard = ({ post }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="overflow">
        <img
          src={post.imageURL}
          alt=""
          className="card-img-top"
          style={{ height: "11rem" }}
        />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href={`/post/?title=${post.title}`} as={`/post/${post.title}`}>
          <button className="btn btn-light">Read</button>
        </Link>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const titlePage = "Blog";

  return (
    <Layout titlePage={titlePage} footer={false} title="My Blog">
      <div className="row">
        {posts.map((post, i) => {
          return <PostCard post={post} key={i} />;
        })}
      </div>
    </Layout>
  );
};

export default Blog;
