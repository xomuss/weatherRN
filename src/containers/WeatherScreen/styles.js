import {StyleSheet} from 'react-native';
import {combineReducers} from 'redux';

const styles = StyleSheet.create({
  searchBox: {
    marginBottom: 75,
  },

  searchBar: {
    paddingLeft: 25,
    marginBottom: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: 'green',
    fontSize: 20,
  },

  searchBtn: {
    borderRadius: 16,
  },

  locationBoxText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
  },

  locationBoxDate: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  weatherBoxTemp: {
    position: 'relative',
    // flex: 1,
    marginVertical: 30,
    marginHorizontal: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,

    paddingVertical: 15,
    paddingHorizontal: 25,

    color: '#fff',
    fontSize: 102,
    fontWeight: '900',

    // text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
    textAlign: 'center',
    // box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
  },

  weatherBoxMain: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'center',
    // text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  },

  weatherBoxDesc: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;

//* {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
//
// body {
//   font-family: "montseratt", sans-serif;
// }
//
// .app {
//   background-image: url("./assets/cold-bg.jpg");
//   background-size: cover;
//   background-position: bottom;
//   transition: 0.4s ease;
// }
//
// .app.warm {
//   background-image: url("./assets/warm-bg.jpg");
// }
//
// main {
//   min-height: 100vh;
//   background-image: linear-gradient(
//     to bottom,
//     rgba(0, 0, 0, 0.2),
//     rgba(0, 0, 0, 0.75)
//   );
//   padding: 25px;
// }
//
// .search-box {
//   width: 100%;
//   margin: 0 0 75px;
// }
//
// .search-box .search-bar {
//   display: block;
//   width: 100%;
//   padding: 15px;
//
//   appearance: none;
//   background: none;
//   border: none;
//   outline: none;
//
//   background-color: rgba(255, 255, 255, 0.5);
//   border-radius: 0px 0px 16px 16px;
//   margin-top: -25px;
//
//   box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
//
//   color: #313131;
//   font-size: 20px;
//
//   transition: 0.4s ease;
// }
//
// .search-box .search-bar:focus {
//   background-color: rgba(255, 255, 255, 0.75);
// }
//
// .location-box .location {
//   color: #fff;
//   font-size: 32px;
//   font-weight: 500;
//   text-align: center;
//   text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
// }
//
// .location-box .date {
//   color: #fff;
//   font-size: 20px;
//   font-weight: 300;
//   font-style: italic;
//   text-align: center;
//   text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
// }
//
// .weather-box {
//   text-align: center;
// }
//
// .weather-box .temp {
//   position: relative;
//   display: inline-block;
//   margin: 30px auto;
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 16px;
//
//   padding: 15px 25px;
//
//   color: #fff;
//   font-size: 102px;
//   font-weight: 900;
//
//   text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
//   text-align: center;
//   box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
// }
//
// .weather-box .weather {
//   color: #fff;
//   font-size: 48px;
//   font-weight: 700;
//   text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
// }
//
// .description {
//   color: #fff;
//   font-size: 18px;
// }
