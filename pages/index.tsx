import type {NextPage} from 'next'
import Head from 'next/head'
import Link from "next/link";
import WordkMark from "../components/WordkMark";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>The Happy Stoner</title>
                <meta name="description" content="The Happy Stoner"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="p-4 text-center">
                <div className="block mb-8">
                    <ul className="flex gap-2 justify-center items-center">
                        <li className="text-green-100/80 w-full text-sm hover:text-green-100 font-bold bg-green-900/60 p-4 rounded transition-all">
                            <Link href="/">Hello</Link>
                        </li>
                        <li className="text-green-100/80 w-full text-sm hover:text-green-100 font-bold bg-green-900/20 font-light hover:bg-green-900/40 p-4 rounded transition-all">
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li className="text-green-100/80 w-full text-sm hover:text-green-100 font-bold font-light bg-green-900/20 hover:bg-green-900/40 p-4 rounded transition-all">
                            <Link  href="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
                <WordkMark/>
                <div className="max-w-2xl mt-8 px-4 lg:px-0 text-left text-sm md:text-md lg:text-lg tracking-wide mx-auto">
                    <p className="mb-4 leading-relaxed text-green-100/80 ">
                        Cannabis has been a part of Amsterdams culture for years, and we are proud to
                        be part of this. So many people come here seeking out peace in an increasingly busy world - we
                        feel their stash should go along with care too!
                    </p>
                    <p className="mb-4 leading-relaxed text-green-100/80 ">
                        That is why we came up with a future proof package made with recycled and eco-friendly materials
                        - which
                        means we help reduce pollution in Amsterdam.
                    </p>
                    <p className="mb-4 leading-relaxed text-green-100/80 ">
                        Our sleek design is reusable and keeps your cannabis fresh, so you can always
                        enjoy the highest quality while keeping your conscience clear.
                    </p>
                    <p className="mb-4 leading-relaxed text-green-100/80 ">
                        We know you love smoking as much we do, but why keep using plastics when there is a better
                        option?
                    </p>
                    <form className="flex flex-col my-16 text-center justify-center">
                        <label className="text-green-100/60 font-serif font-medium text-lg md:text-xl lg:text-2xl mb-3 "
                               htmlFor="email">Respect the stash, be a happy stoner</label>
                        <div className="flex flex-col lg:flex-row justify-start gap-2 justify-center items-center">
                            <input
                                className=" border-0 bg-white/10 placeholder-black/30 text-green-100 font-medium transition-all rounded-md px-3 py-2 "
                                type="email"
                                name="email" id="email" placeholder="E-mail address..."/>
                            <button
                                className="whitespace-nowrap bg-black/25 hover:bg-black/50 text-green-100/60 tracking-wide font-bold transition-all   rounded-md px-6 py-2"
                                type="submit">Join Us
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Home
