const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nums = '0123456789'
const symbols = '!@#$%*_-+='

const createPassword = (length = 8, hashNumbers = true, hashSymbols = true) => {
  let chars = alpha
  hashNumbers ? (chars += nums) : ''
  hashSymbols ? (chars += symbols) : ''

  return generatePassword(length, chars)
}


const generatePassword = (length, chars) => {
  let password = ''
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

module.exports = createPassword