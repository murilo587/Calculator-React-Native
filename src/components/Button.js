import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ color, text, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
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
