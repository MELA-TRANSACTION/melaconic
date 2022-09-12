import prisma from "../../lib/prisma";
import admin from "../../utils/ffiadmin";
import getUser from "../../utils/getUser";

const userMutation = {
  createUser: async (_, { data }, { req }) => {
    console.log(data);

    var phone = formatPhone(data.phone);
    const user = await prisma.user.findUnique({
      where: {
        phone: phone,
      },
    });
    if (user) {
      throw new Error("User already exist");
    } else {
      const fbUser = await admin.auth().createUser({
        displayName: data.name,
        phoneNumber: phone,
        email: phone + "@mela.com",
        password: data.password + "@mela",
      });

      const newUser = await prisma.user.create({
        data: {
          uid: fbUser.uid,
          phone: phone,
          name: data.name,
          roles: data.roles,
          espace: data.espace,
          balance: 0,
        },
      });

      return newUser;
    }
  },

  updateUser: async (_, { id, data }, { req }) => {
    return prisma.user.update({ where: { id }, data });
  },
  deleteUser: async (_, { id }, { req }) => {
    const { uid } = await getUser(req);
    const user = await prisma.user.delete({ where: { id: id } });

    return user ? true : false;
  },
  changePassword: async (_, { password }, { req }) => {
    const { uid } = await getUser(req);
    await admin.auth().updateUser(uid, { password: password });
    return true;
  },
};

export default userMutation;

function formatPhone(p: string) {
  if (p.startsWith("+243")) {
    return p;
  } else {
    var pp = p.replace("0", "+243");
    return pp;
  }
}
