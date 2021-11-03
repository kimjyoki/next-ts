export const getStaticProps = async () => {
  const res = await fetch("https://api/post/");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
