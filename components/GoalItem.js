import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

function GoalItem(props) {
  function handleDeletePress() {
    Alert.alert(
      'Delete this!',
      'Are you sure you want to delete this goal?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', style: 'destructive', onPress: () => props.onDeleteItem(props.id) },
      ]
    );
  }

  return (
     <View style={styles.goalItem}>
        <Pressable android_ripple= {{color:'#dc143c'}} 
        onPress={handleDeletePress}>
        
            <Text style={styles.goalText}>{props.text}</Text>
        
        </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: '#ff9e8c'
  },

  goalText: {
    color: 'cd5c5c',
    fontWeight: 'bold',
    padding: 12,
  },
});
