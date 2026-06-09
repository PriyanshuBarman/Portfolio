import { Suspense } from "react";
import { LoaderIcon } from "lucide-react";

import { getGitHubContributions } from "@/lib/get-contributions";
import GitHubContributionGraph from "../contribution-graph";

export default function GitHubContributions() {
  const contributions = getGitHubContributions();
  return (
    <section id="github-contributions" className="border-t border-dashed py-12">
      <h2 className="mb-4 px-4 text-xl font-semibold sm:text-2xl">GitHub</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </section>
  );
}

function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <LoaderIcon className="text-muted-foreground animate-spin" />
    </div>
  );
}
