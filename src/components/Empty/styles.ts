import { StyleSheet } from "react-native";
import { theme } from "../../theme";


export const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingTop: 48,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopColor: theme.colors['gray-500'],
    borderWidth: 1,
    borderEndColor: theme.colors['gray-600'],
    borderStartColor: theme.colors['gray-600'],
    borderBottomColor: theme.colors['gray-600'],
  },

  image: {
    marginBottom: 16
  },

  textBold: {
    color: theme.colors['gray-300'],
    fontFamily: theme.font_family.bold,
    fontSize: theme.sizes.sm,
  },

  textRegular: {
    fontFamily: theme.font_family.regular,  
  },
  











})