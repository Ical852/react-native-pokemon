import React from 'react';
import { Button, Modal, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
import { styles } from './styles';

interface DetailModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  onConfirm: () => void;
}
const DetailModal = (props: DetailModalProps) => {
  const {
    modalVisible,
    setModalVisible,
    nickname,
    setNickname,
    onConfirm,
  } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={[tw``, styles.modalView]}>
        <Text style={[tw``, styles.modalText]}>Enter nickname:</Text>
        <TextInput
          style={[tw``, styles.input]}
          onChangeText={(e) => setNickname(e)}
          value={nickname}
          placeholder="Type here"
        />
        <View style={[tw``, styles.buttonContainer]}>
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
          <Button title="OK" onPress={onConfirm} />
        </View>
      </View>
    </Modal>
  );
}

export default DetailModal;
