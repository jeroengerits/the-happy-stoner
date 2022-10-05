import type {NextPage} from 'next'
import Head from 'next/head'
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
                <div className="block mb-16">
                    <ul className="flex gap-2 justify-center items-center">
                        <li>
                            <a className="text-green-100/80 text-sm hover:text-green-100 font-bold bg-green-900/60 px-4 py-2 rounded transition-all" href="/">Hello</a>
                        </li>
                        <li>
                            <a className="text-green-100/80 text-sm hover:text-green-100 font-medium hover:bg-green-900/40 px-4 py-2 rounded transition-all" href="/shop">Shop</a>
                        </li>
                        <li>
                            <a className="text-green-100/80 text-sm hover:text-green-100 font-medium hover:bg-green-900/40 px-4 py-2 rounded transition-all" href="/">Blog</a>
                        </li>
                    </ul>
                </div>

                                <WordkMark/>

                <div className="max-w-2xl px-4 lg:px-0 text-left lg:text-lg tracking-wide mx-auto mt-16">
                    <p className="mb-4 leading-relaxed text-green-100/80 ">
                        Cannabis has been a part of Amsterdam's culture for years, and we are proud to
                        be part of this. So many people come here seeking out peace in an increasingly busy world - we
                        feel their stash should go along with care too!
                    </p>
                    <p className="mb-4 leading-relaxed text-green-100/80 ">
                        That's why we came up with a future proof package made with recycled and eco-friendly materials - which
                        means we help reduce pollution in Amsterdam.
                    </p>
                    <p className="mb-4 leading-relaxed text-green-100/80 ">
                        Our sleek design is reusable and keeps your cannabis fresh, so you can always
                        enjoy the highest quality while keeping your conscience clear.
                    </p>
                    <p className="mb-4 leading-relaxed text-green-100/80 ">
                        We know you love smoking as much we do, but why keep using plastics when there's a better option?
                    </p>

                    {/* Make a mailinglist subscribe form with Tailwind CSS*/}

                    <form className="flex flex-col mt-16 text-center justify-center">
                        <label className="text-green-100/80 tracking-wide font-bold  mb-3 "
                               htmlFor="email">Respect the stash, be a happy stoner</label>
                        <div className="flex justify-start gap-2 justify-center items-center">
                            <input className=" border-0 bg-white/10 placeholder-black/30 text-green-100 font-medium transition-all rounded-md px-3 py-2 " type="email"
                                   name="email" id="email" placeholder="E-mail address..."/>
                            <button
                                className="whitespace-nowrap bg-black/25 hover:bg-black/50 text-green-100/80 tracking-wide font-bold transition-all   rounded-md px-6 py-2"
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
