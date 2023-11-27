import Link from "next/link";
import NotFound from "../../not-found";
import { Metadata } from "next";
import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3;

//메타태그
export function generateMetadata({params}:Props) {
  const slug = params.slug;
  return{
    title: `제품의 이름:${slug}`
  }}


export default async function ProductPage({params:{slug}} : Props) {
   const product = await getProduct(slug);
   if(!product){
    notFound();
   }
   return <div>{product.name}</div>
}
//generateStaticParams를 사용해서 미리 동적인 페이지를 정적페이지로 생성가능
//generateStaticParams는 build할때 미리 생성한다고? 생각하면 될듯 

export async function  generateStaticParams() {
  //모든 제품의 페이지들을 미리 만들어 둘 수 있게 변경 => SSG
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
