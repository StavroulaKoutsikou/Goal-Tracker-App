import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoal() {
    if (enteredGoalText.trim().length === 0) return;
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal!"
          placeholderTextColor="white"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="#cd5c5c" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#4b0082" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a5acd',
    padding: 16,
  },
  textInput: {
    borderWidth: 2.5,
    borderColor: '#fa8072',
    backgroundColor: '#fa8072',
    width: '100%',
    padding: 20,
    borderRadius: 6,
    color: 'white',
    fontWeight: 'italics',
    fontSize: 16,
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '45%',
    marginBottom: 50
  },
  image:{
    width: 250,
    height: 250,
    marginBottom: 60
  }
});
