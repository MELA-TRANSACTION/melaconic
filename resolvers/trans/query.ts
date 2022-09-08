import prisma from "../../lib/prisma";
import getUser from "../../utils/getUser";

const transQuery = {
  allTrans: async (_, { uid }) => {
    if (uid) {
      return prisma.trans.findMany({
        where: { owner: uid },
        orderBy: { createdAt: "desc" },
        include: { receiver: true, sender: true },
      });
    } else {
      return prisma.trans.findMany({
        orderBy: { createdAt: "desc" },
        include: { receiver: true, sender: true },
      });
    }
  },
  myTrans: async (_, __, { req }) => {
    const { uid } = await getUser(req);
    console.log(uid);

    const user = await prisma.user.findUnique({ where: { uid: uid } });
    return prisma.trans.findMany({
      where: { owner: uid },
      include: { receiver: true, sender: true },
      orderBy: { createdAt: "desc" },
    });
  },
  trans: async (_, { id }) => {
    return prisma.trans.findUnique({
      where: { id },
      include: { receiver: true, sender: true },
    });
  },
};

export default transQuery;
