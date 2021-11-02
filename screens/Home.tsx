import * as React from "react";
import tw from "twrnc";
import { View, Text, TextInput } from "react-native";

import Task from "../components/Task";

export default function Home() {
  return (
    <View style={tw`flex-1`}>
      <Text style={tw`font-bold text-2xl pt-16`}>Today's Tasks</Text>
      <View style={tw`mt-5`}>
        <Task text="Task 1" />
      </View>

      <View
        style={tw`absolute bottom-0 inset-x-0 flex-row justify-center items-center`}
      >
        <TextInput
          style={tw`bg-white w-3/4 h-12 rounded-full px-4`}
          placeholder="Write a task"
        />
        <View style={tw`bg-white w-12 h-12 rounded-full ml-3`}>
          <Text style={tw`text-center text-3xl m-auto`}>+</Text>
        </View>
      </View>
    </View>
  );
}
