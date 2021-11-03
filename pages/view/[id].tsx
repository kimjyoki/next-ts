import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

interface ItemProps {
  name: string;
  desc: string;
}

const Post = ({ item }: any) => {
  const router = useRouter();
  console.log(router.isFallback);

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.desc} />
          </Head>
        </>
      )}
    </>
  );
};

// @getStaticProps와 getServerSideProps의 차이는 빌드이후에도 data가 변경 가능한가의 여부.

// 빌드와 상관없이, 매 요청마다 데이터를 서버로부터 가져옵니다.
export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
