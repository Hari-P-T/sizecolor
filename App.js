import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const colors = ['black', 'blue', 'green', 'red', 'purple'];
  const fontSizes = [16, 20, 24, 28, 32];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentFontSizeIndex, setCurrentFontSizeIndex] = useState(0);

  const changeColor = () => {
    const newIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(newIndex);
  };

  const changeFontSize = () => {
    const newIndex = (currentFontSizeIndex + 1) % fontSizes.length;
    setCurrentFontSizeIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: colors[currentColorIndex], fontSize: fontSizes[currentFontSizeIndex] }}>
        Hello World
      </Text>
      <Button title="Change Color" onPress={changeColor} />
      <Button title="Change Font Size" onPress={changeFontSize} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
