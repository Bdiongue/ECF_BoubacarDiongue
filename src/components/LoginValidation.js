function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "Veuillez remplir la section email.";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email invalide";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Veuillez écrire un mot de passe.";
  } else if (!password_pattern.test(values.password)) {
    error.password =
      "le mot de passe doit contenir 8 caratères minimum avec une lettre minuscule et majuscule !";
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
