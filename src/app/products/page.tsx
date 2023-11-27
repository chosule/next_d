import { getProducts } from "@/service/products";
import Link from "next/link";

//ISR 렌더링 몇초마다 한번씩 생성가능함
// export const revalidate = 3;

export default async function ProductPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com',{
    //next키를 이용해서 revalidate 생성 가능 !
    //revalidate를 0으로 설정할경우에 SSR처럼 사용가능
    // next:{ revalidate : 3}

    // cache라는 옵션을 사용해서 SSR처럼 사용가능
    // cache를 하지않겟다고 설정함으로써 페이지가 요청이 오면 그때 fetch함
    cache: 'no-store'
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
 