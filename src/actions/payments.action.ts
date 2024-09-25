"use server";

import { auth, signIn, signOut } from "@/lib/auth";
import prisma from "@/lib/db";

const AfterSuccessPayment = async () => {
  const session = await auth();
  const id = Number(session?.user?.id);
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      isPremium: true,
    },
  });

  await signOut();

  // update the cookie as premium user
  await signIn("credentials", { email: user.email, password: user.password });
};

export { AfterSuccessPayment };
