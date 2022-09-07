import prisma from "../../lib/prisma";

const transField = {
  Trans: {
    sender: async (trans) => {
      // console.log(trans);
      return prisma.user.findFirst({
        where: { id: trans.sender.id },
      });
    },
    receiver: async (trans) => {
      // console.log(trans);
      return prisma.user.findFirst({
        where: { id: trans.receiver.id },
      });
    },
  },
};

export default transField;
