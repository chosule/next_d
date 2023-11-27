import { getProducts } from "@/service/products";
import Link from "next/link";

export const revalidate = 3;

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
      </ul>
    </>
  );
}
 