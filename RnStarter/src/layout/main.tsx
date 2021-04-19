/**
 * Application layout component (example starting point).
 *
 * @module @xcmats/native-app
 * @license MIT
 * @copyright Mat. 2021-present
 */




import type { FC } from "react";
import React, {
    useEffect,
    useState,
} from "react";
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from "react-native";
import { useSelector } from "react-redux";
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import NaiveGreeter from "../native/naive-greeter";
import { getTick } from "../app/selectors";
import { useMemory } from "../init";




/**
 * ...
 */
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
    },
    highlight: {
        fontWeight: "700",
    },
});




/**
 * ...
 */
const Section: FC<{
    title: string;
    onPress?: () => void,
}> = ({ children, title, onPress }) => {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}
                onPress={onPress}
            >
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}
            >
                {children}
            </Text>
        </View>
    );
};




/**
 * ...
 */
const Main: FC = () => {
    const isDarkMode = useColorScheme() === "dark";
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const { act, fx } = useMemory();
    const tick = useSelector(getTick);

    const [greetResp, setGreetResp] = useState("No greetings...");
    const names = ["Bob", "Alice", "Tom", "Mary", "Ed", "Jane"];
    const [nameIndex, setNameIndex] = useState(0);

    useEffect(() => {
        fx.app.setReady(true);
        return () => {
            fx.app.setReady(false);
        };
    }, []);

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={
                    isDarkMode ? "light-content" : "dark-content"
                }
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
            >
                <Header />
                <View
                    style={{
                        backgroundColor:
                            isDarkMode ? Colors.black : Colors.white,
                    }}
                >
                    <Section
                        title="State management (touch me)"
                        onPress={ act.app.PING }
                    >
                        Ticks: { tick }.
                    </Section>
                    <Section title="Native interop">
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Button
                                title="Spawn"
                                color="#007799"
                                onPress={async () => {
                                    setGreetResp(
                                        await NaiveGreeter.greet(
                                            names[nameIndex],
                                        ),
                                    );
                                    setNameIndex((nameIndex+1) % names.length);
                                }}
                            />
                            <Text
                                style={{
                                    color: "#0099AA",
                                    margin: 10,
                                }}
                            >
                                {greetResp}
                            </Text>
                        </View>
                    </Section>
                    <Section title="Debug">
                        <ReloadInstructions />{" "}<DebugInstructions />
                    </Section>
                    <LearnMoreLinks />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};




export default Main;
