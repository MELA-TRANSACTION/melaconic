import prisma from "../../lib/prisma";
import getUser from "../../utils/getUser";

const transMutation = {
  rechargeDistributor: async (_, { data }, { req }) => {
    const { uid } = await getUser(req);
    const sender = await prisma.user.findFirst({ where: { uid } });

    //console.log("***************All done**************");
    const receiver = await prisma.user.findFirst({
      where: { phone: data.phoneReceiver },
    });

    if (sender && receiver) {
      // console.log(sender.id, .receiverId);

      if (sender.id === receiver.id) {
        throw new Error("Impossible transaction same user");
      }

      if (sender.balance < data.amount + data.cost) {
        throw new Error("Balance insuffisante");
      }

      await updateBalanceAccount(sender, data.amount, "SENDER");
      await updateBalanceAccount(receiver, data.amount, "RECEIVER");
      const trans = await createTransaction(
        sender,
        receiver,
        data,
        "Recharge-Distributor"
      );
      return trans;
    } else {
      throw new Error("Unknown error");
    }
  },

  rechargeClient: async (_, { data }, { req }) => {
    const { uid } = await getUser(req);

    const sender = await prisma.user.findFirst({ where: { uid } });

    const receiver = await prisma.user.findFirst({
      where: { phone: data.phoneReceiver },
    });

    //console.log("***************All done**************");
    if (sender && receiver) {
      //console.log(sender.id, data.receiverId);

      if (sender.id === receiver.id) {
        throw new Error("Impossible transaction same user");
      }
      if (sender.balance < data.amount + data.cost) {
        throw new Error("Balance insuffisante");
      }

      await updateBalanceAccount(sender, data.amount, "SENDER");
      await updateBalanceAccount(receiver, data.amount, "RECEIVER");
      const trans = await createTransaction(
        sender,
        receiver,
        data,
        "Recharge-Client"
      );
      return trans;
    } else {
      throw new Error("Unknown error");
    }
  },
  shareClient: async (_, { data }, { req }) => {
    const { uid } = await getUser(req);

    const sender = await prisma.user.findFirst({ where: { uid } });

    //console.log("***************All done**************");
    const receiver = await prisma.user.findFirst({
      where: { phone: data.phoneReceiver },
    });
    if (sender && receiver) {
      // console.log(sender.id, data.receiverId);

      if (sender.id === receiver.id) {
        throw new Error("Impossible transaction same user");
      }
      if (sender.balance < data.amount + data.cost) {
        throw new Error("Balance insuffisante");
      }

      await updateBalanceAccount(sender, data.amount, "SENDER");
      await updateBalanceAccount(receiver, data.amount, "RECEIVER");
      const trans = await createTransaction(sender, receiver, data, "Share");
      return trans;
    } else {
      throw new Error("Unknown error");
    }
  },
  withdraw: async (_, { data }, { req }) => {
    const { uid } = await getUser(req);

    const sender = await prisma.user.findFirst({ where: { uid } });

    const receiver = await prisma.user.findFirst({
      where: { phone: data.phoneReceiver },
    });

    //console.log("***************All done**************");
    if (sender && receiver) {
      if (sender.id === receiver.id) {
        throw new Error("Impossible transaction same user");
      }

      if (sender.balance < data.amount + data.cost) {
        throw new Error("Balance insuffisante");
      }

      await updateBalanceAccount(sender, data.amount, "SENDER");
      await updateBalanceAccount(receiver, data.amount, "RECEIVER");
      const trans = await createTransaction(sender, receiver, data, "Withdraw");
      return trans;
    } else {
      throw new Error("Unknown error");
    }
  },
  cancelTrans: async (_, { id }) => {
    return prisma.trans.update({ where: { id }, data: {} });
  },
};

const updateBalanceAccount = async (account, amount, type) => {
  if (type == "SENDER") {
    await prisma.user.update({
      where: { id: account.id },
      data: {
        balance: account.balance - amount,
      },
    });
  } else {
    await prisma.user.update({
      where: { id: account.id },
      data: {
        balance: account.balance + amount,
      },
    });
  }
};

const createTransaction = async (sender, receiver, data, type) => {
  const trans = await prisma.trans.create({
    data: {
      cost: data.cost,
      amount: data.amount,
      message: data.message || "Not provide",
      transType: type,
      senderRef: sender.id,
      receiverRef: receiver.id,
      status: "SEND",
      owner: sender.uid,
    },
  });

  await prisma.trans.create({
    data: {
      cost: data.cost,
      amount: data.amount,
      message: data.message || "Not provide",
      transType: type,
      senderRef: sender.id,
      receiverRef: receiver.id,
      status: "RECEIVE",
      owner: receiver.uid,
    },
  });

  return trans;
};

export default transMutation;
