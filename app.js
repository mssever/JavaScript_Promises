'use strict';

/*
function watchTutorialCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingLiveStream = true;

  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingLiveStream) {
    callback("Thumbs up and Subscribe");
  }
}

watchTutorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
*/

let watching = new Promise((resolve, reject) => {
  let userWatchingLiveStream = Math.round(Math.random());
  if(userWatchingLiveStream) {
    resolve('Thumbs up and subscribe!');
  } else {
    reject('User left');
  }
});

watching.then(message => {
  console.log(message);
}).catch(message => {
  console.warn(message);
});
