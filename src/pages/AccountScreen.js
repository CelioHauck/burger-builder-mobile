import React, { useState } from "react";
import Logo from "../components/Logo";
import AccountForm from "../components/Account";
import Background from "../components/Background";
import Button from "../components/Button";
import firebase from "../infra/firebase";
import Toast from "react-native-simple-toast";

import * as Yup from "yup";

const validations = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido.")
    .required("O campo e-mail é obrigatorio"),
  password: Yup.string().required("O campo senha é obrigatorio"),
  confirmPassword: Yup.string().required(
    "A campo confirma senha é obrigatorio"
  ),
});

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const AccountScreen = ({ navigation }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validations}
    >
      {(props) => {
        const { values, touched, errors, handleChange, handleSubmit } = props;
        return (
          <Background>
            <Logo />
            <AccountForm
              values={values}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
            />
            <Button click={handleSubmit} />
          </Background>
        );
      }}
    </Formik>
  );
};

export default AccountScreen;
