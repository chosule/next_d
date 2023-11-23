import Link from "next/link";
import NotFound from "../../not-found";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};



export function generateMetadata({params}) {
  const slug = params.slug;
  return{
    title: `제품의 이름:${slug}`
  }}

const ProductPage = ({ params }: Props) => {
  //  console.log(params.slug);
  if (params.slug === "noting") {
    NotFound();
  }
  return (
    <>
      <div>{params.slug} page</div>
    </>
  );
};

//generateStaticParams를 사용해서 미리 동적인 페이지를 정적페이지로 생성가능
//generateStaticParams는 build할때 미리 생성한다고? 생각하면 될듯 

export function generateStaticParams() {
  const posts = ["청바지", "치마"];
  return posts.map((post) => ({
    slug: post,
  }));
}
export default ProductPage;
