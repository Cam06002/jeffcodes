import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: "cm2dyti600000117uqniqykga",
});

export type { GetPostsResult, GetPostResult };
