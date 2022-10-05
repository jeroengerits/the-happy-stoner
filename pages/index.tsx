import type {NextPage} from 'next'
import Head from 'next/head'
import Link from "next/link";
import InternalLink from "../components/InternalLink";
import WordkMark from "../components/WordkMark";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>The Happy Stoner</title>
                <meta name="description" content="The Happy Stoner"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="p-4 text-center max-w-2xl mx-auto">
                <div className="block mb-16">
                    <ul className="flex gap-2 justify-center items-center [&>*]:w-full">
                        <li>
                            <InternalLink href="/">
                                Hello
                            </InternalLink>
                        </li>
                        <li>
                            <InternalLink href="/shop">
                                Shop
                            </InternalLink>
                        </li>
                        <li>
                            <InternalLink href="/blog">
                                Blog
                            </InternalLink>
                        </li>
                    </ul>
                </div>
                <WordkMark/>
                <div
                    className=" mt-12 px-4 lg:px-0 text-left text-sm md:text-md lg:text-lg tracking-wide ">
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
                    <form className="flex flex-col my-24 text-center justify-center">
                        <label className="text-green-100/80 font-serif font-medium text-2xl md:text-3xl mb-4"
                               htmlFor="email">Respect the stash, be a happy stoner</label>
                        <div className="flex flex-col lg:flex-row justify-start gap-2 justify-center items-center">
                            <input
                                className=" border-0 bg-white/10 placeholder-black/30 text-green-100 font-medium transition-all rounded-md p-4 "
                                type="email"
                                name="email" id="email" placeholder="E-mail address..."/>
                            <button
                                className="whitespace-nowrap bg-black/25 hover:bg-black/50 text-green-100/60 tracking-wide font-bold transition-all   rounded-md py-4 px-8"
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
