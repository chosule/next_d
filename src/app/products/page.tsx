import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Link from "next/link";

//ISR 렌더링 몇초마다 한번씩 생성가능함
// export const revalidate = 3;

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개페이지 !</h1>
      <ul>
        {products?.map((product,index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
        <MeowArticle/>
      </ul>
    </>
  );
}
 