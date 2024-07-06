import avatar1 from "../data/avatars/1.jpeg";

export const avatarImgs = [
  avatar1,
];

const personNames = [
  "Shilpa Thota",
 
];

const tagNames = [
  "Technology",
  "Web Design",
  "Training",
  "Project"
];

const featuredImgs = [
  "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

export const imgHigtQualitys = [
  "https://images.pexels.com/photos/4352244/pexels-photo-4352244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const aTitles = [
  "Have 12 years of IT industry experience "
];

function _getTitleRd() {
  return aTitles[Math.floor(Math.random() * aTitles.length)];
}
function _getPersonNameRd() {
  return personNames[Math.floor(Math.random() * personNames.length)];
}

function _getImgRd() {
  return featuredImgs[Math.floor(Math.random() * featuredImgs.length)];
}

function _getImgHightQualityRd() {
  return imgHigtQualitys[Math.floor(Math.random() * imgHigtQualitys.length)];
}

function _getTagNameRd() {
  return tagNames[Math.floor(Math.random() * tagNames.length)];
}
function _getAvatarRd() {
  return avatarImgs[Math.floor(Math.random() * avatarImgs.length)];
}

export {
  _getImgRd,
  _getTagNameRd,
  _getAvatarRd,
  _getImgHightQualityRd,
  _getTitleRd,
  _getPersonNameRd,
};
