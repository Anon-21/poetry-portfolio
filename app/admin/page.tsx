"use client"

import { useEffect, useState } from "react"

export default function AdminPage() {

  const [posts, setPosts] = useState<any[]>([])

useEffect(() => {
  fetch("/api/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
}, [])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [type, setType] = useState("POEM")

  const publish = async () => {

    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-")

    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        slug,
        content,
        type
      })
    })

    setTitle("")
    setContent("")
  }

  const deletePost = async (id: string) => {

  if (!confirm("Delete this post?")) return

  await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  })

  setPosts(posts.filter(post => post.id !== id))
}

  return (
    <main className="max-w-xl mx-auto p-10">

      <h1 className="text-3xl mb-6">
        New Post
      </h1>

      <input
        className="border p-2 w-full mb-4"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border p-2 w-full mb-4"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="POEM">Poem</option>
        <option value="BLOG">Blog</option>
        <option value="COLLECTION">Collection</option>
      </select>

      <textarea
        className="border p-2 w-full h-60 mb-4"
        placeholder="Write in Markdown..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={publish}
        className="bg-black text-white px-4 py-2"
      >
        Publish
      </button>

            {/* POSTS TABLE */}

      <h2 className="text-2xl mb-6">
        Manage Posts
      </h2>
<p>{posts.length} posts loaded</p>
      <table className="w-full text-left border-collapse">

        <thead>
          <tr className="border-b">
            <th className="py-2">Title</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {posts.map(post => (
            <tr key={post.id} className="border-b">

              <td className="py-3">{post.title}</td>

              <td>{post.type}</td>

              <td className="space-x-4">

                <button
                  onClick={() => deletePost(post.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </main>
  )
}