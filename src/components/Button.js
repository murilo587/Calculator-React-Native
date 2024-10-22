import { Text, Pressable, StyleSheet } from "react-native";

const Button = ({ color, text }) => {
  return (
    <Pressable style={[styles.BtnBlackGray, {backgroundColor: {color}}]}>
      <Text style={styles.textBtn}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  BtnBlackGray: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 80,
    borderRadius: 100,
  },
  textBtn: {
    fontSize: 27,
    color: "white",
  },
});

export default Button;
