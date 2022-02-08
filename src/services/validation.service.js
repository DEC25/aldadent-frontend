const validation = {
    email: /[a-zA-Z-0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/,
    letters: /[a-zA-Z]+/,
    lettersNumbers: /[a-zA-Z0-9]+/,
    numbers: /[0-9]+/
}

export const emailForm = (e) => validation.email.test(e.target.value)
export const onlyNumbers = (e) => validation.numbers.test(e.target.value)
export const onlyLetters = (e) => validation.letters.test(e.target.value)
export const onlyLettersNumbers = (e) => validation.lettersNumbers.test(e.target.value)