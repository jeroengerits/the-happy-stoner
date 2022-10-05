import Link from "next/link";

const InternalLink = ( {href, children} ) => (
    <Link href={href}>
        <span className="block text-green-100/80 w-full text-base cursor-pointer hover:text-green-100 font-bold font-light bg-green-900/40 hover:bg-green-900/40 p-4 rounded transition-all">
            {children}
        </span>
    </Link>
)

export default InternalLink;
