import Link from "next/link";
import NotFound from "../../not-found";
import { Metadata } from "next";
import { getProduct, getProducts } from "@/service/products";

type Props = {
  params: {
    slug: string;
  };
};


//메타태그
export function generateMetadata({params}:Props) {
  const slug = params.slug;
  return{
    title: `제품의 이름:${slug}`
  }}

const ProductPage = ({ params :{slug}}: Props) => {
  const product = getProduct(slug);

  if(!product){
    NotFound()
  }
  //서버파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여주게 변경
  return (
    <>
      <div>{product.name} page</div>
    </>
  );
};

//generateStaticParams를 사용해서 미리 동적인 페이지를 정적페이지로 생성가능
//generateStaticParams는 build할때 미리 생성한다고? 생각하면 될듯 

export async function  generateStaticParams() {
  //모든 제품의 페이지들을 미리 만들어 둘 수 있게 변경 => SSG
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
export default ProductPage;
