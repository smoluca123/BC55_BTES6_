import { $a, $all } from '../shortEle.js';
export const checkEmpty = (value, message, idNoti) => {
  if (!value) {
    $a(idNoti).innerHTML = message;
    $a(idNoti).style.display = 'block';
    return false;
  }
  $a(idNoti).innerHTML = '';
  $a(idNoti).style.display = 'none';
  return true;
};

export const checkNumber = (value, message, idNoti) => {
  if (value) {
    const regex = /^[0-9]+$/;
    if (!regex.test(value)) {
      $a(idNoti).innerHTML = message;
      $a(idNoti).style.display = 'block';
      return false;
    }
    $a(idNoti).innerHTML = '';
    $a(idNoti).style.display = 'none';
    return true;
  }
  return false;
};

export const checkSelected = (selectedIndex, message, idNoti) => {
  if (selectedIndex === 0) {
    $a(idNoti).innerHTML = message;
    $a(idNoti).style.display = 'block';
    return false;
  }
  $a(idNoti).innerHTML = '';
  $a(idNoti).style.display = 'none';
  return true;
};

export const checkEmail = (value, message, idNoti) => {
  if (value) {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(value)) {
      $a(idNoti).innerHTML = message;
      $a(idNoti).style.display = 'block';
      return false;
    }
    $a(idNoti).innerHTML = '';
    $a(idNoti).style.display = 'none';
    return true;
  }
  return false;
};
