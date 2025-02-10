import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  subHeader: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
    marginBottom: 16,
  },
  viewAllButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },

  listContainer: {
    maxHeight: height * 0.6,
  },
  rankText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rankImage: {
    width: 28,
    height: 36.75,
  },
  otherRank: {
    width: 30,
    textAlign: 'center',
  },
  name: {},
  time: {},
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 64,
  },
  myRankingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 64,
    marginBottom: 16,
  },
  myRankingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myRankingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myRankingText: {
    fontSize: 16,
  },
  myRankingRank: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rankChangeText: {
    fontSize: 16,
    color: '#8d51f0',
    backgroundColor: '#f7f0ff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginRight: 8,
    marginLeft: 5,
  },
  floatingButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  floatingButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#8647F0',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#8647F0',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 170,
    height: 52,
    justifyContent: 'center',
  },
  qrIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
