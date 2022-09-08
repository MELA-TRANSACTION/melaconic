import prisma from "../../lib/prisma";
import { IItem, IProduct, ITrans } from "../../utils/interfacesApp";

const userField = {
  User: {
    // balance: async (user) => {
    //   var trans = await prisma.trans.findMany({
    //     where: { owner: user.uid },
    //   });
    //   let balanceSended = 0;
    //   let balanceReceived = 0;
    //   for (var i = 0; i < trans.length; i++) {
    //     if (trans[i].status == "SEND") {
    //       balanceSended = balanceSended + trans[i].amount.amount;
    //     }
    //     if (trans[i].status == "RECEIVE") {
    //       balanceReceived = balanceReceived + trans[i].amount.amount;
    //     }
    //   }
    //   return { amount: balanceReceived - balanceSended, currency: "USD" };
    // },
  },
};

export default userField;

//console.log(sum);
