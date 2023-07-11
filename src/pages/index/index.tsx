import { useState } from "react";
import { View, PickerView, PickerViewColumn } from "@tarojs/components";

export default function Index() {
  const [months, setMonths] = useState(["1", "2"]);
  return (
    <View>
      <PickerView
        indicatorStyle="height: 50px;"
        style="width: 100%; height: 300px;"
        onChange={(event) => {
          const { value } = event.detail;
          if (value[0] === 1) {
            setMonths(["1", "2", "3", "4", "5"]);
          }
        }}
      >
        <PickerViewColumn>
          {["2022", "2022"].map((item) => (
            <View key={item}>{item}年</View>
          ))}
        </PickerViewColumn>
        <PickerViewColumn>
          {months.map((item) => (
            <View key={item}>{item}月</View>
          ))}
        </PickerViewColumn>
      </PickerView>
    </View>
  );
}
