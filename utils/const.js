export const GENRES = [
  { group: 2, type: 2, name: "adventure", classify: "movie" },
  { group: 2, type: 3, name: "comedy", classify: "movie" },
  { group: 2, type: 4, name: "romances", classify: "movie" },
  { group: 2, type: 5, name: "sci-fi", classify: "movie" },
  { group: 2, type: 6, name: "horror", classify: "movie" },
  { group: 2, type: 7, name: "drama", classify: "movie" },
  { group: 2, type: 8, name: "war", classify: "movie" },
  { group: 2, type: 9, name: "documentary", classify: "movie" },
  { group: 2, type: 10, name: "mystery", classify: "movie" },
  { group: 2, type: 11, name: "crime", classify: "movie" },
  { group: 2, type: 12, name: "animation", classify: "movie" },
  { group: 2, type: 13, name: "fantasy", classify: "movie" },
  // { group: 6, type: 34, name: "historical", classify: "movie" },

  { group: 15, type: 15, name: "chinese", classify: "tv show" },
  { group: 15, type: 16, name: "hongkong", classify: "tv show" },
  { group: 15, type: 17, name: "taiwanese", classify: "tv show" },
  { group: 15, type: 18, name: "american", classify: "tv show" },
  { group: 15, type: 19, name: "korean", classify: "tv show" },
  { group: 15, type: 20, name: "japanese", classify: "tv show" },
  // { group: 13, type: 25, name: "others", classify: "tv show" },

  { group: 22, type: 22, name: "chinese reality", classify: "reality show" },
  {
    group: 22,
    type: 23,
    name: "japan korea reality",
    classify: "reality show",
  },
  {
    group: 22,
    type: 24,
    name: "hongkong taiwan reality",
    classify: "reality show",
  },
  { group: 22, type: 25, name: "english reality", classify: "reality show" },

  { group: 27, type: 28, name: "japanese", classify: "anime" },
  { group: 27, type: 27, name: "chinese", classify: "anime" },
  { group: 27, type: 29, name: "english", classify: "anime" },
  // { group: 31, type: 33, name: "other", classify: "anime" },
];

export const MAJORS = [
  GENRES.find((item) => item.classify == "movie"),
  GENRES.find((item) => item.classify == "tv show"),
  GENRES.find((item) => item.classify == "reality show"),
  GENRES.find((item) => item.classify == "anime"),
];

// this is the genre for api.ylzy1.com
// export const genres = [
//   { group: 6, type: 6, name: "adventure", classify: "movie" },
//   { group: 6, type: 7, name: "romances", classify: "movie" },
//   { group: 6, type: 8, name: "sci-fi", classify: "movie" },
//   { group: 6, type: 9, name: "horror", classify: "movie" },
//   { group: 6, type: 10, name: "crime", classify: "movie" },
//   { group: 6, type: 11, name: "war", classify: "movie" },
//   { group: 6, type: 20, name: "documentary", classify: "movie" },
//   { group: 6, type: 21, name: "drama", classify: "movie" },
//   { group: 6, type: 23, name: "comedy", classify: "movie" },
//   { group: 6, type: 34, name: "historical", classify: "movie" },
//   { group: 6, type: 35, name: "fantasy", classify: "movie" },
//   { group: 6, type: 36, name: "animation", classify: "movie" },
//   { group: 6, type: 37, name: "mystery", classify: "movie" },

//   { group: 13, type: 13, name: "chinese", classify: "tv show" },
//   { group: 13, type: 14, name: "hongkong", classify: "tv show" },
//   { group: 13, type: 15, name: "american", classify: "tv show" },
//   { group: 13, type: 16, name: "korean", classify: "tv show" },
//   { group: 13, type: 22, name: "japanese", classify: "tv show" },
//   { group: 13, type: 24, name: "taiwanese", classify: "tv show" },
//   { group: 13, type: 25, name: "others", classify: "tv show" },

//   { group: 26, type: 26, name: "chinese reality", classify: "reality show" },
//   {
//     group: 26,
//     type: 27,
//     name: "japan korea reality",
//     classify: "reality show",
//   },
//   {
//     group: 26,
//     type: 28,
//     name: "hongkong taiwan reality",
//     classify: "reality show",
//   },
//   { group: 26, type: 29, name: "english reality", classify: "reality show" },

//   { group: 31, type: 31, name: "japanese", classify: "anime" },
//   { group: 31, type: 30, name: "chinese", classify: "anime" },
//   { group: 31, type: 32, name: "english", classify: "anime" },
//   { group: 31, type: 33, name: "other", classify: "anime" },
// ];
