"use client";

import { useRouter } from "next/navigation";

export default function GoOnclickBack() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/products")}>
      제품들페이지로 돌아가기
    </button>
  );
}
