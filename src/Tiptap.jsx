import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import Collaboration from '@tiptap/extension-collaboration'

const ydoc = new Y.Doc()
const provider = new WebrtcProvider(
  'example-document',
  ydoc,
  { signaling: ['ws://localhost:4444'] },
)

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Collaboration.configure({
        document: ydoc,
      }),
    ],
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
