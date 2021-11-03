const Blog = ({ posts }: any) => {
  return (
    <ul>
      {posts.map((post: any) => {
        <li>{post.title}</li>;
      })}
    </ul>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive 'posts' as a prop at build time;

  return {
    props: {
      posts,
    },
  };
}
