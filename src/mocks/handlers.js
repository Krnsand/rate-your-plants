import { rest } from "msw";

const baseURL = "https://ryp-api.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "peachy",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image: "https://res.cloudinary.com/djdc4rve5/image/upload/v1/media/images/IMG_1308_bqoriy"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];