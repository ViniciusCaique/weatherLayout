

import { ScrollView, Text, View } from "react-native";


export default function Home() {
    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderWidth: 2, height: 600 }}>
                <View style={{ alignItems: "center", justifyContent: "center", borderWidth: 1 }}>
                    <Text>16 Apr 2023</Text>
                    <Text>Amsterdam, Netherlands</Text>
                </View>
                <View style={{ alignItems: "flex-start", margin: '10%', borderWidth: 1,  }}>
                    <Text>28°</Text>
                    <Text>Cloudy</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginTop: '20%', borderWidth: 1 }}>
                        <Text>14.98 Km</Text>
                        <Text>29.6°</Text>
                        <Text>59%</Text>
                    </View>
                </View>
                <View style={{ alignItems: "flex-start"}}>
                    <Text>AQI</Text>
                    <View style={{ }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderRadius: 16, borderColor: "darkgreen", backgroundColor: "darkgreen", padding: 12, width: 200 }}>
                            <Text style={{ color: "mediumspringgreen", fontWeight: "bold", fontSize: 26 }}>36</Text>
                            <View style={{ flexDirection: "row", borderWidth: 1, borderRadius: 8, borderColor: "green", backgroundColor: "green", padding: 6, paddingHorizontal: 12 }}>
                                <Text style={{ color: "white" }}>Good</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{  }}>
                    <Text>Today</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text>16°</Text>
                        <Text>1:00 am</Text>
                        <Text>16°</Text>
                        <Text>1:00 am</Text>
                        <Text>16°</Text>
                        <Text>1:00 am</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}