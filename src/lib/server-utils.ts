"use server";

import { auth } from "./auth";

export const checkIsAdmin = async () => {
  const session = await auth();
  // @ts-ignore
  if (!session?.user.isAdmin) {
    return false;
  }
  return true;
};
