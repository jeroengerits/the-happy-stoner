import type {NextPage} from 'next'
import Head from 'next/head'
import Link from "next/link";
import WordkMark from "../components/WordkMark";

const Shop: NextPage = () => {
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
                        <li className="text-green-100/80 text-sm hover:text-green-100 font-medium font-light hover:bg-green-900/40 px-4 py-2 rounded transition-all">
                            <Link href="/">Hello</Link>
                        </li>
                        <li className="text-green-100/80 text-sm hover:text-green-100 font-medium bg-green-900/60 px-4 py-2 rounded transition-all">
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li className="text-green-100/80 text-sm hover:text-green-100 font-medium font-light hover:bg-green-900/40 px-4 py-2 rounded transition-all">
                            <Link href="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="max-w-2xl  text-lg text-left mx-auto mt-12">
                    shop
                </div>
            </main>
        </div>
    )
}

export default Shop
