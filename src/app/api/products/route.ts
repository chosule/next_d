import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

export default async function route() {
  const products = await getProducts();
  return NextResponse.json({ products });
}
