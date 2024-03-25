import {Chat} from "@/components/chat/chat";

interface ChatPageParams {
  params: {
    lang: "es" | "en";
  };
}

export default async function ChatPage({params: {lang}}: ChatPageParams) {
  return (
    <main className="'p-4 m-auto h-full">
      <Chat lang={lang} />
    </main>
  );
}
