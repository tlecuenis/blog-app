import Link from "next/link";
import { posts } from "../data/posts";

export default function BlogsPage() {
    return(
        <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {posts.map(post => (
                    <Link key={post.id} href={`/blogs/${post.id}`} className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p>Written by: {post.username}</p>
                        <div className="flex gap-2">
                            {post.topics.map(topic => (
                                <p className="font-semibold text-sm bg-gray-300 px-1 rounded-md">{topic}</p>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
};
