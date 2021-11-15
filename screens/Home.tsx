import * as React from 'react'
import tw from 'twrnc'
import {
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import Task from '../components/Task'

export default function Home() {
  const [task, setTask] = React.useState<string>('')
  const [taskItems, setTaskItems] = React.useState<string[]>([])

  const handleAddTask = () => {
    Keyboard.dismiss() // disappering physical keyboard when added new task

    setTaskItems([...taskItems, task])
    setTask('')
  }

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)

    setTaskItems(itemsCopy)
  }
  return (
    <View style={tw`flex-1`}>
      <Text style={tw`font-bold text-2xl pt-16`}>Today's Tasks</Text>
      <View style={tw`flex-1 justify-between`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          style={tw`mt-5`}
        >
          {taskItems.length ? (
            taskItems.map((item, index) => (
              <Pressable key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </Pressable>
            ))
          ) : (
            <View style={tw`bg-red-50 w-auto p-4 rounded`}>
              <Text>No tasks are available!</Text>
            </View>
          )}
        </ScrollView>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={tw`bg-[#E8EAED] flex-row justify-center items-center pb-3`}
        >
          <TextInput
            style={tw`bg-white w-3/4 h-12 rounded-full px-4`}
            placeholder="Write a task"
            onChangeText={text => setTask(text)}
            value={task}
          />
          <Pressable onPress={() => handleAddTask()}>
            <View style={tw`bg-white w-12 h-12 rounded-full ml-3`}>
              <Text style={tw`text-center text-3xl m-auto`}>+</Text>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}
