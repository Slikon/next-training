import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up']);

export default clerkMiddleware((auth, req) => {
  console.log(req.url)
  // if (!isPublicRoute(req)) auth().protect();
});


// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };