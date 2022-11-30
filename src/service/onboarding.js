import { post } from "./client";

const signInUrl = "/SignIn";

const signIn = async (body) => {
  return await post(signInUrl, body);
};

export {signIn}