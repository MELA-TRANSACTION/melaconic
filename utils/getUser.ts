const jwt = require("jsonwebtoken");
const getUser = async (req) => {
  const header = req.headers.authorization;
  if (!header) {
    throw new Error("Authentication is required");
  }
  const token = header.split(" ")[1];
  //const { uid, company, role, city } = jwt.verify(token, "meenor--@2323");
  const { user_id: uid, email: phone } = await jwt.decode(token);
  console.log(uid, phone);

  if (!uid) {
    throw new Error("User not found");
  }
  // return { uid, role, company, city };

  return { uid, phone };
};

export default getUser;
