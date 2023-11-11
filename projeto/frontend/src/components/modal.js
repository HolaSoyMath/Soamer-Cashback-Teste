import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Image } from "react-native";
import LabelComponent from "./text/labelModal";
import ButtonFilter from "./button/buttonFilter";
import SelectModel from "./select/selectCar";
import SelectAno from "./select/selectAno";
import ButtonClose from "./button/buttonClose";
import ButtonApply from "./button/buttonApply";

const { height } = Dimensions.get("window");

const Modal = ({ show, close }) => {
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height),
    });

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: false }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: false }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true }),
        ]).start();
    };

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: false }),
            Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: false }),
        ]).start();
    };

    useEffect(() => {
        if (show) {
            openModal();
        } else {
            closeModal();
        }
    }, [show]);

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    opacity: state.opacity,
                    transform: [{ translateY: state.container }],
                },
            ]}
        >
            <Animated.View
                style={[
                    styles.modal,
                    {
                        transform: [{ translateY: state.modal }],
                    },
                ]}
            >
                <View style={styles.indicator} />

                <View style={styles.container2}>
                    <Text style={styles.title}>Filtro</Text>

                    <View>
                        <LabelComponent title="Tipo da ponteira" />
                        <View style={styles.btnFilter}>
                            <ButtonFilter title="Ponteira única" onPress={() => console.log("Clicked")} />
                            <ButtonFilter title="Ponteira dupla" onPress={() => console.log("Clicked")} />
                        </View>
                    </View>

                    <View>
                        <LabelComponent title="Cor da ponteira" />
                        <View style={styles.btnFilter}>
                            <ButtonFilter title="Black piano" onPress={() => console.log("Clicked")} style={styles.customButton} />
                            <ButtonFilter title="Polida" onPress={() => console.log("Clicked")} style={styles.customButton} />
                        </View>
                    </View>
                    <View style={styles.selectCarro}>
                        <View>
                            <LabelComponent title="Modelo do carro" />
                            <SelectModel />
                        </View>
                        <View>
                            <LabelComponent title="Ano" />
                            <SelectAno />
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <ButtonApply title="Aplicar filtro" onPress={() => console.log("Clicked")} />
                        <ButtonClose onPress={close} />
                    </View>
                </View>
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
    },

    modal: {
        bottom: 0,
        position: "absolute",
        height: "65%",
        backgroundColor: "#FFFF",
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    indicator: {
        width: 50,
        height: 5,
        backgroundColor: "#ccc",
        borderRadius: 50,
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 30,
    },

    title: {
        fontWeight: "600",
        fontSize: 21,
        textAlign: "center",
        alignItems: "center",
    },

    btnFilter: {
        flexDirection: "row",
        gap: 15,
    },

    container2: {
        flex: 1,
        alignItems: "center",
    },

    selectCarro: {
        flexDirection: "row",
        gap: 15,
    },

    buttons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 13,
        marginTop: 50,
    },
});

export default Modal;
