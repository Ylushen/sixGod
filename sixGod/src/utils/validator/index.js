import {regexPassword, regexPhone} from './regex';

/**
 * 校验是否不为空
 * @param regex 校验参数
 * @param value 校验格式
 * @param key 校验的字段名
 * @param callback 回调函数，callback(new Error())
 * @returns {boolean}
 */
function validator(value, regex, key, callback) {
	if (validatorIsNull(value)) callback(new Error(key + '不能为空'));
	if (!regex.test(value)) {
		callback(new Error(key + '不合法'));
	} else {
		callback();
	}

	// 校验空值
	function validatorIsNull(val) {
		return val ? false : val !== 0;
	}
}

// 校验密码
function confirmPasswordRule(options, value, callback) {
	return validator(value, regexPassword, '密码', callback);
}

// 校验手机号
function confirmPhoneRule(options, value, callback) {
	return validator(value, regexPhone, '手机号', callback);
}

export default {
	confirmPasswordRule,
	confirmPhoneRule
};
