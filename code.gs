const SHEET_ID = "1OiQ8BuvghviMDuk9TDmScXqFGhV01a28uwDi3MIArxQ";  // 예: "1AbCdEfGhIJkLmNoPqRsTuVwXyZ"
const SHEET_NAME = "Sheet1";

// 웹앱 실행 시 HTML 반환
function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("PARAMEDIC 응급환자 평가도구")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// 기록 저장 함수
function saveRecord(data) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);

  // 시트가 비어있으면 첫 행에 컬럼 이름 자동 생성
  if(sheet.getLastRow() === 0){
    sheet.appendRow(Object.keys(data));
  }

  // 배열 데이터를 문자열로 변환
  const row = Object.values(data).map(val => Array.isArray(val) ? val.join(", ") : val);

  sheet.appendRow(row);
  return "시트 저장 완료 ✅";
}
