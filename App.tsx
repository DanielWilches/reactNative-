import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput,  Image} from "react-native";
import Biografia from "./Biografia";
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {


  const login = (
    <View style={styles.container}>
      <View style={styles.containerFrom}>
        <View style={styles.containerFromImage}>
          <View style={styles.fromImageImg}></View>
          {/*           <Image
            style={{
              
              width: "120px !important",
            }}
            source={require("./assets/bandera.png")}
          /> */}
        </View>

        <View style={styles.containerFromInputs}>
          <TextInput
            style={styles.FromInputsText}
            placeholder="nombre"
            keyboardType="default"
          ></TextInput>
          <TextInput
            style={styles.FromInputsText}
            placeholder="Contraseña"
            keyboardType="visible-password"
          ></TextInput>
        </View>

        <View style={styles.containerFromBtns}>
          <NativeRouter>
            <Link
              style={styles.containerFrombtn}
              to="/biografia"
              underlayColor="#43A1EF"
            >
              <Text style={{ color: "#fff" }}>iniciar session </Text>
            </Link>

            <Link
              style={styles.containerFrombtn}
              to="/biografia"
              underlayColor="#43A1EF"
            >
              <Text style={{ color: "#fff" }}>Registrase</Text>
            </Link>

            <Route path="/biografia" component={Biografia} />
          </NativeRouter>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );

  return login;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 767,
    paddingTop: 0,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  containerFrom: {
    width: "100%",
    height: "auto",
    maxWidth: 500,
    borderRadius: 6,
    backgroundColor: "#C1E0F0",
    padding: 5,
  },
  containerFromImage: {
    width: "100%",
    maxWidth: 400,
    minHeight: 300,
    height: "auto",
    padding: 0,
    borderRadius: 6,
    borderWidth: 1,
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
  },
  fromImageImg: {
    width: "100%",
    height: "auto",
    borderRadius: 6,
  },
  containerFromInputs: {
    width: "100%",
    maxWidth: 450,
    height: "auto",
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
  },
  FromInputsText: {
    width: "100%",
    height: 35,
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 10,
  },
  containerFromBtns: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  containerFrombtn: {
    margin: 'auto',
    marginTop: 10,
    marginBottom:10,
    width: 120,
    backgroundColor: '#128EF5',
    textAlign: 'center',
    padding: 10,

    borderRadius: 6,
    
  }
});
