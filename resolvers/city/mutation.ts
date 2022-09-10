import prisma from "../../lib/prisma";

const cityMutation = {
  createCity: async (_, { name }) => {
    return prisma.city.create({ data: { name } });
  },
  updateCity: async (_, { id, name, isActive }) => {
    return prisma.city.update({ where: { id }, data: { name, isActive } });
  },
  deleteCity: async (_, { id }) => {
    const city = await prisma.city.delete({ where: { id } });
    if (city) {
      return true;
    } else {
      return false;
    }
  },
};

export default cityMutation;
