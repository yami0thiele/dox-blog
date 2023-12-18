import type { Post } from "../types/post";

export const orderingOfPosts = (pA: Post, pB: Post) => {
  const pADate = new Date(pA.created_at);
  const pBDate = new Date(pB.created_at);
  
  if (pADate > pBDate) {
    return -1;
  } else if (pADate < pBDate) {
    return 1;
  } else {
    return 0;
  }
}