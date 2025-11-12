// Exercise3A.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Exercise3B = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: "powderblue" }]}>
                <Text style={styles.boxText}>Child One</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "skyblue" }]}>
                <Text style={styles.boxText}>Child Two</Text>
            </View>

            <View style={[styles.child, { backgroundColor: "steelblue" }]}>
                <Text style={styles.boxText}>Child Three</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F5fcff",
        borderColor: "#0099AA",
        borderWidth: 5,
    },
    child: {
        flex: 1,
        borderWidth: 2,
        height: 200,
    },
    boxText: {
        textAlign: "center",
        fontSize: 24,
    },
});

export default Exercise3B;
