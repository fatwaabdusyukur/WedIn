import validator from 'validator';

const validationRules = {
  required: (input) => !validator.isEmpty(input),
  email: (input) => validator.isEmail(input, { allow_underscores: true }),
  min: (input, pattern) => input.length >= parseInt(pattern),
  max: (input, pattern) => input.length <= parseInt(pattern),
  strong: (input) => validator.isStrongPassword(input),
  match: (input, pattern, fieldName) => input === pattern,
};

function validateInput(input, rule) {
  const [ruleName, pattern] = rule.includes('=') ? rule.split('=') : [rule, null];
  const [patternValue, fieldName] = pattern?.includes('|') ? pattern?.split('|') : [pattern, null];

  if (!validationRules[ruleName]) {
    throw new Error(`Invalid rule: ${ruleName}`);
  }

  const isValid = validationRules[ruleName](input, patternValue, fieldName);

  if (!isValid) {
    switch (ruleName) {
      case 'required':
        return `cannot be empty!`;
      case 'email':
        return `must be in email format!`;
      case 'min':
        return `must be greater than or equal to ${patternValue} characters!`;
      case 'max':
        return `must be less than or equal to ${patternValue} characters!`;
      case 'match':
        return `must be the same as field ${fieldName}`;
      case 'strong':
        return `must be a strong password, with minimum criteria consisting of 1 uppercase, 1 symbol and a minimum number of 8 characters!`
      default:
        return `Invalid input for rule ${ruleName}!`;
    }
  }

  return null;
}

export function validate(input, rules, fieldName) {
  let isValid = { status: true, message: '' };

  for (let index = 0; index < rules.length; index++) {
    const errorMessage = validateInput(input, rules[index]);
    if (errorMessage) {
      isValid = { status: false, message: `The ${fieldName} field ${errorMessage}` };
      break;
    }
  }

  return isValid;
}