
import { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, Pressable } from 'react-native';

let num = 0
export default function GuessNumber({ navigation }) {
    const [value, setVale] = useState('')

    useEffect(() => {
        reset()
    }, [])
    function reset() {
        setVale('')
        num = Math.round((Math.random() * 100))
    }
    function doGuess() {
        const valueNum = Number(value)
        // 构建一次字符串，用于后续的Alert调用
        const str = `${String(num)}, ${value}`;

        // 使用提取的常量来管理消息文本，便于本地化和维护
        const GUESS_TOO_BIG = '猜大了！';
        const GUESS_TOO_SMALL = '猜小了！';
        const GUESS_CORRECT = '猜对了！';

        if (valueNum > num) {
            Alert.alert(GUESS_TOO_BIG, str);
        } else if (valueNum < num) {
            Alert.alert(GUESS_TOO_SMALL, str);
        } else {
            Alert.alert(GUESS_CORRECT, str);
        }
    }
    function goOlympics() {
        navigation.navigate('OlympicsRank')
    }
    return (
        <View style={styles.area}>
            <Text style={styles.title}>请输入数字并点击按钮</Text>
            <TextInput
                style={styles.inputText}
                value={value}
                onChangeText={text => setVale(text)}
            />
            <Pressable onPress={doGuess}>
                <View style={styles.btn}>
                    <Text style={styles.text}>
                        猜
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={reset}>
                <View style={styles.btn}>
                    <Text style={styles.text}>
                        重制
                    </Text>
                </View>
            </Pressable>
            <Pressable onPress={goOlympics}>
                <View style={styles.btn}>
                    <Text style={styles.text}>
                        go
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        margin: 10,
        textAlign: 'center',
    },
    area: {
        padding: 20
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#ccc',
        height: 40,
        fontSize: 18,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    btn: {
        padding: 10,
        marginTop: 20,
        borderRadius: 6,
        backgroundColor: 'deepskyblue',
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 22,
    }
})