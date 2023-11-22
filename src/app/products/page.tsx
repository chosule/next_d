import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function ProductPage() {
  return (
    <>
      <h1>제품 소개페이지 !</h1>
      <ul>
        {products.map((product) => (
          <li>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
