import validator from "validator";

function sanitizeSql(input) {
    return input.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, (char) => {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\" + char;
            default:
                return char;
        }
    });
}

function sanitizeInput(input, type) {
    let sanitizedInput = input;

    switch (type) {
        case 'email':
            sanitizedInput = validator.normalizeEmail(input);
            break;
        case 'trim':
            sanitizedInput = validator.trim(input);
            break;
        case 'escape':
            sanitizedInput = validator.escape(input);
            break;
        case 'stripLow':
            sanitizedInput = validator.stripLow(input);
            break;
        case 'toBoolean':
            sanitizedInput = validator.toBoolean(input);
            break;
        case 'toInt':
            sanitizedInput = validator.toInt(input);
            break;
        case 'toFloat':
            sanitizedInput = validator.toFloat(input);
            break;
        case 'isNumeric':
            sanitizedInput = validator.isNumeric(input);
            break;
        case 'sql':
            sanitizedInput = sanitizeSql(input);
            break;
        case 'shell':
            sanitizedInput = sanitizedInput.replace(/[^\w\s]/g, '');
            break;
        default:
            throw new Error(`Invalid sanitize type: ${type}`);
    }

    return sanitizedInput;
}

export function sanitize(input, types) {
    let sanitizedInput = input;
    types.forEach((type) => {
        sanitizedInput = sanitizeInput(sanitizedInput, type);
    });
    return sanitizedInput;
}
