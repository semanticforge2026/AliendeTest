import { blogMetadata } from "@/lib/metadata";
export const metadata = blogMetadata;

export default function BlogPage() {
  return (
    <div className="container-premium section-padding">
      <div className="article-width text-center md:text-left mx-0 animate-fade-up">
        <h1 className="heading-1 mb-6">
          The Journal
        </h1>
        <p className="body-large">
          Insights on artificial intelligence, business management, and the future of work.
        </p>
      </div>
    </div>
  );
}
