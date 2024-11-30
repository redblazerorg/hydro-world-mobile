import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: -2,
    },

    bubbleContainer: {
        height: 60,
        width: 60,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 50,
        position: absolute,
        top: '10%',
        left: '10%',
    },

    bubble: {
        height: 10,
        width: 10,
        borderRadius: 50,
        background: 'rgba(255, 255, 255, 0.5)',
        position: absolute,
        top: '20%',
        right: '20%',
    },
});

export default styles;