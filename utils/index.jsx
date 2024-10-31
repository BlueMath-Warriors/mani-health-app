export const validateEmail = (email) => {
  if (email.length < 1) return false;
  const re =
    /^([a-zA-Z0-9_\-\~\!\#\$\%\&\'\‘\.\/\=\^\{\}\|\+]+)+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  return /[^0-9]/.test(phone);
};
