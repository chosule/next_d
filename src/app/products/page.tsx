import { getProducts } from "@/service/products";
import Link from "next/link";

//ISR 렌더링 몇초마다 한번씩 생성가능함
// export const revalidate = 3;

export default async function ProductPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com',{
    //next키를 이용해서 revalidate 생성 가능 !
    next:{ revalidate : 3}
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <>
      <h1>제품 소개페이지 !</h1>
      <ul>
        {products?.map((product,index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
        {factText}
      </ul>
    </>
  );
}
 