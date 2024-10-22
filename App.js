import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Button from './Button';

export default function App() {
  const [result, setResult] = useState(0);
  const [calc, setCalc] = useState('');

  const handleButtonPress = (value) => {
    if (value === 'AC') {
      setCalc('');
      setResult(0);
    } else if (value === '=') {
      try {
        const evaluated = eval(calc.replace('X', '*'));
        setResult(evaluated);
        setCalc(evaluated.toString());
      } catch {
        setResult(0);
      }
    } else {
      setCalc((prev) => prev + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.calcDiv}>
        <Text style={styles.calcText}>{calc}</Text>
      </View>
      <View style={styles.resultDiv}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <Button color="#5c5c5e" text="AC" onPress={() => handleButtonPress('AC')} />
        <Button color="#5c5c5e" text="+/-" />
        <Button color="#5c5c5e" text="%" onPress={() => handleButtonPress('%')} />
        <Button color="orange" text="/" onPress={() => handleButtonPress('/')} />
        <Button color="#28282a" text="7" onPress={() => handleButtonPress('7')} />
        <Button color="#28282a" text="8" onPress={() => handleButtonPress('8')} />
        <Button color="#28282a" text="9" onPress={() => handleButtonPress('9')} />
        <Button color="orange" text="X" onPress={() => handleButtonPress('X')} />
        <Button color="#28282a" text="4" onPress={() => handleButtonPress('4')} />
        <Button color="#28282a" text="5" onPress={() => handleButtonPress('5')} />
        <Button color="#28282a" text="6" onPress={() => handleButtonPress('6')} />
        <Button color="orange" text="-" onPress={() => handleButtonPress('-')} />
        <Button color="#28282a" text="1" onPress={() => handleButtonPress('1')} />
        <Button color="#28282a" text="2" onPress={() => handleButtonPress('2')} />
        <Button color="#28282a" text="3" onPress={() => handleButtonPress('3')} />
        <Button color="orange" text="+" onPress={() => handleButtonPress('+')} />
        <Button color="#28282a" text="Rand" onPress={() => handleButtonPress('Rand')} />
        <Button color="#28282a" text="0" onPress={() => handleButtonPress('0')} />
        <Button color="#28282a" text="." onPress={() => handleButtonPress('.')} />
        <Button color="orange" text="=" onPress={() => handleButtonPress('=')} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  buttons: {
    backgroundColor: 'black',
    width: '100%',
    height: '65%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  resultDiv: {
    width: '100%',
    height: 90,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    color: 'white',
    fontSize: 60,
    marginRight: 33,
  },
  calcDiv: {
    width: '100%',
    height: 90,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calcText: {
    color: '#858587',
    fontSize: 40,
    marginRight: 33,
  },
});
