"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function Editor({
  content,
  onChange,
}: {
  content: string
  onChange: (value: string) => void
}) {

const editor = useEditor({
  extensions: [StarterKit],
  content,
  immediatelyRender: false,
  onUpdate: ({ editor }) => {
    onChange(editor.getHTML())
    },
  })

  if (!editor) return null

  return (
    <div className="border rounded p-4">

      <div className="flex gap-2 mb-4">

        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>

        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          H1
        </button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          List
        </button>

      </div>

      <EditorContent editor={editor} />

    </div>
  )
}