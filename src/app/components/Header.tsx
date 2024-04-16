import Link from "next/link"

export default function Header() {
    return(
        <header className="bg-slate-400 p-4">
            <nav className="flex justify-between items-center max-w-4xl mx-auto">
                <Link href="/" className="text-white text-2xl font-bold">
                    My Blog
                </Link>

                <ul className="flex space-x-4">
                    
                    <li>
                        <Link href='/blogs' className="text-white hover:text-black">
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link href='/api/auth/signin' className="text-white hover:text-black">
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
