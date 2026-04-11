# A!SK 면접 연습 앱 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** SK하이닉스 AE 직무 A!SK 비대면 영상 인터뷰 실전 연습 웹앱을 구현한다. Part1(기본질문 3개 × 1분) + Part2(직무질문 4개 × 3분) = 7문항, 60초 준비시간, 녹음/재생, 개별 연습 + 전체 모의면접 모드.

**Architecture:** React 18 SPA, useState 기반 화면 전환 (라우터 없음). 질문 데이터는 `questions.js`에 정적으로 저장하고 카테고리별 풀에서 랜덤 출제. MediaRecorder API로 녹음, Blob을 세션 내 메모리에 보관.

**Tech Stack:** React 18, Vite 5, Tailwind CSS 3, MediaRecorder API (WebKit/iOS 호환 주의)

**Primary device:** iPhone Chrome (iOS WebKit) — 모바일 우선 UX, 터치 인터랙션, MediaRecorder mime type 호환성 필수 고려.

**Design spec:** `docs/superpowers/specs/2026-04-11-ask-practice-design.md`

---

## File Map

| File | Responsibility | Task |
|---|---|---|
| `src/data/questions.js` | Part1 풀(19개) + Part2 풀(22개) 전체 질문 데이터 | Task 1 |
| `src/App.jsx` | 최상위 상태 관리 + 화면 라우팅 | Task 2 |
| `src/components/CircleTimer.jsx` | 재사용 원형 SVG 타이머 | Task 3 |
| `src/components/Home.jsx` | 홈 화면 — 모드 선택 | Task 4 |
| `src/components/QuestionSelect.jsx` | 카테고리 카드 리스트 + Part2 랜덤 뽑기 | Task 5 |
| `src/components/PrepTimer.jsx` | 60초 준비 카운트다운 + 키워드 힌트 토글 | Task 6 |
| `src/components/AnswerRecorder.jsx` | 녹음 + 답변 타이머 + 경고 | Task 7 |
| `src/components/Result.jsx` | 개별 결과 — 재생, 가이드, 네비게이션 | Task 8 |
| `src/components/MockExam.jsx` | 전체 모의면접 컨트롤러 (7문항 자동 진행) | Task 9 |
| `src/components/MockResult.jsx` | 종합 결과 — 문항별 시간/재생 | Task 10 |
| `src/index.css` | 기존 파일 수정 — 추가 애니메이션/유틸리티 | Task 3 |

---

### Task 1: 질문 데이터 (`questions.js`)

**Files:**
- Create: `src/data/questions.js`

- [ ] **Step 1: Create `src/data/` directory and `questions.js`**

