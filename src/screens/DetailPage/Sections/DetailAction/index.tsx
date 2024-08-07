import React from 'react';
import {View} from 'react-native';
import tw from 'twrnc';
import {MainButton} from '../../../../components';

interface DetailActionProps {
  dtl: any;
}
const DetailAction = (props: DetailActionProps) => {
  const {dtl} = props;

  return (
    <View style={[tw`justify-center mx-5 mt-5 flex-row gap-2`]}>
      <MainButton
        disabled={!dtl.isMine && dtl.isCaught}
        loading={dtl.loading}
        bg="#4A4A4A"
        title={dtl.isMine ? 'Release' : dtl.isCaught ? 'Caught' : 'Catch'}
        onPress={() => dtl.onBtnClick()}
      />
      {dtl.isMine && (
        <MainButton
          disabled={!dtl.isMine && dtl.isCaught}
          loading={dtl.loading}
          bg="#4A4A4A"
          title={'Rename'}
          onPress={() => dtl.onRename()}
        />
      )}
    </View>
  );
};

export default DetailAction;
