export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      (response) => {
        const lat = response.coords.latitude;
        const long = response.coords.longitude;

        const query = lat + "," + long;

        resolve(query);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