```js
// src/data/questions.js

export const questions = {
  part1: {
    intro: {
      label: '1분 소개',
      part: 1,
      timeLimitSec: 60,
      prepTimeSec: 60,
      pool: [
        {
          id: 'intro-1',
          question: '글로는 다 표현할 수 없었던 지원자 님만의 이야기를 자유롭게 들려주세요.',
          keywords: [
            'Full Stack AI Memory Creator 시대 + AE',
            'AI 가속기에서 LLM 추론 메모리 대역폭 병목 체감',
            'HW 설계(RTL/PPA) ~ 시스템 시뮬레이션(C++) 다층적 시각',
            '고객 다변화 → 고객 상황 이해 + HW 문제 파악/소통'
          ],
          guideNotes: '도입(Creator 시대 AE 지원) → 근거1(대역폭 병목 체감) → 근거2(다층적 시각) → 연결(고객 다변화 대응 강점)'
        },
        {
          id: 'intro-2',
          question: '본인이 왜 이 회사에 적합한지, 입사 후 어떤 것이 목표인지 말씀해주세요.',
          keywords: [
            'AI 워크로드 실무 체감 → 고객 니즈 이해',
            'HW~시스템 레벨 분석 역량',
            'cHBM 시대 고객 맞춤 기술 컨설팅',
            '입사 후: 고객 시스템 최적화 메모리 동작 조건 도출'
          ],
          guideNotes: '적합성(AI 워크로드 체감 + 시스템 분석 역량) → 목표(고객 시스템 최적화 메모리 동작 조건 도출, cHBM 기술 컨설턴트)'
        },
        {
          id: 'intro-3',
          question: '지원하신 직무에서 본인만의 강점은 무엇이라고 생각하시나요?',
          keywords: [
            '시스템 관점 병목 분석 (MPU-VPU mismatch 사례)',
            'C++ 모델링 → 검증 자동화 역량',
            '고객 언어로 소통 (AI EXPO, JAPAN IT WEEK)',
            '기술 사이 가능성 탐색 (SEMICON Europa 스웨덴 스타트업)'
          ],
          guideNotes: '시스템 레벨 분석 강점(사례) → 검증 자동화 역량(7.08배) → 고객 소통 강점(전시회 경험) → 기술 탐색 자세'
        },
        {
          id: 'intro-4',
          question: '1분 동안 자기소개를 해주세요.',
          keywords: [
            'KAIST 전기전자 + 전산 부전공',
            'HyperAccel: SW인턴→HW인턴→정규직 성장 경로',
            'IP 설계, 검증 환경 구축, 라이브러리 고도화',
            'AE 직무 연결: 시스템 관점 + 고객 소통'
          ],
          guideNotes: '학력/전공 간단히 → HyperAccel 경력 요약(성장 경로) → 핵심 역량 → AE 직무 연결'
        },
        {
          id: 'intro-5',
          question: 'SK하이닉스에 지원한 동기와 본인을 한마디로 표현해주세요.',
          keywords: [
            'PE(단품 안정화) vs AE(고객 시스템 인증/검증)',
            'Creator 전환 → AE 역할 확대',
            '#소통으로기회를만드는엔지니어',
            '#기술사이가능성을찾아서'
          ],
          guideNotes: 'AE 선택 이유(PE vs AE 차이) → SK하이닉스 선택 이유(Creator 전환, 고객 접점) → 한마디 표현(해시태그 활용)'
        }
      ]
    },
    experience: {
      label: '나의 경험',
      part: 1,
      timeLimitSec: 60,
      prepTimeSec: 60,
      pool: [
        {
          id: 'exp-1',
          question: '다른 사람들이 힘들어하거나 어려워하는 일을 스스로 맡아서 수행했던 경험이 있다면 말씀해주세요.',
          keywords: [
            '레거시 C++ 시뮬레이터 구조 재설계',
            '기존에 아무도 손대지 않던 코드',
            '구조 분석부터 재구현까지 주도',
            '7.08배 속도 향상 달성'
          ],
          guideNotes: '상황(레거시 코드, 아무도 안 건드림) → 행동(구조 분석 → 재설계 주도) → 결과(7.08배 속도 향상) → 배운점'
        },
        {
          id: 'exp-2',
          question: '본인이 맡은 일이나 과제 중에서 가장 최선을 다해 임했던 경험이 있다면 말씀해주세요.',
          keywords: [
            'Adder tree PPA 최적화 (개별연구)',
            '7가지 구조 직접 구현/비교',
            '전력 4.08% 면적 1.19% 절감',
            '기존 방식 한계 확인 후 끈기있게 대안 탐색'
          ],
          guideNotes: '목표(adder tree PPA 개선) → 과정(논문/조언 참고했으나 한계 → 7가지 구조 직접 실험) → 결과(전력/면적 절감) → 교훈(주어진 조건에 맞는 해답 찾기)'
        },
        {
          id: 'exp-3',
          question: '새로운 환경에서 지식이나 기술을 학습하고 실제로 적용했던 경험이 있다면 말씀해주세요.',
          keywords: [
            'HyperAccel SW인턴 → HW 전환',
            'RTL 모듈 동작 원리 독학',
            'Python/C++/RTL 교차 검증 흐름 구성',
            '학습한 내용을 검증 환경에 직접 적용'
          ],
          guideNotes: '상황(SW→HW 전환, RTL 경험 없음) → 학습(RTL 동작 원리 독학) → 적용(교차 검증 흐름 구성) → 결과(검증 환경 구축 완료)'
        },
        {
          id: 'exp-4',
          question: '살면서 어려웠는데 극복한 경험이 있다면 말씀해주세요.',
          keywords: [
            '구체적 어려움 상황 설정',
            '원인 분석 과정',
            '극복 위한 구체적 행동',
            '결과 + 성장 포인트'
          ],
          guideNotes: '상황(구체적 어려움) → 원인 분석 → 행동(어떻게 극복했나) → 결과/성장'
        },
        {
          id: 'exp-5',
          question: '실패를 겪고 그로부터 배운 점이 있다면 말씀해주세요.',
          keywords: [
            'PPA 최적화 초기 실패 (Dadda tree 시도)',
            '논문/조언만으로는 부족했던 상황',
            '직접 실험으로 전환한 판단',
            '정답을 받아들이기보다 직접 찾아가는 태도'
          ],
          guideNotes: '실패 상황(기존 방식으로 개선 못함) → 원인(공정/타이밍 제약 특수성) → 전환(직접 7가지 실험) → 교훈(조건에 맞는 최선의 해답을 끈기있게)'
        },
        {
          id: 'exp-6',
          question: '목표를 달성하기 위해 체계적으로 계획하고 실행한 경험이 있다면 말씀해주세요.',
          keywords: [
            'Streamlit 기반 ULP error 평가 자동화',
            '수작업 84개/4시간 → 자동화 2500개/2시간',
            '문제 정의 → 도구 설계 → 구현 → 팀 적용',
            '현재 연산기 파라미터 선정 근거로 활용 중'
          ],
          guideNotes: '목표(수작업 분석 자동화) → 계획(문제 정의, 도구 설계) → 실행(Streamlit 도구 개발) → 결과(84→2500개, 정량적 근거 활용)'
        },
        {
          id: 'exp-7',
          question: '주도적으로 문제를 발견하고 해결한 경험이 있다면 말씀해주세요.',
          keywords: [
            'MPU-VPU throughput mismatch 발견',
            '연산 속도 vs 메모리 대역폭 균형점 수식 도출',
            '32-lane parallelism 활용 row-level latency hiding',
            '설계에 반영하여 병목 해소'
          ],
          guideNotes: '발견(연산-대역폭 불균형) → 분석(수식으로 균형점 도출) → 해결(구조 반영) → 의미(시스템 전체 관점 중요성 체감)'
        }
      ]
    },
    teamwork: {
      label: '팀워크',
      part: 1,
      timeLimitSec: 60,
      prepTimeSec: 60,
      pool: [
        {
          id: 'team-1',
          question: '지원자 님은 입사 후 팀 프로젝트에 참여하게 되었습니다. 하지만 리더가 정해져 있지 않고 각자 알아서 업무를 진행하는 분위기로, 역할도 명확하게 정해져 있지 않은 상황입니다. 이때 어떤 방식으로 팀에 기여하시겠습니까?',
          keywords: [
            '현황 파악 → 역할 정리 제안',
            '컨퍼런스 기획 경험 연결',
            '각자 강점 기반 역할 분배',
            '정기 싱크업으로 진행 상황 공유'
          ],
          guideNotes: '먼저 현황 파악(누가 뭘 하고 있나) → 역할 정리 제안(강점 기반) → 컨퍼런스 기획 사례(운영진 역할 조율) → 정기 공유로 방향 정렬'
        },
        {
          id: 'team-2',
          question: '팀 내에서 두 명의 동료가 업무 방향을 두고 갈등하고 있습니다. 양쪽 모두 합리적인 근거를 가지고 있을 때, 지원자 님이라면 어떻게 하시겠습니까?',
          keywords: [
            '양쪽 의견 경청 → 공통 목표 재확인',
            '데이터/실험으로 객관적 비교',
            '컨퍼런스 사례: 운영진-후원사-참가자 가치 차이 조율',
            '결론보다 과정의 합의가 중요'
          ],
          guideNotes: '경청(양쪽 근거 파악) → 공통 목표 재확인 → 데이터 기반 비교 제안 → 사례 연결(이해관계자 가치 조율)'
        },
        {
          id: 'team-3',
          question: '고객사에 납품한 제품에서 문제가 발생했는데, 원인이 자사 제품이 아니라 고객 설계에 있는 것으로 보입니다. 고객은 즉각 대응을 요구하고 있습니다. 어떻게 하시겠습니까?',
          keywords: [
            '고객 긴급성 인정 → 즉시 대응 시작',
            '원인 단정 전 데이터 수집/분석',
            '고객 설계 문제라면 → 대안 제시 방식으로 소통',
            'AE 역할: 고객 편에서 문제 해결'
          ],
          guideNotes: '즉시 대응(긴급성 인정) → 데이터 기반 분석(로그, 파형) → 원인이 고객 측이라도 "문제 지적"이 아닌 "대안 제시" → AE로서 고객과 함께 해결'
        },
        {
          id: 'team-4',
          question: '상사가 기술적으로 부적절한 방향을 지시했지만, 일정이 촉박한 상황입니다. 어떻게 하시겠습니까?',
          keywords: [
            '왜 부적절한지 데이터로 정리',
            '대안과 영향 범위 함께 제시',
            '일정 영향 최소화 방안 포함',
            'PPA 최적화 사례: 자료 참고하되 정답으로 받아들이지 않는 태도'
          ],
          guideNotes: '상사 의도 파악(왜 그 방향인지) → 기술적 근거 정리(데이터) → 대안 + 일정 영향 함께 제시 → 최종 판단은 존중하되 기록 남기기'
        },
        {
          id: 'team-5',
          question: '급한 업무가 동시에 여러 건 들어왔을 때 어떻게 우선순위를 정하시겠습니까?',
          keywords: [
            '영향 범위 × 긴급도 매트릭스',
            '고객 영향 > 내부 영향',
            '상사/관련자에게 현황 공유 후 조율',
            '완벽한 순서보다 투명한 소통이 핵심'
          ],
          guideNotes: '현황 파악(각 건의 영향 범위, 데드라인) → 우선순위 기준(고객 영향, 긴급도) → 상사에게 공유/조율 → 진행하며 변동사항 소통'
        },
        {
          id: 'team-6',
          question: '팀 프로젝트에서 한 팀원이 맡은 역할을 제대로 수행하지 않고 있습니다. 어떻게 하시겠습니까?',
          keywords: [
            '1:1 대화로 상황 파악 (비난 아닌 이해)',
            '역량/동기 문제 구분',
            '도움 제안 또는 역할 재조정',
            '팀 목표 기준으로 판단'
          ],
          guideNotes: '1:1 대화(왜 어려운지 파악) → 원인 구분(역량 부족 vs 동기 부족) → 도움/역할 재조정 → 그래도 안되면 팀 차원 논의'
        },
        {
          id: 'team-7',
          question: '본인이 확신하는 기술적 판단과 팀의 다수 의견이 다를 때, 어떻게 하시겠습니까?',
          keywords: [
            '데이터/실험으로 근거 제시',
            'PPA 최적화 경험: 기존 방식 한계 → 직접 실험으로 증명',
            '설득 안 되면 팀 결정 따르되 기록',
            '결과로 증명하는 자세'
          ],
          guideNotes: '근거 정리(데이터, 시뮬레이션) → 팀에 공유/설명 → 사례 연결(7가지 구조 실험으로 증명) → 안 되면 팀 결정 존중하되 소규모 검증 제안'
        }
      ]
    }
  },
  part2: {
    label: '직무 지식',
    part: 2,
    timeLimitSec: 180,
    prepTimeSec: 60,
    pool: [
      // DRAM 기초
      {
        id: 'tech-1',
        question: 'DRAM 셀의 동작 원리를 설명하시오. (1T1C 구조)',
        keywords: ['1T1C (1 Transistor + 1 Capacitor)', 'Capacitor 전하 저장/누설', 'Dynamic = Refresh 필요', 'ACTIVATE → READ/WRITE → PRECHARGE → REFRESH'],
        guideNotes: '1T1C 구조 설명(트랜지스터=스위치, 캐패시터=저장) → 왜 Dynamic인지(누설 → Refresh) → 4대 동작 흐름(ACTIVATE로 Row 열기 → Column 접근 → PRECHARGE로 닫기 → 주기적 REFRESH) → Sense Amplifier 역할'
      },
      {
        id: 'tech-2',
        question: 'DDR4와 DDR5의 핵심 차이점은 무엇인가요?',
        keywords: ['Data rate: 3200 vs 6400+ MT/s', '전압: 1.2V vs 1.1V', '채널: 64bit 단일 vs 32bit×2 서브채널', 'On-die ECC, DFE, On-DIMM PMIC'],
        guideNotes: '속도(DDR4 3200 → DDR5 6400+ MT/s) → 전압(1.2V → 1.1V) → 구조적 변화(서브채널 2개로 분리, Bank 16→32) → 신기술(On-die ECC, DFE, PMIC 온보드화) → 왜 중요한지(AI 워크로드 대역폭 요구)'
      },
      {
        id: 'tech-3',
        question: 'DRAM에서 Refresh가 왜 필요한가요? tREFI와 tRFC를 설명하시오.',
        keywords: ['Capacitor 전하 누설 → 데이터 손실', 'tREFI: Refresh 명령 간격 (~7.8μs)', 'tRFC: Refresh 완료 시간', '64ms 이내 모든 row 재충전'],
        guideNotes: 'Capacitor 누설 원리 → Refresh 필요성(64ms 이내 전체 row) → tREFI(명령 간격, ~7.8μs) → tRFC(한 번의 Refresh 소요 시간) → 고온시 tREFI 절반(32ms) → 성능 영향(Refresh 중 접근 불가)'
      },
      {
        id: 'tech-4',
        question: 'Bank Group이 왜 필요한가요?',
        keywords: ['Bank간 데이터 충돌 방지', '서로 다른 BG의 Bank는 독립 접근', 'tCCD_S < tCCD_L', 'DDR4: 4BG, DDR5: 8BG'],
        guideNotes: '같은 BG 내 Bank 접근 = 긴 지연(tCCD_L) → 다른 BG 접근 = 짧은 지연(tCCD_S) → 인터리빙으로 대역폭 향상 → DDR5에서 BG 2배로 증가한 이유'
      },
      {
        id: 'tech-5',
        question: 'Row Hammer란 무엇이고, 어떻게 대응하나요?',
        keywords: ['인접 Row 반복 활성화 → 비트 플립', '20nm 이후 심각', 'TRR (Target Row Refresh)', 'ECC로 검출/교정'],
        guideNotes: 'Row Hammer 현상(인접 row 반복 ACTIVATE → 전하 간섭 → 비트 플립) → 왜 심각해지나(미세공정화) → 대응(TRR, pTRR, ECC) → 보안 이슈(Rowhammer 공격)'
      },
      // SI/시스템
      {
        id: 'tech-6',
        question: 'Eye diagram에서 무엇을 분석하나요?',
        keywords: ['Eye width = 타이밍 마진', 'Eye height = 전압 마진', 'Jitter, ISI 영향', 'BER 기반 마진 판단'],
        guideNotes: 'Eye diagram 정의(오버레이된 비트 전이 파형) → Eye width(타이밍 마진, 클수록 안정) → Eye height(전압 마진) → 열화 요인(Jitter, ISI, Crosstalk) → AE 실무 연결(Eye mask 기준, BER)'
      },
      {
        id: 'tech-7',
        question: 'ODT(On-Die Termination)란 무엇이고 왜 중요한가요?',
        keywords: ['DRAM 다이 내부 종단 저항', '신호 반사 억제', '임피던스 매칭', 'DDR4/5: 프로그래밍 가능 (RTT_NOM 등)'],
        guideNotes: 'ODT 정의(다이 내부 종단 저항) → 왜 필요(전송선 끝 임피던스 불일치 → 반사) → 반사가 미치는 영향(Eye 열화, 타이밍 위반) → DDR4/5에서 MRS로 값 설정(RTT_NOM, RTT_WR, RTT_PARK)'
      },
      {
        id: 'tech-8',
        question: '전송선에서 신호 반사는 언제 발생하나요?',
        keywords: ['임피던스 불연속점', '반사 계수 Γ = (ZL-Z0)/(ZL+Z0)', '개방(ZL=∞): 양반사, 단락(ZL=0): 음반사', 'Via, 커넥터, 분기점'],
        guideNotes: '전송선 이론(특성 임피던스 Z0) → 반사 조건(Z 불연속: via, 커넥터, stub) → 반사 계수 공식 → 개방/단락 극단 사례 → 실무(DDR5 주파수에서 모든 트레이스가 전송선) → 해결(임피던스 매칭, ODT)'
      },
      {
        id: 'tech-9',
        question: 'Memory Training 중 Write Leveling의 목적은 무엇인가요?',
        keywords: ['DQS와 CK의 타이밍 정렬', 'Fly-by topology에 의한 skew 보상', 'DDR3부터 도입', 'BIOS POST 과정에서 수행'],
        guideNotes: 'Fly-by topology 설명(CK가 DIMM 슬롯 순서대로 전달 → DIMM별 skew) → Write Leveling 목적(DQS-CK 정렬) → 동작(DQS 토글 → CK 상승 엣지 감지 → 딜레이 조정) → 다른 Training과의 관계(Read/Write Training, Vref Training)'
      },
      {
        id: 'tech-10',
        question: '메모리 장애가 발생했을 때 디버깅 절차를 설명해주세요.',
        keywords: ['증상 분류 (부팅 불가/간헐적 에러/성능 저하)', '로그 확인 (Training log, 이벤트 로그)', 'Shmoo Plot으로 마진 확인', '환경 변수 격리 (온도, 전압, 슬롯 위치)'],
        guideNotes: '증상 파악(부팅 불가 vs 간헐적 에러 vs 성능 저하) → 로그 분석(BIOS Training log, OS 이벤트) → 환경 변수 격리(DIMM 교체, 슬롯 변경, 온도/전압) → Shmoo Plot 마진 확인 → 재현 조건 확립 → 원인 특정 후 대책'
      },
      // HBM/산업동향
      {
        id: 'tech-11',
        question: 'HBM의 구조와 기존 DDR 대비 장점은 무엇인가요?',
        keywords: ['TSV로 다이 수직 적층', '1024-bit 와이드 인터페이스', '높은 대역폭 (>1TB/s)', '2.5D 패키징 (인터포저)'],
        guideNotes: 'HBM 구조(TSV로 DRAM 다이 적층, 베이스 로직 다이) → 와이드 인터페이스(1024-bit) → DDR 대비 장점(대역폭 10배+, 전력 효율) → 2.5D 패키징(CoWoS 인터포저로 SoC 옆에 배치) → AI 가속기에서 핵심인 이유'
      },
      {
        id: 'tech-12',
        question: 'TSV(Through-Silicon Via) 기술이란 무엇인가요?',
        keywords: ['실리콘 다이 관통 수직 전기 연결', '직경 ~5-10μm', 'Wire bonding 대비 짧은 경로', 'HBM, 3D NAND에 활용'],
        guideNotes: 'TSV 정의(실리콘 관통 비아) → 왜 필요(수평 배선 한계, 적층 구조 연결) → 장점(짧은 경로→낮은 기생 저항/인덕턴스→높은 대역폭, 저전력) → 제조 과제(높은 종횡비 에칭, 정렬) → 활용(HBM, 3D IC)'
      },
      {
        id: 'tech-13',
        question: 'cHBM이란 무엇이고, 표준 HBM과 어떻게 다른가요?',
        keywords: ['JEDEC 표준 외 고객 맞춤 HBM', '핀 수 감소 → 다이 면적 25% 추가 로직', 'I/O 전력 70%+ 절감', 'Provider → Creator 전환의 핵심'],
        guideNotes: 'cHBM 정의(Custom HBM, JEDEC 규격 벗어남) → 차이점(핀 감소→면적 활용, 전력 절감, 용량 증가) → 왜 필요(고객마다 다른 아키텍처/요구) → 주요 고객(NVIDIA, MS, Broadcom) → AE 역할 변화(표준 지원→맞춤 설계 컨설팅)'
      },
      {
        id: 'tech-14',
        question: 'SK하이닉스의 \'Full Stack AI Memory Creator\' 비전에서 AE의 역할은 무엇이라고 생각하나요?',
        keywords: ['Provider → Creator 전환', 'cHBM + AI-D + AI-N Full Stack', 'AE = 고객 칩 아키텍처 이해 기반 기술 컨설턴트', '고객 다변화 대응의 최전선'],
        guideNotes: 'Creator 비전(고객 과제 함께 해결, 기대 초과) → Full Stack(cHBM, AI-D, AI-N) → AE 역할 변화(단순 지원→기술 컨설턴트) → 고객 다변화(NVIDIA 외 Google, Amazon, AMD 등) → 본인의 기여(AI 워크로드 이해 + 시스템 분석 역량)'
      },
      // NAND
      {
        id: 'tech-15',
        question: 'SLC, MLC, TLC, QLC의 트레이드오프를 설명하시오.',
        keywords: ['비트/셀: 1/2/3/4', 'P/E 사이클: 100K/10K/3K/1K', '속도: SLC 최고, QLC 최저', '용도: Enterprise↔Consumer↔Archive'],
        guideNotes: '각 타입 정의(비트/셀, 전압 레벨 수) → 내구성(P/E 사이클) → 속도(읽기/쓰기) → 비용(용량당 가격) → 용도 매핑(SLC=Enterprise, TLC=Consumer SSD, QLC=Read-heavy) → Pseudo-SLC 캐싱 기법'
      },
      {
        id: 'tech-16',
        question: 'Wear Leveling의 원리를 설명하시오.',
        keywords: ['P/E 사이클 균등 분배', 'Dynamic: 쓰기 요청 분산', 'Static: Cold data도 이동', 'FTL(Flash Translation Layer)이 관리'],
        guideNotes: 'NAND 수명 한계(P/E 사이클) → Wear Leveling 목적(특정 블록 조기 사망 방지) → Dynamic(쓰기 분산) → Static(Cold data 이동으로 전체 균등화) → FTL 역할 → 실무 연결(Over-provisioning과 함께)'
      },
      {
        id: 'tech-17',
        question: '3D NAND가 필요한 이유는 무엇인가요?',
        keywords: ['2D 스케일링 한계 (~15nm 이하 셀간 간섭)', '수직 적층으로 용량 증가', 'SK Hynix 238L', '높은 종횡비 에칭 과제'],
        guideNotes: '2D NAND 한계(미세공정 → 셀간 간섭, 데이터 보존 문제) → 3D NAND 해결(수직 적층, 셀 크기 여유) → 장점(용량↑, 내구성↑, 전력↓) → 과제(높은 종횡비 에칭, 200+층) → SK하이닉스 현황(238L)'
      },
      // 자소서 기반 꼬리질문
      {
        id: 'tech-18',
        question: 'C++ 레퍼런스 라이브러리에서 7.08배 속도 향상을 달성한 주요 기여 요인은 무엇인가요?',
        keywords: ['Architectural modeling vs Literal porting', '불필요한 연산 제거', '데이터 구조 최적화', '벤치마크 기반 병목 분석'],
        guideNotes: '기존 문제(literal porting → 느린 시뮬레이션) → 접근(architectural modeling으로 전환) → 구체적 최적화(불필요 연산 제거, 데이터 구조 개선) → 결과(7.08배) → 영향(2500개 파라미터 평가 가능)'
      },
      {
        id: 'tech-19',
        question: '연산 속도와 메모리 대역폭의 균형점을 어떻게 수식으로 도출했나요?',
        keywords: ['Compute bound vs Memory bound', 'Arithmetic intensity', 'Roofline model 개념', '균형점에서 설계 파라미터 결정'],
        guideNotes: '문제 정의(연산 처리량↑ 해도 대역폭 부족이면 전체 성능 제한) → 수식 도출(연산량/대역폭 비율 = 균형점) → Roofline 개념 연결 → 설계 반영(파라미터 선정 근거) → AE 연결(고객 시스템에서도 동일한 분석 필요)'
      },
      {
        id: 'tech-20',
        question: 'Adder tree PPA 최적화에서 기존 3:2 Wallace tree 대비 어떤 구조가 더 나았고 그 이유는?',
        keywords: ['7:3, 5:3, 3:2 compressor 조합', '7가지 구성 비교 실험', '4nm 공정 제약 특수성', '전력 4.08% 면적 1.19% 절감'],
        guideNotes: '배경(adder tree가 면적 32% 차지) → 기존 시도(Dadda tree 등 → 해당 공정에서 개선 안됨) → 해결(7:3, 5:3, 3:2 조합 7가지 직접 구현) → 결과(전력/면적 절감, 타이밍 위반 없음) → 교훈(공정/조건에 따라 최적 구조 다름)'
      },
      {
        id: 'tech-21',
        question: 'AI EXPO / JAPAN IT WEEK 부스 운영 경험이 AE 직무에 어떻게 연결된다고 생각하나요?',
        keywords: ['고객 관점에서 기술 설명', '사전 조사 + 예상 Q&A 준비', '미쓰비시 전기 내방 미팅 연결', 'AE = 고객의 언어로 소통하는 역할'],
        guideNotes: '경험(AI EXPO, JAPAN IT WEEK 부스 운영) → 역량(기업 사전 조사, 고객 관점 설명, 일본어 대응) → 성과(미쓰비시 전기 내방 미팅) → AE 연결(고객 니즈 파악, 기술을 고객 언어로 전달, 기회 창출)'
      },
      {
        id: 'tech-22',
        question: '컨퍼런스 기획에서 이해관계자 간 가치 차이를 어떻게 조율했나요?',
        keywords: ['운영진/후원사/참가자 각각 다른 가치', '코로나 → 비대면 전환 결정', '참가자: 사전 설문으로 니즈 파악', '후원사: 비용 절감 효과로 설득'],
        guideNotes: '상황(코로나 → S.LSI 후원 철회 위기) → 분석(각 이해관계자 니즈 파악) → 조율(참가자: 조별활동 중심, 후원사: 비용절감 설득) → 결과(14개교 68명, 새벽3시까지 토론) → 교훈(공동 목표 아래 각자 가치 존중)'
      }
    ]
  }
}

// 유틸리티: 풀에서 랜덤 n개 뽑기 (중복 없음)
export function pickRandom(pool, n = 1) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}

// 전체 모의면접 세트 생성
export function generateMockSet() {
  const q1 = pickRandom(questions.part1.intro.pool, 1)[0]
  const q2 = pickRandom(questions.part1.experience.pool, 1)[0]
  const q3 = pickRandom(questions.part1.teamwork.pool, 1)[0]
  const q4 = pickRandom(questions.part2.pool, 4)

  return [
    { ...q1, timeLimitSec: 60, prepTimeSec: 60, category: '1분 소개', part: 1 },
    { ...q2, timeLimitSec: 60, prepTimeSec: 60, category: '나의 경험', part: 1 },
    { ...q3, timeLimitSec: 60, prepTimeSec: 60, category: '팀워크', part: 1 },
    ...q4.map(q => ({ ...q, timeLimitSec: 180, prepTimeSec: 60, category: '직무 지식', part: 2 }))
  ]
}
```

