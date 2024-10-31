import { StyleSheet } from "react-native";
import { theme } from "../theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors['gray-600'],
  },

  tasksContainer: {
    flex: 1,
    marginTop: 55,
    paddingHorizontal: 24,
  },

  tasksCreated: {
    color: theme.brand.blue,
    fontSize: theme.sizes.md,
    fontFamily: theme.font_family.bold,
  },

  tasksDone: {
    color: theme.brand.purple,
    fontSize: theme.sizes.md,
    fontFamily: theme.font_family.bold,
  },

  info: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,  
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  CounterContainer: {
    backgroundColor: theme.colors["gray-500"],
    width: 25,
    height: 19,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  CouterText: {
    color: theme.colors['gray-200'],
    fontSize: theme.sizes.sm,
    fontFamily: theme.font_family.bold,
  },

  couterText: {
    color: theme.colors['gray-200'],
    fontSize: theme.sizes.sm,
    fontFamily: theme.font_family.bold,
  }














})