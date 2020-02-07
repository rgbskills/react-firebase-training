export default function validateLogin(values) {
  const errors = {};

  // email
  if (!values.email) {
    errors.email = "E-mail is required";
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
     errors.email = "Invalid e-mail address";
   }
  // password
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }


  return errors;
}
