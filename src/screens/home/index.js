

import { ScrollView, Text, View } from "react-native";
import Card from "../../components/Card";


export default function Home() {
    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            style={{ backgroundColor: "rgb(24 24 27)" }}
        >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>

                    <View style={{ alignItems: "center", justifyContent: "center", borderWidth: 1 }}>
                        <Text style={{ color: "white", }}>16 Apr 2023</Text>
                        <Text style={{ color: "white", }}>Amsterdam, Netherlands</Text>
                    </View>
                    <View style={{ alignItems: "flex-start", margin: '10%', borderWidth: 1,  }}>
                        <Text style={{ color: "white", }}>28°</Text>
                        <Text style={{ color: "white", }}>Cloudy</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginTop: '20%', borderWidth: 1 }}>
                            <Text style={{ color: "white", }}>14.98 Km</Text>
                            <Text style={{ color: "white", }}>29.6°</Text>
                            <Text style={{ color: "white", }}>59%</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "flex-start", }}>
                        <Text style={{ fontWeight: "bold", color: "white", margin: 6 }}>AQI</Text>
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
                        <Text style={{ fontWeight: "bold", color: "white", margin: 6 }}>Today</Text>
                        <View style={{ flexDirection: "row", gap: 6 }}>
                            <Card />
                            <Card />
                            <Card />
                        </View>


                    </View>
            </View>
        </ScrollView>

    )
}