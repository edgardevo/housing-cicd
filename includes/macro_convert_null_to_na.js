function macro_convert_na_to_null(field) {
    return `COALESCE(${field}, "NA")`;
}
module.exports = { macro_convert_na_to_null };