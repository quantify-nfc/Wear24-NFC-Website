import Cookies from "universal-cookie";

const c = new Cookies();

export const SetCookie = (
  cookieName,
  cookieValue,
  cookiePath = "/",
  expireAfterNYears = 0,
  expireAfterNMonths = 0,
  expireAfterNDays = 0
) => {
  c.set(cookieName, cookieValue, {
    path: cookiePath,
    expires: new Date(
      new Date(
        new Date(
          new Date().setFullYear(new Date().getFullYear() + expireAfterNYears)
        ).setMonth(new Date().getMonth() + expireAfterNMonths)
      ).setDate(new Date().getDate() + expireAfterNDays)
    ),
  });
};

export const GetCookie = (cookieName) => {
  return c.get(cookieName);
};

export const GetAllCookies = () => {
  return c.getAll();
};
