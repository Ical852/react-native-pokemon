import React, {useMemo} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import {styles} from './styles';

interface DetailModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  onConfirm: () => void;
  isMine: boolean;
}
const DetailModal = (props: DetailModalProps) => {
  const {
    modalVisible,
    setModalVisible,
    nickname,
    setNickname,
    onConfirm,
    isMine,
  } = props;

  const disabled = useMemo(() => !nickname, [nickname]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={tw`flex-1 justify-center bg-black bg-opacity-50`}>
        <View style={[tw`p-5 bg-white rounded-lg`, styles.modalView]}>
          <Text style={[tw`mb-4 text-lg text-black`, styles.modalText]}>
            Enter nickname:
          </Text>
          <View style={[tw`w-full`]}>
            <TextInput
              style={[tw`border rounded p-2 mb-4 text-black`, styles.input]}
              onChangeText={e => setNickname(e)}
              value={nickname}
              placeholder="Type here ..."
              placeholderTextColor={'#EEEEEE'}
            />
          </View>
          <View style={[tw`flex-row justify-between`, styles.buttonContainer]}>
            <TouchableOpacity
              style={[tw`flex-1 mr-2 bg-red-400 p-3 rounded`]}
              onPress={() => setModalVisible(false)}>
              <Text style={tw`text-center text-white`}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={disabled}
              style={[
                tw`flex-1 ml-2 bg-${disabled ? 'gray' : 'cyan'}-${
                  disabled ? '300' : '500'
                } p-3 rounded`,
              ]}
              onPress={onConfirm}>
              <Text style={tw`text-center text-white`}>
                {isMine ? 'Rename' : 'Catch'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DetailModal;
