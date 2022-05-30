import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SingleItem} from '../../components/single-item';
import {TaskInputField} from '../../components/list-input';
import {homeStyles} from './styles';
import {useHome} from './hooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HomeScreen = () => {
  const {tasks, addTask, deleteTask, searchText, setSearchText} = useHome();
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.heading}>Shopping List</Text>
      <View style={homeStyles.inputContainer}>
        <TextInput
          style={homeStyles.inputField}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          placeholder={'Search...'}
          placeholderTextColor={'#fff'}
        />
        <TouchableOpacity onPress={() => handleAddTask(task)}>
          <View style={homeStyles.button}>
            <MaterialIcons name="search" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={homeStyles.scrollView}>
        {tasks
          .filter(name => name.match(new RegExp(searchText, 'i')))
          ?.map((task, index) => {
            return (
              <View key={index} style={homeStyles.taskContainer}>
                <SingleItem
                  index={index + 1}
                  task={task}
                  deleteTask={() => deleteTask(index)}
                />
              </View>
            );
          })}
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  );
};

export default HomeScreen;
