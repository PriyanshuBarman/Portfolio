"use client";

import { use } from "react";

import { GITHUB_LINK } from "@/lib/constants/site";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "@/components/ui/contribution-graph";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>;
}) {
  const data = use(contributions);

  return (
    <ContributionGraph
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={0}
    >
      <ContributionGraphCalendar
        className="scrollbar-none! px-4 sm:px-4"
        title="GitHub Contributions"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger render={<g />}>
              <ContributionGraphBlock
                activity={activity}
                className="cursor-pointer"
                dayIndex={dayIndex}
                weekIndex={weekIndex}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">{activity.date}</p>
              <p>{activity.count} contributions</p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-4">
        <ContributionGraphTotalCount>
          {({ totalCount }) => (
            <div className="text-muted-foreground">
              {totalCount.toLocaleString("en")} contributions in the last year
              on{" "}
              <a
                className="font-medium underline underline-offset-4"
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}
