import React from 'react';
import {
    StyleProp,
    ViewStyle,
    Animated,
    StyleSheet,
    Platform,
    ScrollView,
    Text,
    SafeAreaView,
    I18nManager,
} from 'react-native';
import { AnimatedFAB } from 'react-native-paper';
import AddForm from '../Components/AddForm';

const Dashboard = ({
    animatedValue,
    visible,
    extended,
    label,
    animateFrom,
    style,
    iconMode,
}) => {
    const [isExtended, setIsExtended] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const isIOS = Platform.OS === 'ios';

    const onScroll = ({ nativeEvent }) => {
        const currentScrollPosition =
            Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

        setIsExtended(currentScrollPosition <= 0);
    };

    const fabStyle = { [animateFrom]: 16 };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView onScroll={onScroll}>
                {/* {[...new Array(100).keys()].map((_, i) => (
                    <Text key={_}>{i}</Text>
                ))} */}
                <Text>This is dashboard</Text>
            </ScrollView>
            <AnimatedFAB
                icon={'plus'}
                label={'New Form'}
                extended={isExtended}
                onPress={() => { setOpen(true); console.log('pressed') }}
                visible={visible}
                animateFrom={'right'}
                iconMode={'dynamic'}
                style={[styles.fabStyle, style, fabStyle]}
            />
            <AddForm open={open} setOpen={setOpen} />
        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    fabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
        // backgroundColor: 'aqya'
    },
});