import { StyleSheet } from "react-native";
import { theme } from "../../theme";


export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors['gray-700'],
    width: '100%',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },

  form: {
    position: 'absolute',
    bottom: -54 / 2,
    height: 54,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 54,
    width: '75%',
    backgroundColor: theme.colors['gray-500'],
    borderRadius: 6,
    marginRight: 4,
    color: theme.colors['gray-100'],
    fontSize: theme.sizes.md,
    borderColor: theme.colors['gray-700'],
    borderWidth: 1,
    padding: 16,
  },

  inputBorder: {
    borderColor: theme.brand.purple
  },

  button: {
    height: 54,
    width: 54,
    backgroundColor: theme.brand.blue_dark,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  


















})