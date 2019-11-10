try {
    // 有壞事發生了，拋出一個錯誤
    throw {
        name: 'MyErrorType', // 自定義的錯誤類型
        message: 'oops',
        extra: 'This was rather embarrassing.',
        remedy: genericErrorHandler // 這應該處理錯誤
    };
} catch (e) {
    // 通知使用者
    alert(e.message);

    // 優雅地處理錯誤
    // 呼叫 genericErrorHandler
    e.remedy();
}
