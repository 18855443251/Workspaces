import JSEncrypt from 'jsencrypt'
/**
 * 使用RSA公钥加密文本
 * @param {string} plainText - 待加密的明文
 * @param {string} [publicKey] - PEM格式的公钥字符串，默认为系统公钥
 * @returns {string|false} 加密后的Base64编码字符串，加密失败时返回false
 * @throws {Error} 当输入参数类型不正确时抛出错误
 */

export const encryptWithRSAPublicKey = (
    plainText,
    publicKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDz7gif39htjMP7RmEqRJm//BCETHAeJDbOd+cYTj6otE0U98apEgLOaMZ49houwM2sfEOZFBHWbNKJGAJ8iBXn+OqVn4mMjnkP3tElgtk54ztwsAjzweYPrfjQqR4dG/S0h02MmYPG7MXrCEG20hXLojItidBRIxZ1ykhcOWMIUwIDAQAB`
) => {
    // 参数验证
    if (typeof plainText !== 'string') {
        throw new Error('输入类型必须是字符串');
    }

    if (typeof publicKey !== 'string') {
        throw new Error('输入类型必须是字符串');
    }

    if (!plainText) {
        return false;
    }

    try {
        const encryptor = new JSEncrypt();
        encryptor.setPublicKey(publicKey);
        const encrypted = encryptor.encrypt(plainText);
        if (encrypted) {
            const encryptedBytes = atob(encrypted)
            const hexString = byteArrayToHexString(encryptedBytes)
            return hexString
        }
        if (encrypted === false) {
            console.error('加密失败');
            return false;
        }
    } catch (error) {
        console.error('Error during RSA encryption:', error);
        return false;
    }
};
function byteArrayToHexString(byteArray) {
    let hex = ''
    for (let i = 0; i < byteArray.length; i++) {
        const byte = byteArray.charCodeAt(i).toString(16)
        hex += byte.length === 1 ? '0' + byte : byte
    }
    return hex.toUpperCase()
}