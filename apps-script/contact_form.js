function doPost(e) {
    const SECRET_KEY = "SECRET_KEY";
    const SCORE_THRESHOLD = 0.5;

    const data = JSON.parse(e.postData.contents);

    // --- reCAPTCHA verification ---
    const verify = UrlFetchApp.fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "post",
        payload: {
            secret: SECRET_KEY,
            response: data.recaptcha_token,
        }
    });

    const captchaResult = JSON.parse(verify.getContentText());

    if (!captchaResult.success || captchaResult.score < SCORE_THRESHOLD) {
        return ContentService
            .createTextOutput(JSON.stringify({ result: "error", reason: "captcha_failed" }))
            .setMimeType(ContentService.MimeType.JSON);
    }
    // --- end reCAPTCHA verification ---

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const newRow = [
        new Date(),
        data.first_name,
        data.last_name,
        data.email,
        data.subject,
        data.message
    ];
    sheet.appendRow(newRow);

    const lastRow = sheet.getLastRow();
    const rowRange = sheet.getRange(lastRow, 1, 1, newRow.length);
    rowRange.setBackground(lastRow % 2 === 0 ? "#EAF3FB" : "#FFFFFF");
    sheet.getRange(lastRow, 6).setWrap(true);

    return ContentService
        .createTextOutput(JSON.stringify({ result: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
}
