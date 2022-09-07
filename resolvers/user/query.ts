import prisma from "../../lib/prisma";

const userQuery = {
  users: () => {
    return prisma.user.findMany({
      include: { _count: true },
      orderBy: { createdAt: "desc" },
    });
  },
  user: async (_, { uid }) => {
    const user = await prisma.user.findUnique({ where: { uid } });

    return user;
  },
};

export default userQuery;
