import prisma from "../../lib/prisma";

const companyQuery = {
  company: async () => {
    return await prisma.company.findFirst({});
  },
};

export default companyQuery;
