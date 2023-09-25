

import { Text, View } from "react-native";


export default function Card() {
    return(
        <View style={{ borderWidth: 1, borderColor: "rgb(39 39 42)", alignItems: "center", backgroundColor: "rgb(39 39 42)", padding: 12, paddingVertical: 24, borderRadius: 12 }}>
            <Text style={{ color: "white" }}>16°</Text>
            <Text style={{ color: "white" }}>1:00 am</Text>
        </View>
    )
}