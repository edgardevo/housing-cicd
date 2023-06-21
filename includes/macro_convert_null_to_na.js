function macro_convert_null_to_na(field) {
    return `COALESCE(${field}, "NA")`;
}
module.exports = { macro_convert_null_to_na };