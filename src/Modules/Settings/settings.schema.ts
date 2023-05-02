import * as yup from "yup";

export const ResetSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export const ProfileSchema = yup.object().shape({
  email: yup.string().email(),
  name: yup.string(),
  surname: yup.string(),
});
