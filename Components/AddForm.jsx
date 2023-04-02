import * as React from 'react';
import { Modal, Portal, Text, Button, Provider, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
const AddForm = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const { open, setOpen } = props;
    const showModal = () => setOpen(true);
    const hideModal = () => {
        setTitle('');
        setDesc('');
        setOpen(false)
    };
    const containerStyle = {
        backgroundColor: 'white',
        padding: 20,
        margin: 0,
        animationIn: 'slideInLeft',
        animationOut: 'slideOutRight',
        marginHorizontal: 20,
        borderRadius: 10,
        // paddingVertical: 200,

    };

    return (
        <>
            <Portal>
                <Modal visible={open} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Text variant='titleLarge'>Create Form</Text>
                    <TextInput
                        label="Form Title"
                        value={title}
                        mode="outlined"
                        onChangeText={text => setTitle(text)}
                        style={styles.textInput}
                        activeOutlineColor="#1976D2"

                    // error={title.length < 3}
                    />
                    <TextInput
                        label="Form Description"
                        value={desc}
                        mode="outlined"
                        onChangeText={text => setDesc(text)}
                        style={styles.textInput}
                        activeOutlineColor="#1976D2"
                        multiline={true}
                    />
                    <View style={styles.btnContainer}>
                        <Button icon="cancel" mode='contained' buttonColor='#D32F2F' style={[styles.cancelBtn, styles.btn]} onPress={hideModal}>
                            Cancel
                        </Button>
                        <Button icon="check" mode='contained' buttonColor='#1976D2' style={[styles.createBtn, styles.btn]}
                            disabled={title.length < 3 || desc.length < 5}
                        >
                            Create
                        </Button>
                    </View>
                </Modal>
            </Portal>
            {/* <Button onPress={showModal}>
                Show
            </Button> */}
        </>
    );
};

export default AddForm;

const styles = StyleSheet.create({
    btnContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    textInput: {
        marginVertical: 10,
        // paddingVertical: 5,
    },
    cancelBtn: {

    },
    createBtn: {},
    btn: {
        borderRadius: 5,
        marginHorizontal: 5,
        marginTop: 10,
    },
})