// Exercise4.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: "skyblue" }]}>
                <Text>Square 1</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "mediumseagreen" }]}>
                <Text>Square 2</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "lightcoral" }]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: "whitesmoke",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    child: {
        width: 80,
        height: 80,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Exercise4;
