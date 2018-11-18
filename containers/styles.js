import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#3e1e60',
    padding: 10,
  },
  title: {
    paddingTop: 60,
    paddingLeft: 20,
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: '#fbf7ff',
  },
  smallTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: '#fbf7ff',
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fbf7ff',
  },
  explanation: {
    padding: 10,
    fontSize: 16,
    color: '#fbf7ff',
  },
  datePicker: {
    flex: 1,
    justifyContent: 'center'
  }
});
