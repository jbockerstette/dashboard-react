const RANDOM_HASH = 'random_hash';

export default function getRandomHash() {
  return Math.random()
    .toString(36)
    .substr(2);
}

export function getRandomHashFromLocalStorage() {
  let randomHash = null;
  if (localStorage.getItem(RANDOM_HASH)) {
    randomHash = localStorage.getItem(RANDOM_HASH);
  } else {
    randomHash = getRandomHash();
    localStorage.setItem(RANDOM_HASH, randomHash);
  }
  return randomHash;
}

export function getUserFromLocalStorage() {
  let user = null;
  const randomHash = getRandomHashFromLocalStorage();
  if (localStorage.getItem(randomHash)) {
    user = JSON.parse(localStorage.getItem(randomHash));
  }
  return user;
}

export function setUserToLocalStorage(user) {
  const randomHash = getRandomHashFromLocalStorage();
  localStorage.setItem(randomHash, JSON.stringify(user));
}
