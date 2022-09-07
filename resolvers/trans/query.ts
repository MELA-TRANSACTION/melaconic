import prisma from "../../lib/prisma";
import getUser from "../../utils/getUser";

const transQuery = {
  getBalance: async (_, { uid }) => {
    var trans = await prisma.trans.findMany({
      where: { OR: [{ senderRef: uid }, { receiverRef: uid }] },
    });
    let balanceSended = 0;
    let balanceReceived = 0;
    for (var i = 0; i < trans.length; i++) {
      if (trans[i].status == "SEND") {
        balanceSended = balanceSended + trans[i].amount.amount;
      }
      if (trans[i].status == "RECEIVE") {
        balanceReceived = balanceReceived + trans[i].amount.amount;
      }
    }

    return { amount: balanceReceived - balanceSended, currency: "USD" };
  },
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
