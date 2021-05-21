import axios from "axios";
const EXPO_URL = "https://exp.host/--/api/v2/push/send";
const TOKEN_SERVER = "https://honeysuckle-lean-earwig.glitch.me/noti/";

export interface Token {
  id: number;
  token: string;
}

export const submitToken = async (token) => {
  var d = new Date();
  var n = d.getTime();
  const response = await axios.post(TOKEN_SERVER, { token, id: n });
  const result = response.data as Token;
//   console.log(result)
  return n;
};

export const getToken = async (id) => {
   const response = await axios.get(TOKEN_SERVER+`${id}`);
   const result = response.data as Token;
  return result;
};

export const sendPushNoti = async (token, title, body) => {
  const mess = {
    to: token,
    sound: "default",
    title,
    body,
  };
  await axios.post(EXPO_URL, mess);
};
