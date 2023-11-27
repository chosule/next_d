import path from "path";
import {promises as fs} from "fs"

export type Product = {
    id:string;
    name:string;
    price:number;
}

export const revalidate = 3;

export async function getProducts():Promise<Product[]> {
    // 현재 실행중인 노드 파일의 위치
    // path.join => 경로를 합쳐줌
    // process.cwd => 현재작업 디렉토리
    const filePath = path.join(process.cwd(), 'data','products.json');
    // 파일경로 : /현재작업디렉토리의경로/data/products.json

    // fs.readFile 파일을 읽는데 사용되는 내장 메서드 (filename, encoding, callback)
    const data = await fs.readFile(filePath,'utf-8');

    return JSON.parse(data);
}

export async function getProduct(id:string):Promise<Product | undefined> {
    const products = await getProducts();
    return products.find((item) => item.id === id);
}