- [ ] **Step 2: Verify import works**

Run: `cd /Users/sinseungbin/workspace/sk-hynix/ask-practice && npx vite build --mode development 2>&1 | head -5`

Expected: No import errors (build may fail for missing App.jsx, that's fine — we just want to confirm questions.js is valid JS).

- [ ] **Step 3: Commit**

```bash
git add src/data/questions.js
git commit -m "feat: add question pool data (Part1 19q + Part2 22q + utils)"
```

---

### Task 2: App Shell (`App.jsx`)

**Files:**
- Create: `src/App.jsx`

- [ ] **Step 1: Create App.jsx with screen routing and state**

```jsx
// src/App.jsx
import { useState, useCallback } from 'react'
import Home from './components/Home'
import QuestionSelect from './components/QuestionSelect'
import PrepTimer from './components/PrepTimer'
import AnswerRecorder from './components/AnswerRecorder'
import Result from './components/Result'
import MockExam from './components/MockExam'
import MockResult from './components/MockResult'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [mode, setMode] = useState(null) // 'individual' | 'mock'
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [recordings, setRecordings] = useState({}) // { [questionId]: { blob, duration } }
  // Mock exam state
  const [mockQuestions, setMockQuestions] = useState([])
  const [mockIndex, setMockIndex] = useState(0)

  const saveRecording = useCallback((questionId, blob, duration) => {
    setRecordings(prev => ({ ...prev, [questionId]: { blob, duration } }))
  }, [])

  const startIndividual = useCallback((question) => {
    setMode('individual')
    setCurrentQuestion(question)
    setScreen('prep')
  }, [])

  const startMock = useCallback((questions) => {
    setMode('mock')
    setMockQuestions(questions)
    setMockIndex(0)
    setCurrentQuestion(questions[0])
    setScreen('prep')
  }, [])

  const onPrepComplete = useCallback(() => {
    setScreen('answer')
  }, [])

  const onAnswerComplete = useCallback((blob, duration) => {
    if (currentQuestion) {
      saveRecording(currentQuestion.id, blob, duration)
    }
    if (mode === 'mock') {
      const nextIndex = mockIndex + 1
      if (nextIndex < mockQuestions.length) {
        setMockIndex(nextIndex)
        setCurrentQuestion(mockQuestions[nextIndex])
        setScreen('prep')
      } else {
        setScreen('mockResult')
      }
    } else {
      setScreen('result')
    }
  }, [currentQuestion, mode, mockIndex, mockQuestions, saveRecording])

  const goHome = useCallback(() => {
    setScreen('home')
    setMode(null)
    setCurrentQuestion(null)
    setMockQuestions([])
    setMockIndex(0)
    setRecordings({})
  }, [])

  const goSelect = useCallback(() => {
    setScreen('select')
  }, [])

  return (
    <div className="min-h-screen bg-hynix-dark text-white">
      <div className="max-w-lg mx-auto px-4 py-6">
        {screen === 'home' && (
          <Home onIndividual={goSelect} onMock={startMock} />
        )}
        {screen === 'select' && (
          <QuestionSelect onSelect={startIndividual} onBack={goHome} />
        )}
        {screen === 'prep' && currentQuestion && (
          <PrepTimer
            question={currentQuestion}
            onComplete={onPrepComplete}
            mockProgress={mode === 'mock' ? { current: mockIndex + 1, total: mockQuestions.length } : null}
          />
        )}
        {screen === 'answer' && currentQuestion && (
          <AnswerRecorder
            question={currentQuestion}
            onComplete={onAnswerComplete}
            mockProgress={mode === 'mock' ? { current: mockIndex + 1, total: mockQuestions.length } : null}
          />
        )}
        {screen === 'result' && currentQuestion && (
          <Result
            question={currentQuestion}
            recording={recordings[currentQuestion.id]}
            onRetry={() => setScreen('prep')}
            onSelect={goSelect}
            onHome={goHome}
          />
        )}
        {screen === 'mockResult' && (
          <MockResult
            questions={mockQuestions}
            recordings={recordings}
            onHome={goHome}
          />
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify dev server starts** (will show errors for missing components, that's expected)

Run: `cd /Users/sinseungbin/workspace/sk-hynix/ask-practice && npm install && npx vite --host 2>&1 | head -10`

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "feat: add App shell with screen routing and state management"
```

---

### Task 3: CircleTimer + CSS Updates

**Files:**
- Create: `src/components/CircleTimer.jsx`
- Modify: `src/index.css`

- [ ] **Step 1: Create CircleTimer.jsx**

```jsx
// src/components/CircleTimer.jsx
import { useEffect, useState, useRef } from 'react'

export default function CircleTimer({ durationSec, onComplete, size = 220, strokeWidth = 8 }) {
  const [remaining, setRemaining] = useState(durationSec)
  const startTimeRef = useRef(null)
  const rafRef = useRef(null)

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    startTimeRef.current = Date.now()

    const tick = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const left = Math.max(0, durationSec - elapsed)
      setRemaining(left)

      if (left <= 0) {
        onComplete?.()
        return
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [durationSec, onComplete])

  const progress = remaining / durationSec
  const dashOffset = circumference * (1 - progress)
  const displaySec = Math.ceil(remaining)

  // Color: green → yellow (≤30s) → red (≤10s)
  let strokeColor = '#22c55e'
  if (displaySec <= 10) strokeColor = '#E4002B'
  else if (displaySec <= 30) strokeColor = '#eab308'

  const minutes = Math.floor(displaySec / 60)
  const seconds = displaySec % 60
  const timeText = minutes > 0
    ? `${minutes}:${String(seconds).padStart(2, '0')}`
    : `${seconds}`

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="timer-ring">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1e293b"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: 'stroke 0.3s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-5xl font-bold tabular-nums" style={{ color: strokeColor }}>
          {timeText}
        </span>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Update `src/index.css`** — add safe area padding for iOS and progress bar styles

Replace the entire `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* iOS safe area */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

/* Timer circle rotation */
.timer-ring {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

/* Recording pulse */
@keyframes pulse-red {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.recording-pulse {
  animation: pulse-red 1.2s ease-in-out infinite;
}

/* Smooth page transitions */
.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Touch-friendly tap targets */
.tap-target {
  min-height: 44px;
  min-width: 44px;
}

/* Progress bar */
.progress-bar {
  transition: width 0.3s ease;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/CircleTimer.jsx src/index.css
git commit -m "feat: add CircleTimer SVG component and iOS-safe CSS"
```

---

### Task 4: Home Screen

**Files:**
- Create: `src/components/Home.jsx`

- [ ] **Step 1: Create Home.jsx**

```jsx
// src/components/Home.jsx
import { generateMockSet } from '../data/questions'

export default function Home({ onIndividual, onMock }) {
  const handleMock = () => {
    const set = generateMockSet()
    onMock(set)
  }

  return (
    <div className="fade-in flex flex-col items-center justify-center min-h-[80vh] gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          A<span className="text-hynix-red">!</span>SK
        </h1>
        <p className="text-lg text-gray-400">면접 연습</p>
        <p className="text-sm text-gray-500 mt-1">SK하이닉스 AE 비대면 영상 인터뷰</p>
      </div>

      <div className="w-full flex flex-col gap-4 max-w-xs">
        <button
          onClick={onIndividual}
          className="tap-target w-full py-4 px-6 bg-hynix-card border border-gray-700 rounded-xl text-lg font-medium hover:bg-hynix-accent active:scale-[0.98] transition-all"
        >
          <div className="text-left">
            <div className="font-semibold">개별 문항 연습</div>
            <div className="text-sm text-gray-400 mt-1">카테고리별로 골라서 반복 연습</div>
          </div>
        </button>

        <button
          onClick={handleMock}
          className="tap-target w-full py-4 px-6 bg-hynix-red rounded-xl text-lg font-medium hover:bg-red-700 active:scale-[0.98] transition-all"
        >
          <div className="text-left">
            <div className="font-semibold">전체 모의면접</div>
            <div className="text-sm text-red-200 mt-1">7문항 실전 연속 진행 (~40분)</div>
          </div>
        </button>
      </div>

      <div className="text-xs text-gray-600 text-center mt-4">
        <p>Part1 기본질문 3개 × 1분 + Part2 직무질문 4개 × 3분</p>
        <p>준비시간 60초 · 답변 30초 이상</p>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify** — dev server should render Home (other components will error, so temporarily comment imports in App.jsx or test this in isolation).

- [ ] **Step 3: Commit**

```bash
git add src/components/Home.jsx
git commit -m "feat: add Home screen with mode selection"
```

---

### Task 5: QuestionSelect Screen

**Files:**
- Create: `src/components/QuestionSelect.jsx`

- [ ] **Step 1: Create QuestionSelect.jsx**

```jsx
// src/components/QuestionSelect.jsx
import { questions, pickRandom } from '../data/questions'

const categories = [
  { key: 'intro', data: questions.part1.intro, color: 'border-blue-500' },
  { key: 'experience', data: questions.part1.experience, color: 'border-green-500' },
  { key: 'teamwork', data: questions.part1.teamwork, color: 'border-yellow-500' },
]

export default function QuestionSelect({ onSelect, onBack }) {
  const handlePart1 = (category) => {
    const [q] = pickRandom(category.data.pool, 1)
    onSelect({
      ...q,
      timeLimitSec: category.data.timeLimitSec,
      prepTimeSec: category.data.prepTimeSec,
      category: category.data.label,
      part: 1,
    })
  }

  const handlePart2 = () => {
    const [q] = pickRandom(questions.part2.pool, 1)
    onSelect({
      ...q,
      timeLimitSec: questions.part2.timeLimitSec,
      prepTimeSec: questions.part2.prepTimeSec,
      category: questions.part2.label,
      part: 2,
    })
  }

  return (
    <div className="fade-in">
      <button
        onClick={onBack}
        className="tap-target text-gray-400 mb-6 flex items-center gap-1"
      >
        ← 홈으로
      </button>

      <h2 className="text-xl font-bold mb-6">문항 선택</h2>

      {/* Part 1 */}
      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-3">Part 1 · 기본 질문 · 답변 1분</p>
        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handlePart1(cat)}
              className={`tap-target w-full text-left p-4 bg-hynix-card rounded-xl border-l-4 ${cat.color} active:scale-[0.98] transition-transform`}
            >
              <div className="font-semibold">{cat.data.label}</div>
              <div className="text-sm text-gray-400 mt-1">
                {cat.data.pool.length}개 질문 풀에서 랜덤 출제
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Part 2 */}
      <div>
        <p className="text-sm text-gray-400 mb-3">Part 2 · 직무 질문 · 답변 3분</p>
        <button
          onClick={handlePart2}
          className="tap-target w-full text-left p-4 bg-hynix-card rounded-xl border-l-4 border-hynix-red active:scale-[0.98] transition-transform"
        >
          <div className="font-semibold">{questions.part2.label}</div>
          <div className="text-sm text-gray-400 mt-1">
            {questions.part2.pool.length}개 질문 풀에서 랜덤 출제
          </div>
        </button>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/QuestionSelect.jsx
git commit -m "feat: add QuestionSelect with category cards and random pick"
```

---

### Task 6: PrepTimer Screen

**Files:**
- Create: `src/components/PrepTimer.jsx`

- [ ] **Step 1: Create PrepTimer.jsx**

```jsx
// src/components/PrepTimer.jsx
import { useState, useCallback } from 'react'
import CircleTimer from './CircleTimer'

export default function PrepTimer({ question, onComplete, mockProgress }) {
  const [showHints, setShowHints] = useState(false)

  const handleComplete = useCallback(() => {
    onComplete()
  }, [onComplete])

  return (
    <div className="fade-in flex flex-col items-center min-h-[80vh]">
      {/* Mock progress bar */}
      {mockProgress && (
        <div className="w-full mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>{mockProgress.current} / {mockProgress.total}</span>
            <span>준비 중</span>
          </div>
          <div className="w-full h-1 bg-gray-700 rounded-full">
            <div
              className="h-1 bg-hynix-red rounded-full progress-bar"
              style={{ width: `${(mockProgress.current / mockProgress.total) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Category badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs px-2 py-1 rounded-full ${question.part === 1 ? 'bg-blue-900 text-blue-300' : 'bg-red-900 text-red-300'}`}>
          Part {question.part}
        </span>
        <span className="text-sm text-gray-400">{question.category}</span>
        <span className="text-xs text-gray-500">답변 {question.timeLimitSec >= 60 ? `${question.timeLimitSec / 60}분` : `${question.timeLimitSec}초`}</span>
      </div>

      {/* Question text */}
      <div className="text-center px-2 mb-8">
        <p className="text-lg leading-relaxed">{question.question}</p>
      </div>

      {/* Timer */}
      <div className="mb-8">
        <CircleTimer
          durationSec={question.prepTimeSec}
          onComplete={handleComplete}
        />
      </div>

      <p className="text-sm text-gray-400 mb-4">준비 시간</p>

      {/* Skip to answer button */}
      <button
        onClick={handleComplete}
        className="tap-target px-6 py-3 bg-hynix-card border border-gray-600 rounded-xl text-sm active:scale-[0.98] transition-transform mb-6"
      >
        답변 시작 →
      </button>

      {/* Keyword hints toggle */}
      <div className="w-full">
        <button
          onClick={() => setShowHints(!showHints)}
          className="tap-target text-xs text-gray-500 underline"
        >
          {showHints ? '키워드 힌트 숨기기' : '키워드 힌트 보기'}
        </button>
        {showHints && question.keywords && (
          <ul className="mt-2 text-sm text-gray-400 list-disc list-inside space-y-1">
            {question.keywords.map((kw, i) => (
              <li key={i}>{kw}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PrepTimer.jsx
git commit -m "feat: add PrepTimer with countdown, hints toggle, and skip button"
```

---

### Task 7: AnswerRecorder Screen

**Files:**
- Create: `src/components/AnswerRecorder.jsx`

This is the most complex component. MediaRecorder on iOS WebKit requires `audio/mp4` mime type — `audio/webm` is NOT supported. We must detect supported mime types.

- [ ] **Step 1: Create AnswerRecorder.jsx**

```jsx
// src/components/AnswerRecorder.jsx
import { useState, useEffect, useRef, useCallback } from 'react'
import CircleTimer from './CircleTimer'

function getSupportedMimeType() {
  const types = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/mp4',
    'audio/ogg;codecs=opus',
    'audio/wav',
    '',  // fallback: let browser choose
  ]
  for (const type of types) {
    if (type === '' || MediaRecorder.isTypeSupported(type)) {
      return type
    }
  }
  return ''
}

export default function AnswerRecorder({ question, onComplete, mockProgress }) {
  const [isRecording, setIsRecording] = useState(false)
  const [error, setError] = useState(null)
  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])
  const startTimeRef = useRef(null)
  const streamRef = useRef(null)

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop()
    }
  }, [])

  const handleTimerComplete = useCallback(() => {
    stopRecording()
  }, [stopRecording])

  const handleStopEarly = useCallback(() => {
    stopRecording()
  }, [stopRecording])

  // Start recording on mount
  useEffect(() => {
    let cancelled = false

    async function startRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        if (cancelled) {
          stream.getTracks().forEach(t => t.stop())
          return
        }
        streamRef.current = stream
        const mimeType = getSupportedMimeType()
        const options = mimeType ? { mimeType } : {}
        const recorder = new MediaRecorder(stream, options)
        mediaRecorderRef.current = recorder
        chunksRef.current = []
        startTimeRef.current = Date.now()

        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) chunksRef.current.push(e.data)
        }

        recorder.onstop = () => {
          const duration = (Date.now() - startTimeRef.current) / 1000
          const blob = new Blob(chunksRef.current, { type: mimeType || 'audio/webm' })
          stream.getTracks().forEach(t => t.stop())
          onComplete(blob, duration)
        }

        recorder.start(1000) // collect data every second for reliability
        setIsRecording(true)
      } catch (err) {
        setError('마이크 권한이 필요합니다. 브라우저 설정에서 허용해주세요.')
      }
    }

    startRecording()

    return () => {
      cancelled = true
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop())
      }
    }
  }, [onComplete])

  if (error) {
    return (
      <div className="fade-in flex flex-col items-center justify-center min-h-[80vh] gap-4">
        <p className="text-red-400 text-center">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="tap-target px-4 py-2 bg-hynix-card rounded-lg text-sm"
        >
          새로고침
        </button>
      </div>
    )
  }

  return (
    <div className="fade-in flex flex-col items-center min-h-[80vh]">
      {/* Mock progress */}
      {mockProgress && (
        <div className="w-full mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>{mockProgress.current} / {mockProgress.total}</span>
            <span>답변 중</span>
          </div>
          <div className="w-full h-1 bg-gray-700 rounded-full">
            <div
              className="h-1 bg-hynix-red rounded-full progress-bar"
              style={{ width: `${(mockProgress.current / mockProgress.total) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Category badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs px-2 py-1 rounded-full ${question.part === 1 ? 'bg-blue-900 text-blue-300' : 'bg-red-900 text-red-300'}`}>
          Part {question.part}
        </span>
        <span className="text-sm text-gray-400">{question.category}</span>
      </div>

      {/* Question */}
      <div className="text-center px-2 mb-6">
        <p className="text-lg leading-relaxed">{question.question}</p>
      </div>

      {/* Recording indicator */}
      {isRecording && (
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-hynix-red rounded-full recording-pulse" />
          <span className="text-sm text-hynix-red font-medium">녹음 중</span>
        </div>
      )}

      {/* Timer */}
      <div className="mb-8">
        <CircleTimer
          durationSec={question.timeLimitSec}
          onComplete={handleTimerComplete}
        />
      </div>

      {/* Stop early button */}
      <button
        onClick={handleStopEarly}
        className="tap-target px-6 py-3 bg-hynix-red rounded-xl text-sm font-medium active:scale-[0.98] transition-transform"
      >
        답변 완료
      </button>

      <p className="text-xs text-gray-500 mt-3">30초 이상 답변해야 합니다</p>
    </div>
  )
}
```

- [ ] **Step 2: Test on iPhone Chrome** — Run dev server with `npx vite --host`, open on iPhone via local IP. Verify:
  - Microphone permission prompt appears
  - Recording starts after granting permission
  - Timer runs smoothly
  - "답변 완료" stops recording

- [ ] **Step 3: Commit**

```bash
git add src/components/AnswerRecorder.jsx
git commit -m "feat: add AnswerRecorder with MediaRecorder (iOS WebKit compatible)"
```

---

### Task 8: Result Screen

**Files:**
- Create: `src/components/Result.jsx`

- [ ] **Step 1: Create Result.jsx**

```jsx
// src/components/Result.jsx
import { useState, useRef, useEffect } from 'react'

export default function Result({ question, recording, onRetry, onSelect, onHome }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const urlRef = useRef(null)

  useEffect(() => {
    if (recording?.blob) {
      urlRef.current = URL.createObjectURL(recording.blob)
    }
    return () => {
      if (urlRef.current) URL.revokeObjectURL(urlRef.current)
    }
  }, [recording])

  const togglePlay = () => {
    if (!audioRef.current || !urlRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    } else {
      audioRef.current.src = urlRef.current
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const durationSec = recording?.duration || 0
  const minutes = Math.floor(durationSec / 60)
  const seconds = Math.round(durationSec % 60)
  const isShort = durationSec < 30

  return (
    <div className="fade-in">
      {/* Category badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs px-2 py-1 rounded-full ${question.part === 1 ? 'bg-blue-900 text-blue-300' : 'bg-red-900 text-red-300'}`}>
          Part {question.part}
        </span>
        <span className="text-sm text-gray-400">{question.category}</span>
      </div>

      {/* Question */}
      <p className="text-lg leading-relaxed mb-6">{question.question}</p>

      {/* Duration */}
      <div className="bg-hynix-card rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">답변 시간</span>
          <span className={`text-2xl font-bold tabular-nums ${isShort ? 'text-hynix-red' : 'text-green-400'}`}>
            {minutes}:{String(seconds).padStart(2, '0')}
            <span className="text-sm text-gray-500 ml-1">
              / {question.timeLimitSec >= 60 ? `${question.timeLimitSec / 60}분` : `${question.timeLimitSec}초`}
            </span>
          </span>
        </div>
        {isShort && (
          <p className="text-xs text-hynix-red mt-2">⚠ 실제 시험에서는 30초 이상 답변해야 합니다</p>
        )}
      </div>

      {/* Playback */}
      {recording?.blob && (
        <button
          onClick={togglePlay}
          className="tap-target w-full py-3 bg-hynix-card border border-gray-700 rounded-xl mb-6 active:scale-[0.98] transition-transform"
        >
          {isPlaying ? '⏹ 정지' : '▶ 녹음 재생'}
        </button>
      )}
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        playsInline
      />

      {/* Guide notes */}
      <div className="bg-hynix-accent/30 rounded-xl p-4 mb-6">
        <p className="text-sm font-semibold text-gray-300 mb-2">답변 가이드</p>
        <p className="text-sm text-gray-400 leading-relaxed mb-3">{question.guideNotes}</p>
        {question.keywords && (
          <>
            <p className="text-xs font-semibold text-gray-400 mb-1">키워드</p>
            <ul className="text-xs text-gray-500 list-disc list-inside space-y-0.5">
              {question.keywords.map((kw, i) => (
                <li key={i}>{kw}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-3">
        <button
          onClick={onRetry}
          className="tap-target w-full py-3 bg-hynix-card border border-gray-700 rounded-xl active:scale-[0.98] transition-transform"
        >
          다시 연습
        </button>
        <button
          onClick={onSelect}
          className="tap-target w-full py-3 bg-hynix-card border border-gray-700 rounded-xl active:scale-[0.98] transition-transform"
        >
          문항 목록
        </button>
        <button
          onClick={onHome}
          className="tap-target text-sm text-gray-500 py-2"
        >
          홈으로
        </button>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Result.jsx
git commit -m "feat: add Result screen with playback, duration, and guide notes"
```

---

### Task 9: MockExam Controller

**Files:**
- Create: `src/components/MockExam.jsx`

Note: MockExam doesn't need its own component file — the mock flow is handled entirely by `App.jsx`'s state transitions (`prep → answer → next prep → ... → mockResult`). The `mockProgress` prop passes progress to PrepTimer and AnswerRecorder.

- [ ] **Step 1: Verify mock flow works end-to-end**

The mock flow uses existing components:
1. Home → "전체 모의면접" button calls `generateMockSet()` → `startMock(questions)`
2. App sets `mode='mock'`, cycles through `prep → answer` for each question
3. After last question → `mockResult` screen

Create a minimal `MockExam.jsx` placeholder (not used in routing, but reserved for future enhancement):

```jsx
// src/components/MockExam.jsx
// Mock exam flow is controlled by App.jsx state machine.
// This file is reserved for future enhancements (e.g., pause/resume).
export default null
```

- [ ] **Step 2: Commit**

```bash
git add src/components/MockExam.jsx
git commit -m "feat: reserve MockExam.jsx (flow controlled by App state machine)"
```

---

### Task 10: MockResult Screen

**Files:**
- Create: `src/components/MockResult.jsx`

- [ ] **Step 1: Create MockResult.jsx**

```jsx
// src/components/MockResult.jsx
import { useState, useRef, useEffect } from 'react'

export default function MockResult({ questions, recordings, onHome }) {
  const [playingId, setPlayingId] = useState(null)
  const audioRef = useRef(null)
  const urlsRef = useRef({})

  useEffect(() => {
    // Create object URLs for all recordings
    const urls = {}
    questions.forEach((q) => {
      if (recordings[q.id]?.blob) {
        urls[q.id] = URL.createObjectURL(recordings[q.id].blob)
      }
    })
    urlsRef.current = urls
    return () => {
      Object.values(urls).forEach(URL.revokeObjectURL)
    }
  }, [questions, recordings])

  const togglePlay = (questionId) => {
    if (!audioRef.current) return

    if (playingId === questionId) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setPlayingId(null)
    } else {
      const url = urlsRef.current[questionId]
      if (!url) return
      audioRef.current.src = url
      audioRef.current.play()
      setPlayingId(questionId)
    }
  }

  const totalDuration = questions.reduce((sum, q) => {
    return sum + (recordings[q.id]?.duration || 0)
  }, 0)

  const totalMin = Math.floor(totalDuration / 60)
  const totalSec = Math.round(totalDuration % 60)

  return (
    <div className="fade-in">
      <h2 className="text-xl font-bold mb-2">모의면접 완료</h2>
      <p className="text-sm text-gray-400 mb-6">
        총 소요시간: <span className="text-white font-semibold">{totalMin}분 {totalSec}초</span>
      </p>

      <div className="flex flex-col gap-3 mb-6">
        {questions.map((q, i) => {
          const rec = recordings[q.id]
          const dur = rec?.duration || 0
          const min = Math.floor(dur / 60)
          const sec = Math.round(dur % 60)
          const isShort = dur < 30
          const isCurrentlyPlaying = playingId === q.id

          return (
            <div key={q.id} className="bg-hynix-card rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{i + 1}/7</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${q.part === 1 ? 'bg-blue-900 text-blue-300' : 'bg-red-900 text-red-300'}`}>
                    {q.category}
                  </span>
                </div>
                <span className={`text-sm font-semibold tabular-nums ${isShort ? 'text-hynix-red' : 'text-green-400'}`}>
                  {min}:{String(sec).padStart(2, '0')}
                </span>
              </div>

              <p className="text-sm text-gray-300 mb-3 line-clamp-2">{q.question}</p>

              <div className="flex gap-2">
                {rec?.blob && (
                  <button
                    onClick={() => togglePlay(q.id)}
                    className="tap-target text-xs px-3 py-1.5 bg-hynix-dark rounded-lg border border-gray-700 active:scale-[0.98]"
                  >
                    {isCurrentlyPlaying ? '⏹ 정지' : '▶ 재생'}
                  </button>
                )}
                {isShort && (
                  <span className="text-xs text-hynix-red flex items-center">⚠ 30초 미만</span>
                )}
              </div>

              {/* Guide notes (collapsed by default) */}
              <details className="mt-3">
                <summary className="text-xs text-gray-500 cursor-pointer">답변 가이드 보기</summary>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">{q.guideNotes}</p>
              </details>
            </div>
          )
        })}
      </div>

      <audio
        ref={audioRef}
        onEnded={() => setPlayingId(null)}
        playsInline
      />

      <div className="flex flex-col gap-3">
        <button
          onClick={onHome}
          className="tap-target w-full py-3 bg-hynix-red rounded-xl font-medium active:scale-[0.98] transition-transform"
        >
          홈으로
        </button>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/MockResult.jsx
git commit -m "feat: add MockResult with per-question playback and guide notes"
```

---

### Task 11: Integration & Final Verification

**Files:**
- Modify: `src/App.jsx` (remove MockExam import since it exports null)

- [ ] **Step 1: Update App.jsx — remove unused MockExam import**

In `src/App.jsx`, remove the MockExam import line:

```jsx
// Remove this line:
// import MockExam from './components/MockExam'
```

The mock flow is handled entirely by App's state machine cycling PrepTimer ↔ AnswerRecorder.

- [ ] **Step 2: Install dependencies and verify build**

```bash
cd /Users/sinseungbin/workspace/sk-hynix/ask-practice && npm install && npx vite build
```

Expected: Build succeeds with no errors.

- [ ] **Step 3: Run dev server and test complete flow**

```bash
cd /Users/sinseungbin/workspace/sk-hynix/ask-practice && npx vite --host
```

Open on iPhone Chrome via `http://<local-ip>:5173`. Test:

1. **홈 화면**: 두 버튼 표시 확인
2. **개별 연습**: 카테고리 선택 → 랜덤 질문 출제 → 60초 준비 → 답변 녹음 → 결과 (재생, 가이드) → 다시 연습/문항 목록
3. **전체 모의면접**: 7문항 연속 (prep→answer ×7) → 종합 결과 (각 문항 재생, 시간, 가이드)
4. **iOS 녹음**: 마이크 권한 → 녹음 → 재생 정상 동작
5. **타이머**: 60초/180초 정확, 색상 변화 (≤30초 노랑, ≤10초 빨강)
6. **30초 미만 경고**: 빨리 답변 완료 시 경고 표시

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: integrate all components, complete A!SK practice app"
```

---

## Self-Review Checklist

| Spec Requirement | Covered in Task |
|---|---|
| Part1 3문항 (소개/경험/팀워크) 각 1분, 카테고리별 variation 풀 | Task 1 (19개 질문) |
| Part2 4문항 직무지식 각 3분, 랜덤 출제 | Task 1 (22개 질문) |
| 60초 준비시간 + 키워드 힌트 토글 | Task 6 (PrepTimer) |
| MediaRecorder 녹음 (iOS WebKit 호환) | Task 7 (getSupportedMimeType) |
| 타이머 색상 변화 (30초/10초) | Task 3 (CircleTimer) |
| 30초 미만 답변 경고 | Task 8, 10 (Result, MockResult) |
| 개별 연습 모드 | Task 5 (QuestionSelect) |
| 전체 모의면접 모드 (7문항 연속, 중간 결과 없음) | Task 2 (App state machine) |
| 결과: 녹음 재생 + 키워드 + 답변 골격 | Task 8, 10 |
| 종합 결과: 문항별 시간/재생 + 총 소요시간 | Task 10 (MockResult) |
| 다크 테마 + SK하이닉스 레드 포인트 | Task 3 (CSS), Task 4+ (all components) |
| 모바일 우선 (iPhone Chrome) | All tasks (tap-target, safe-area, responsive) |
| Bringup 벡터 내용 미포함 | Verified: 질문 데이터에 해당 내용 없음 |
| localStorage 미사용 | Verified: 세션 메모리만 사용 |
