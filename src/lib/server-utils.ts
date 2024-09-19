"use server";

import { auth } from "./auth";

export const checkIsAdmin = async () => {
  const session = await auth();
  if (!session?.user.isAdmin) {
    return false;
  }
  return true;
};
