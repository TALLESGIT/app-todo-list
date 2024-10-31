import { StyleSheet } from "react-native";
import { theme } from "../../theme";


export const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    height: 64,
    backgroundColor: theme.colors['gray-500'],
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: theme.colors['gray-400'],
  },

  textContainer: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8
  },

  TextCreated: {
    color: theme.colors['gray-100'],
    fontSize: theme.sizes.md,
    textDecorationLine: 'none',
  },

  textDone: {
    color: theme.colors['gray-300'],
    fontSize: theme.sizes.md,
    textDecorationLine: 'line-through',
  },



















})