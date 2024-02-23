import service from "@/http/index.js";

//注册
export const register = (data) => {
  return service({
    url: "/api/register",
    method: "POST",
    data,
  });
};

//登录
export const login = (data) => {
  return service({
    url: "/api/login",
    method: "POST",
    data,
  });
};
 