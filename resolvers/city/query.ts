import prisma from "../../lib/prisma";

const cityQuery = {
  city: async (_, { id }) => {
    try {
      return prisma.city.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  },
  cities: async (_, {}) => {
    return prisma.city.findMany({ orderBy: { name: "asc" } });
  },
};

export default cityQuery;
