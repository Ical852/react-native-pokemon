import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create<any>({
  container: (color: string) => ({
    height: 130,
    width: Dimensions.get('window').width / 2 - 32,

    backgroundColor: color,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

    marginHorizontal: 8,
  }),
});
