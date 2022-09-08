import prisma from "../../lib/prisma";

const companyMutation = {
  createCompany: async (_, { data }) => {
    const company = await prisma.company.create({ data });
    return company;
  },
};

export default companyMutation;
