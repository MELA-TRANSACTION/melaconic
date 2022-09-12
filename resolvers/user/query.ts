import prisma from "../../lib/prisma";

const userQuery = {
  users: () => {
    return prisma.user.findMany({
      where: {
        AND: [{ espace: null }],
      },
    });
  },
  user: async (_, { uid }) => {
    const user = await prisma.user.findUnique({ where: { uid } });

    return user;
  },
  sellers: async (_, {}) => {
    return prisma.user.findMany({
      where: { NOT: [{ espace: null }] },
      orderBy: { createdAt: "desc" },
    });
  },
};

export default userQuery;
