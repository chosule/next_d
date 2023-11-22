import NotFound from "../../not-found"

/**
 * @description
 * generateStaticParams를 사용해서 미리 동적인 페이지를 정적페이지로 생성가능하다.
 * generateStaticParams는 build할때 미리 생성한다고? 생각하면 될듯 
 * 
 */
type Props = {
    params:{
        slug :string
    }
}

const Page = ({params}:Props) => {
    //  console.log(params.slug);
    if(params.slug === "noting"){
        NotFound();
    }
    return(
       <div>{params.slug} page</div>
    )
}


export function generateStaticParams () { 
    const posts = ["청바지","치마"];
    return posts.map((post) => ({
        slug: post,
    }));
}
export default Page