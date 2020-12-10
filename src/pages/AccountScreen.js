import React, { useState } from "react";
import Logo from "../components/Logo";
import AccountForm from "../components/Account";
import Background from "../components/Background";
import Button from "../components/Button";
import firebase from "../infra/firebase";
import Toast from "react-native-simple-toast";
import { Formik } from "formik";
import axios from "../infra/axios/order";
import * as Yup from "yup";

const validations = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido.")
    .required("O campo e-mail é obrigatorio"),
  password: Yup.string().required("O campo senha é obrigatorio"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "As senhas devem corresponder"
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
      onSubmit={(values) =>
        firebase
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password)
          .then((result) => {
            const user = { email: result.user.email, uid: result.user.uid };
            // firebase.database().ref("/users").push(user);
            axios
              .post("/users.json", user)
              .then(() => {
                Toast.show("Usuario cadastrado com sucesso!");
                navigation.navigate("LoginScreen");
              })
              .catch((error) => Toast.show(error));
          })
          .catch((err) => {
            Toast.show(error);
          })
      }
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
