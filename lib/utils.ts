type GenerateRandomPositiveInt = (max?: number) => number;

export const generateRandomPositiveInt: GenerateRandomPositiveInt = (
  max = 10000,
) => {
  return Math.floor(Math.random() * max);
};

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (email) => emailRegexp.test(email);

const nameRegexp = /[a-zzéúíóáèùìòàõãñêûîôâëyüïöäA-ZÉÚÍÓÁÈÙÌÒÀÕÃÑÊÛÎÔÂËYÜÏÖÄ]* [a-zzéúíóáèùìòàõãñêûîôâëyüïöäA-ZÉÚÍÓÁÈÙÌÒÀÕÃÑÊÛÎÔÂËYÜÏÖÄ](.*)/;

export const validateName = (name) => nameRegexp.test(name);

const passwordRegexp = /dsdf/;

export const validatePassword = (password) => passwordRegexp.test(password);
