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
                <div className="block mb-16">
                    <ul className="flex gap-2 justify-center">
                        <li className="text-green-100/80 text-sm hover:text-green-100 font-medium hover:bg-green-900/40 px-4 py-2 rounded transition-all">
                            <Link href="/">Hello</Link>
                        </li>
                        <li className="text-green-100/80 text-sm hover:text-green-100 font-medium hover:bg-green-900/40 px-4 py-2 rounded transition-all">
                            <Link  href="/shop">Shop</Link>
                        </li>
                        <li className="text-green-100/80 text-sm hover:text-green-100 font-bold bg-green-900/60 px-4 py-2 rounded transition-all">
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
