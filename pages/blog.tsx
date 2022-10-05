import type {NextPage} from 'next'
import Head from 'next/head'
import Link from "next/link";
import WordkMark from "../components/WordkMark";

const Blog: NextPage = () => {
    return (
        <div>
            <Head>
                <title>The Happy Stoner</title>
                <meta name="description" content="The Happy Stoner"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
         <main className="p-4 text-center">
                <div className="block mb-8">
                    <ul className="flex gap-2 justify-center">
                        <li className="text-green-100/80 w-full text-base hover:text-green-100 font-bold bg-green-900/20 font-light hover:bg-green-900/40 p-4 rounded transition-all">
                            <Link href="/">Hello</Link>
                        </li>
                        <li className="text-green-100/80 w-full text-base hover:text-green-100 font-bold bg-green-900/20 font-light hover:bg-green-900/40 p-4 rounded transition-all">
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li className="text-green-100/80 w-full text-base hover:text-green-100 font-bold bg-green-900/60 p-4 rounded transition-all">
                            <Link  href="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="max-w-2xl  text-lg text-left mx-auto mt-12">
blog
                </div>
            </main>
        </div>
    )
}

export default Blog
