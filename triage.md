< !DOCTYPE html>

<html lang="ko">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>응급환자 분류 도구</title>

    <style>

        body {

            font-family: Arial, sans-serif;

        }

        .container {

            width: 70%;

            margin: 0 auto;

            padding: 20px;

            border: 1px solid #ccc;

            border-radius: 8px;

            background-color: #f9f9f9;

        }

        .section {

            margin-bottom: 30px;

            padding: 15px;

            border: 1px solid #ddd;

            border-radius: 8px;

            background-color: #fff;

        }

        .section h2 {

            color: #007bff;

        }

        .section label {

            font-weight: bold;

            display: block;

            margin-bottom: 5px;

        }

        .section input[type="checkbox"] {

            margin-right: 10px;

        }

        .submit-btn {

            width: 100%;

            padding: 10px;

            background-color: #007bff;

            color: white;

            border: none;

            border-radius: 4px;

            cursor: pointer;

            font-size: 16px;

        }

        .submit-btn:hover {

            background-color: #0056b3;

        }

        .result-container {

            margin-top: 30px;

            padding: 15px;

            border: 1px solid #ddd;

            border-radius: 8px;

            background-color: #e9ecef;

        }

        .result-container h2 {

            color: #333;

        }

        .result-item {

            margin-bottom: 10px;

            font-size: 14px;

        }

    </style>

</head>

<body>



<div class="container">

    <h1>세분화된 KTAS 응급환자 분류 도구</h1>

    

    <!-- Grade 1: 생명이 위급한 상태 -->

    <div class="section">

        <h2>Grade 1: 생명이 위급한 상태</h2>

        <label><input type="checkbox" class="symptom" value="심정지"> 심정지</label>

        <label><input type="checkbox" class="symptom" value="무의식 상태 (GCS ≤ 8)"> 무의식 상태 (GCS ≤ 8)</label>

        <label><input type="checkbox" class="symptom" value="호흡 정지"> 호흡 정지</label>

        <label><input type="checkbox" class="symptom" value="중증 외상 (다발성 손상)"> 중증 외상 (다발성 손상)</label>

        <label><input type="checkbox" class="symptom" value="급성 대량 출혈"> 급성 대량 출혈</label>

        <label><input type="checkbox" class="symptom" value="심한 쇼크 상태"> 심한 쇼크 상태</label>

    </div>



    <!-- Grade 2: 매우 위급한 상태 -->

    <div class="section">

        <h2>Grade 2: 매우 위급한 상태</h2>

        <label><input type="checkbox" class="symptom" value="심한 호흡곤란"> 심한 호흡곤란</label>

        <label><input type="checkbox" class="symptom" value="심한 흉통 (심근경색 의심)"> 심한 흉통 (심근경색 의심)</label>

        <label><input type="checkbox" class="symptom" value="중등도 이상 출혈"> 중등도 이상 출혈</label>

        <label><input type="checkbox" class="symptom" value="발작 지속 상태"> 발작 지속 상태</label>

        <label><input type="checkbox" class="symptom" value="의식 혼미 (GCS 9-12)"> 의식 혼미 (GCS 9-12)</label>

        <label><input type="checkbox" class="symptom" value="심한 외상"> 심한 외상</label>

    </div>



    <!-- Grade 3: 중등도 응급 -->

    <div class="section">

        <h2>Grade 3: 중등도 응급</h2>

        <label><input type="checkbox" class="symptom" value="고열 (체온 > 39°C)"> 고열 (체온 > 39°C)</label>

        <label><input type="checkbox" class="symptom" value="중등도 통증 (VAS 7-10)"> 중등도 통증 (VAS 7-10)</label>

        <label><input type="checkbox" class="symptom" value="중등도 탈수"> 중등도 탈수</label>

        <label><input type="checkbox" class="symptom" value="심한 복통"> 심한 복통</label>

        <label><input type="checkbox" class="symptom" value="최근 발작 후 상태"> 최근 발작 후 상태</label>

    </div>



    <!-- Grade 4: 경증 응급 -->

    <div class="section">

        <h2>Grade 4: 경증 응급</h2>

        <label><input type="checkbox" class="symptom" value="경증 통증 (VAS 4-6)"> 경증 통증 (VAS 4-6)</label>

        <label><input type="checkbox" class="symptom" value="경미한 외상"> 경미한 외상</label>

        <label><input type="checkbox" class="symptom" value="감염 징후 (예: 요로 감염)"> 감염 징후 (예: 요로 감염)</label>

        <label><input type="checkbox" class="symptom" value="가벼운 복통"> 가벼운 복통</label>

        <label><input type="checkbox" class="symptom" value="경미한 출혈"> 경미한 출혈</label>

    </div>



    <!-- Grade 5: 비응급 -->

    <div class="section">

        <h2>Grade 5: 비응급</h2>

        <label><input type="checkbox" class="symptom" value="가벼운 증상 (예: 감기)"> 가벼운 증상 (예: 감기)</label>

        <label><input type="checkbox" class="symptom" value="만성 질환 관리"> 만성 질환 관리</label>

        <label><input type="checkbox" class="symptom" value="일반적인 건강 상담"> 일반적인 건강 상담</label>

        <label><input type="checkbox" class="symptom" value="약물 처방 재발행"> 약물 처방 재발행</label>

        <label><input type="checkbox" class="symptom" value="단순 발진"> 단순 발진</label>

    </div>



    <button type="button" class="submit-btn" 사항 저장하기</button>



    <!-- 선택 항목 결과를 표시할 영역 -->

    <div class="result-container" id="result-container">

        <h2>저장된 선택 사항</h2>

        <div id="saved-results"></div>

    </div>

</div>



<script>

    function saveSelections() {

        const symptoms = document.querySelectorAll('.symptom');

        const selectedSymptoms = [];



        symptoms.forEach(symptom => {

            if (symptom.checked) {

                selectedSymptoms.push({

                    symptom: symptom.value,

                    time: new Date().toLocaleString()  // 선택된 시간 저장

                });

            }

        });



        // Local Storage에 저장

        localStorage.setItem('ktasSelections', JSON.stringify(selectedSymptoms));

        displaySelections();  // 저장 후 표시

        alert('선택 사항이 저장되었습니다.');

    }



    function displaySelections() {

        const savedResultsContainer = document.getElementById('saved-results');

        savedResultsContainer = '';  // 이전 내용을 초기화

        

        const savedSelections = JSON.parse(localStorage.getItem('ktasSelections') || "[]");

        

        if (savedSelections.length > 0) {

            savedSelections.forEach(selection => {

                const resultItem = document.createElement('div');

                resultItem.className = 'result-item';

                resultItem.textContent = `증상: ${selection.symptom}, 시간: ${selection.time}`;

                savedResultsContainer.appendChild(resultItem);

            });

        } else {

            savedResultsContainer.textContent = '저장된 선택 사항이 없습니다.';

        }

    }



    // 페이지 로드 시 저장된 항목 표시

    window.onload = displaySelections;

</script>



</body>

</html>
