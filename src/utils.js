export const getImageUrl = (path) => {
  return `/assets/${path}`;
};

// I know something about below code and then change that to above code

// export const getImageUrl = (path) => {
//   return new URL(`/assets/${path}`, import.meta.url).href;
// };
