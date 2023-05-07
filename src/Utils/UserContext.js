import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "SM",
    email: "ahens@gmail.com",
  },
});
export default userContext;


