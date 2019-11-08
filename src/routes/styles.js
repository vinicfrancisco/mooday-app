import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navigationBar: {
    backgroundColor: "#fff",
    borderBottomWidth: 0,
    zIndex: 100,
    elevation: 0,
    paddingBottom: 10
  },

  navigationBarShadow: {
    backgroundColor: "#fff",
    borderBottomWidth: 0,
    zIndex: 100,
    elevation: 0,
    paddingBottom: 10
  },

  navigationBarTransparent: {
    backgroundColor: "#000",
    borderBottomWidth: 0,
    zIndex: 100,
    elevation: 0
  },

  tabBar: {
    borderTopWidth: 0,
    backgroundColor: "#fff",
    height: 68,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  }
});
