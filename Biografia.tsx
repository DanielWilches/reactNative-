import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import App from "./App";

export default function Biografia() {
    const Biografia = (
      <View style={styles.container}>
        <View style={styles.containerBiografia}>
          <Text style={styles.containerBiografiaTitulo}>
            Esta es su biografia
          </Text>
          <Text style={styles.containerBiografiaText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lobortis arcu ullamcorper, pellentesque nisi non, egestas nisi.
            Aliquam pharetra, dolor at porta pellentesque, quam tortor tempus
            enim, et lobortis quam nisi non leo. Sed tortor justo, fermentum
            quis ligula et, viverra efficitur urna. Proin ullamcorper ligula
            lectus, at luctus dui rutrum nec. Aliquam id ligula et leo elementum
            imperdiet et vitae purus. Aenean vehicula ligula non leo placerat,
            eu auctor diam venenatis. Duis rutrum, eros sit amet suscipit
            tempor, turpis massa vehicula elit, vitae porta augue nunc non
            justo. In in ante eget eros laoreet pretium. Mauris facilisis ut
            ligula id condimentum. Suspendisse congue commodo massa pretium
            fermentum. Suspendisse potenti. Maecenas efficitur velit in
            malesuada consectetur. Donec iaculis, velit vitae iaculis tempus,
            justo odio hendrerit urna, nec suscipit turpis ante lacinia eros.
            Nulla dapibus ullamcorper odio in efficitur. Quisque nulla diam,
            rhoncus vel efficitur tincidunt, aliquam non nibh. Pellentesque
            iaculis dignissim nibh ac molestie. Integer porta, felis vitae
            posuere bibendum, mauris elit tristique ligula, eu fermentum dolor
            mauris quis lectus. Mauris cursus dui lorem, ut venenatis dolor
            feugiat id. Quisque eget sem consectetur, congue turpis et,
            imperdiet elit. Praesent hendrerit hendrerit nibh ultrices suscipit.
            Integer auctor ex vel purus tempor feugiat. Donec accumsan tellus
            nec augue semper semper. Nam gravida, turpis nec semper imperdiet,
            lectus ligula accumsan ipsum, nec imperdiet felis ligula in risus.
            Morbi convallis facilisis dui, sit amet sagittis purus tristique
            vel. Pellentesque a purus arcu. Pellentesque maximus porta dui, sed
            accumsan metus lacinia a. Vestibulum sed suscipit eros. Donec at
            porta ex, at maximus risus. Maecenas vel nunc ac odio congue
            maximus. Proin varius velit orci, ultrices cursus velit bibendum sit
            amet. Praesent euismod dolor felis, id semper ante euismod in.
            Aliquam erat volutpat. Vivamus aliquam dictum varius. Aliquam
            hendrerit metus velit, nec viverra turpis viverra ut. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce ullamcorper, libero sed varius sagittis, velit nisi
            molestie est, vel facilisis lorem mi quis risus. Ut tempor et lacus
            a tempus. Maecenas vitae aliquet eros. Aenean tempor tortor at sem
            gravida dignissim. Phasellus sollicitudin massa non dui maximus
            dignissim. Donec rutrum lacinia mauris, non scelerisque magna
            vestibulum a. Quisque enim risus, interdum non arcu at, placerat
            porta erat. Proin libero nulla, condimentum id eros at, suscipit
            lacinia sapien. Suspendisse nec magna tellus. Fusce eros neque,
            interdum non convallis hendrerit, fermentum non diam. Ut id sem
            consequat, laoreet sapien ut, elementum magna. Nullam mattis magna
            est, a ornare est commodo eget. Sed tristique, mauris sit amet
            facilisis finibus, justo magna dignissim dui, a scelerisque risus
            tellus sed massa. Maecenas id est non neque facilisis volutpat. In
            hac habitasse platea dictumst.
          </Text>


        </View>
        <StatusBar style="auto" />
      </View>
    );
    return Biografia;
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    padding: 20,
  },
  containerBiografia: {},
  containerBiografiaTitulo: {
    fontSize: 30,
    fontWeight: "600",
    textTransform: "capitalize",
    textAlign: "center",
  },
  containerBiografiaText: {
    lineHeight: 22,
  },
  containerbtn: {}
});