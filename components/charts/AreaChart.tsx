import { LineChart } from "react-native-gifted-charts";
import { View } from "react-native";

const AreaChart = () => {
  const lineData = [
    { value: 0 },
    { value: 10 },
    { value: 8 },
    { value: 58 },
    { value: 56 },
    { value: 78 },
    { value: 74 },
    { value: 98 },
  ];
  const lineData2 = [
    { value: 0 },
    { value: 20 },
    { value: 18 },
    { value: 40 },
    { value: 36 },
    { value: 60 },
    { value: 54 },
    { value: 85 },
  ];
  return (
    <View>
      <LineChart
        areaChart
        curved
        isAnimated
        animationDuration={1200}
        startOpacity={1}
        endOpacity={0.3}
        data={lineData}
        data2={lineData2}
        height={250}
        showVerticalLines
        spacing={44}
        initialSpacing={0}
        color1="skyblue"
        color2="orange"
        textColor1="green"
        hideDataPoints
        yAxisLabelTexts={["0", "20", "40", "60", "80", "100"]}
        xAxisLabelTexts={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
        dataPointsColor1="blue"
        dataPointsColor2="red"
        startFillColor1="skyblue"
        startFillColor2="orange"
      />
    </View>
  );
};

export default AreaChart;
