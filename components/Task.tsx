import * as React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

type TaskProps = {
  text: string;
};

export default function Task(props: TaskProps) {
  return (
    <View
      style={tw`bg-white flex-row justify-between items-center rounded-lg p-4`}
    >
      <View style={tw`flex-row items-center`}>
        <View style={tw`bg-blue-300 w-6 h-6 rounded-md mr-3`} />
        <Text>{props.text}</Text>
      </View>
      <View style={tw`border border-blue-600 w-4 h-4 rounded-full`} />
    </View>
  );
}
