// Exercise3A.js
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Exercise3A = () => {
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
        flexDirection: "row",
        backgroundColor: "#F5fcff",
        borderColor: "#0099AA",
        borderWidth: 5,
    },
    child: {
        borderWidth: 2,
        fontSize: 24,
        flex: 1,
    },
    boxText: {
        textAlign: "center",
        fontSize: 24,
    },
});

export default Exercise3A;
