import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Owner Handbook | NWI Fun Ball",
  description:
    "Guide for hosting, domains, and updating the NWI Fun Ball website (GitHub, Vercel, content files).",
};

export default function OwnerHandbookPage() {
  const filePath = path.join(process.cwd(), "OWNER-HANDBOOK.md");
  let content: string;
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch {
    content =
      "Could not read OWNER-HANDBOOK.md. Make sure the file exists at the project root.";
  }

  return (
    <main className="min-h-screen bg-nwi-pink text-nwi-navy px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6">
          <Link
            href="/"
            className="text-nwi-orange font-semibold underline underline-offset-2 hover:text-nwi-orange-dark focus:outline-none focus:ring-2 focus:ring-nwi-orange rounded"
          >
            Back to site
          </Link>
        </p>
        <article className="rounded-xl border-2 border-nwi-navy/15 bg-white/90 px-5 py-8 shadow-sm sm:px-10 sm:py-10">
          <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-nwi-navy/95">
            {content}
          </pre>
        </article>
      </div>
    </main>
  );
}
