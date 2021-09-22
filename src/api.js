import axios from 'axios';
import NProgress from 'nprogress';
import {mockData} from './mock-data'

// This function takes an events array, then uses map to create a new array with only locations. It will also remove all duplicates by creating another new array using the spread operator and spreading a Set. The Set will remove all duplicates from the array.
export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

export const getAccessToken = async() => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken)); //access token check

  if(!accessToken || tokenCheck.error){ //no access token found
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code"); //authorization code
    if(!code){ //no authorization code found
      const results = await axios.get( //redirect to Google authorization screen to get the autorization code
        "https://qeobgl0ka7.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url"
      );
      console.log('upon loading page 1');
      const {authUrl} = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code); //get access token from authorization code
  }
  return accessToken;
}

const checkToken = async(accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  ).then((res) => res.json()).catch((error) => error.json());
  return result;
};

const getToken = async(code) => { //from authorization code
  const encodeCode = encodeURIComponent(code);
  const {access_token} = await fetch(
    'https://qeobgl0ka7.execute-api.us-east-2.amazonaws.com/dev/api/token' + '/' + encodeCode
  ).then((res) => {
    return res.json();
  }).catch((error) => error);
  access_token && localStorage.setItem("access_token", access_token);
  return access_token;
};

export const getEvents = async() => {
  NProgress.start();
  if(window.location.href.startsWith('http://localhost')){
    NProgress.done();
    return mockData;
  }

  const token = await getAccessToken();
  if(token){
    removeQuery();
    const url = 'https://qeobgl0ka7.execute-api.us-east-2.amazonaws.com/dev/api/get-events' + '/' + token;
    const result = await axios.get(url);
    if(result.data){
      var locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
    console.log('upon loading page 2');
    return result.data.events.slice(0, 10);
    //how to track eventCount 
  }
};

const removeQuery = () => {
  if(window.history.pushState && window.location.pathname){ //add an entry to the browser's session history stack
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl); //history.pushState(state, title, [url])
  }else{
    newurl = window.location.protocol + 
    "//" + 
    window.location.host;
    window.history.pushState("", "", newurl);
  }
};