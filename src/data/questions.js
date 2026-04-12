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
          keywords: ['Full Stack AI Memory Creator 시대 + AE', 'AI 가속기에서 LLM 추론 메모리 대역폭 병목 체감', 'HW 설계(RTL/PPA) ~ 시스템 시뮬레이션(C++) 다층적 시각', '고객 다변화 → 고객 상황 이해 + HW 문제 파악/소통'],
          guideNotes: '도입(Creator 시대 AE 지원) → 근거1(대역폭 병목 체감) → 근거2(다층적 시각) → 연결(고객 다변화 대응 강점)'
        },
        {
          id: 'intro-2',
          question: '본인이 왜 이 회사에 적합한지, 입사 후 어떤 것이 목표인지 말씀해주세요.',
          keywords: ['AI 워크로드 실무 체감 → 고객 니즈 이해', 'HW~시스템 레벨 분석 역량', 'cHBM 시대 고객 맞춤 기술 컨설팅', '입사 후: 고객 시스템 최적화 메모리 동작 조건 도출'],
          guideNotes: '적합성(AI 워크로드 체감 + 시스템 분석 역량) → 목표(고객 시스템 최적화 메모리 동작 조건 도출, cHBM 기술 컨설턴트)'
        },
        {
          id: 'intro-3',
          question: '지원하신 직무에서 본인만의 강점은 무엇이라고 생각하시나요?',
          keywords: ['시스템 관점 병목 분석 (MPU-VPU mismatch 사례)', 'C++ 모델링 → 검증 자동화 역량', '고객 언어로 소통 (AI EXPO, JAPAN IT WEEK)', '기술 사이 가능성 탐색 (SEMICON Europa 스웨덴 스타트업)'],
          guideNotes: '시스템 레벨 분석 강점(사례) → 검증 자동화 역량(7.08배) → 고객 소통 강점(전시회 경험) → 기술 탐색 자세'
        },
        {
          id: 'intro-4',
          question: '1분 동안 자기소개를 해주세요.',
          keywords: ['KAIST 전기전자 + 전산 부전공', 'HyperAccel: SW인턴→HW인턴→정규직 성장 경로', 'IP 설계, 검증 환경 구축, 라이브러리 고도화', 'AE 직무 연결: 시스템 관점 + 고객 소통'],
          guideNotes: '학력/전공 간단히 → HyperAccel 경력 요약(성장 경로) → 핵심 역량 → AE 직무 연결'
        },
        {
          id: 'intro-5',
          question: 'SK하이닉스에 지원한 동기와 본인을 한마디로 표현해주세요.',
          keywords: ['PE(단품 안정화) vs AE(고객 시스템 인증/검증)', 'Creator 전환 → AE 역할 확대', '#소통으로기회를만드는엔지니어', '#기술사이가능성을찾아서'],
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
          keywords: ['레거시 C++ 시뮬레이터 구조 재설계', '기존에 아무도 손대지 않던 코드', '구조 분석부터 재구현까지 주도', '7.08배 속도 향상 달성'],
          guideNotes: '상황(레거시 코드, 아무도 안 건드림) → 행동(구조 분석 → 재설계 주도) → 결과(7.08배 속도 향상) → 배운점'
        },
        {
          id: 'exp-2',
          question: '본인이 맡은 일이나 과제 중에서 가장 최선을 다해 임했던 경험이 있다면 말씀해주세요.',
          keywords: ['Adder tree PPA 최적화 (개별연구)', '7가지 구조 직접 구현/비교', '전력 4.08% 면적 1.19% 절감', '기존 방식 한계 확인 후 끈기있게 대안 탐색'],
          guideNotes: '목표(adder tree PPA 개선) → 과정(논문/조언 참고했으나 한계 → 7가지 구조 직접 실험) → 결과(전력/면적 절감) → 교훈(주어진 조건에 맞는 해답 찾기)'
        },
        {
          id: 'exp-3',
          question: '새로운 환경에서 지식이나 기술을 학습하고 실제로 적용했던 경험이 있다면 말씀해주세요.',
          keywords: ['HyperAccel SW인턴 → HW 전환', 'RTL 모듈 동작 원리 독학', 'Python/C++/RTL 교차 검증 흐름 구성', '학습한 내용을 검증 환경에 직접 적용'],
          guideNotes: '상황(SW→HW 전환, RTL 경험 없음) → 학습(RTL 동작 원리 독학) → 적용(교차 검증 흐름 구성) → 결과(검증 환경 구축 완료)'
        },
        {
          id: 'exp-4',
          question: '살면서 어려웠는데 극복한 경험이 있다면 말씀해주세요.',
          keywords: ['구체적 어려움 상황 설정', '원인 분석 과정', '극복 위한 구체적 행동', '결과 + 성장 포인트'],
          guideNotes: '상황(구체적 어려움) → 원인 분석 → 행동(어떻게 극복했나) → 결과/성장'
        },
        {
          id: 'exp-5',
          question: '실패를 겪고 그로부터 배운 점이 있다면 말씀해주세요.',
          keywords: ['MPE 모듈 설계 전면 폐기 사건', '중간 확인 없이 혼자 단독 진행 → 방향 자체가 틀림', '원인: 바로 옆 사수님께 확인 안 한 근거 없는 자신감', '교훈 → 4가지 원칙: 의사소통, 문서화, 중간검토(2~3일), 사후피드백', 'AE = 소통 허브 → 이 습관이 AE 업무의 기본자세'],
          guideNotes: '[상황] 입사 초기, MPE 모듈 서브블록 설계를 맡음. 전체 아키텍처 이해가 부족한 상태.\n[잘못된 행동] 사수님께 중간 확인 없이 혼자 판단해서 끝까지 진행.\n[결과] 리뷰에서 설계 방향 자체가 틀렸다는 피드백 → 전면 폐기.\n[성찰] 옆에 확인해줄 분이 있었는데 "나는 혼자서도 할 수 있다"는 근거 없는 자신감.\n[변화] 4가지 원칙 수립: ⭐의사소통, 📜문서화, 🧑‍🏫중간검토(2~3일), 📝사후피드백.\n[AE 연결] AE는 고객·PE·설계팀 사이의 소통 허브. 이 경험이 "혼자 판단하지 않고 이해관계자와 방향을 맞추며 일하는 습관"의 출발점.'
        },
        {
          id: 'exp-6',
          question: '목표를 달성하기 위해 체계적으로 계획하고 실행한 경험이 있다면 말씀해주세요.',
          keywords: ['Streamlit 기반 ULP error 평가 자동화', '수작업 84개/4시간 → 자동화 2500개/2시간', '문제 정의 → 도구 설계 → 구현 → 팀 적용', '현재 연산기 파라미터 선정 근거로 활용 중'],
          guideNotes: '목표(수작업 분석 자동화) → 계획(문제 정의, 도구 설계) → 실행(Streamlit 도구 개발) → 결과(84→2500개, 정량적 근거 활용)'
        },
        {
          id: 'exp-7',
          question: '주도적으로 문제를 발견하고 해결한 경험이 있다면 말씀해주세요.',
          keywords: ['MPU-VPU throughput mismatch 발견', '연산 속도 vs 메모리 대역폭 균형점 수식 도출', '32-lane parallelism 활용 row-level latency hiding', '설계에 반영하여 병목 해소'],
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
          keywords: ['현황 파악 → 역할 정리 제안', '컨퍼런스 기획 경험 연결', '각자 강점 기반 역할 분배', '정기 싱크업으로 진행 상황 공유'],
          guideNotes: '먼저 현황 파악(누가 뭘 하고 있나) → 역할 정리 제안(강점 기반) → 컨퍼런스 기획 사례(운영진 역할 조율) → 정기 공유로 방향 정렬'
        },
        {
          id: 'team-2',
          question: '팀 내에서 두 명의 동료가 업무 방향을 두고 갈등하고 있습니다. 양쪽 모두 합리적인 근거를 가지고 있을 때, 지원자 님이라면 어떻게 하시겠습니까?',
          keywords: ['양쪽 의견 경청 → 공통 목표 재확인', '데이터/실험으로 객관적 비교', '컨퍼런스 사례: 운영진-후원사-참가자 가치 차이 조율', '결론보다 과정의 합의가 중요'],
          guideNotes: '경청(양쪽 근거 파악) → 공통 목표 재확인 → 데이터 기반 비교 제안 → 사례 연결(이해관계자 가치 조율)'
        },
        {
          id: 'team-3',
          question: '고객사에 납품한 제품에서 문제가 발생했는데, 원인이 자사 제품이 아니라 고객 설계에 있는 것으로 보입니다. 고객은 즉각 대응을 요구하고 있습니다. 어떻게 하시겠습니까?',
          keywords: ['고객 긴급성 인정 → 즉시 대응 시작', '원인 단정 전 데이터 수집/분석', '고객 설계 문제라면 → 대안 제시 방식으로 소통', 'AE 역할: 고객 편에서 문제 해결'],
          guideNotes: '즉시 대응(긴급성 인정) → 데이터 기반 분석(로그, 파형) → 원인이 고객 측이라도 "문제 지적"이 아닌 "대안 제시" → AE로서 고객과 함께 해결'
        },
        {
          id: 'team-4',
          question: '상사가 기술적으로 부적절한 방향을 지시했지만, 일정이 촉박한 상황입니다. 어떻게 하시겠습니까?',
          keywords: ['왜 부적절한지 데이터로 정리', '대안과 영향 범위 함께 제시', '일정 영향 최소화 방안 포함', 'PPA 최적화 사례: 자료 참고하되 정답으로 받아들이지 않는 태도'],
          guideNotes: '상사 의도 파악(왜 그 방향인지) → 기술적 근거 정리(데이터) → 대안 + 일정 영향 함께 제시 → 최종 판단은 존중하되 기록 남기기'
        },
        {
          id: 'team-5',
          question: '급한 업무가 동시에 여러 건 들어왔을 때 어떻게 우선순위를 정하시겠습니까?',
          keywords: ['영향 범위 × 긴급도 매트릭스', '고객 영향 > 내부 영향', '상사/관련자에게 현황 공유 후 조율', '완벽한 순서보다 투명한 소통이 핵심'],
          guideNotes: '현황 파악(각 건의 영향 범위, 데드라인) → 우선순위 기준(고객 영향, 긴급도) → 상사에게 공유/조율 → 진행하며 변동사항 소통'
        },
        {
          id: 'team-6',
          question: '팀 프로젝트에서 한 팀원이 맡은 역할을 제대로 수행하지 않고 있습니다. 어떻게 하시겠습니까?',
          keywords: ['1:1 대화로 상황 파악 (비난 아닌 이해)', '역량/동기 문제 구분', '도움 제안 또는 역할 재조정', '팀 목표 기준으로 판단'],
          guideNotes: '1:1 대화(왜 어려운지 파악) → 원인 구분(역량 부족 vs 동기 부족) → 도움/역할 재조정 → 그래도 안되면 팀 차원 논의'
        },
        {
          id: 'team-7',
          question: '본인이 확신하는 기술적 판단과 팀의 다수 의견이 다를 때, 어떻게 하시겠습니까?',
          keywords: ['데이터/실험으로 근거 제시', 'PPA 최적화 경험: 기존 방식 한계 → 직접 실험으로 증명', '설득 안 되면 팀 결정 따르되 기록', '결과로 증명하는 자세'],
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
      { id: 'tech-1', question: 'DRAM 셀의 동작 원리를 설명하시오. (1T1C 구조)', keywords: ['1T1C (1 Transistor + 1 Capacitor)', 'Capacitor 전하 저장/누설', 'Dynamic = Refresh 필요', 'ACTIVATE → READ/WRITE → PRECHARGE → REFRESH'], guideNotes: '1T1C 구조 설명(트랜지스터=스위치, 캐패시터=저장) → 왜 Dynamic인지(누설 → Refresh) → 4대 동작 흐름(ACTIVATE로 Row 열기 → Column 접근 → PRECHARGE로 닫기 → 주기적 REFRESH) → Sense Amplifier 역할' },
      { id: 'tech-2', question: 'DDR4와 DDR5의 핵심 차이점은 무엇인가요?', keywords: ['Data rate: 3200 vs 6400+ MT/s', '전압: 1.2V vs 1.1V', '채널: 64bit 단일 vs 32bit×2 서브채널', 'On-die ECC, DFE, On-DIMM PMIC'], guideNotes: '속도(DDR4 3200 → DDR5 6400+ MT/s) → 전압(1.2V → 1.1V) → 구조적 변화(서브채널 2개로 분리, Bank 16→32) → 신기술(On-die ECC, DFE, PMIC 온보드화) → 왜 중요한지(AI 워크로드 대역폭 요구)' },
      { id: 'tech-3', question: 'DRAM에서 Refresh가 왜 필요한가요? tREFI와 tRFC를 설명하시오.', keywords: ['Capacitor 전하 누설 → 데이터 손실', 'tREFI: Refresh 명령 간격 (~7.8μs)', 'tRFC: Refresh 완료 시간', '64ms 이내 모든 row 재충전'], guideNotes: 'Capacitor 누설 원리 → Refresh 필요성(64ms 이내 전체 row) → tREFI(명령 간격, ~7.8μs) → tRFC(한 번의 Refresh 소요 시간) → 고온시 tREFI 절반(32ms) → 성능 영향(Refresh 중 접근 불가)' },
      { id: 'tech-4', question: 'Bank Group이 왜 필요한가요?', keywords: ['Bank간 데이터 충돌 방지', '서로 다른 BG의 Bank는 독립 접근', 'tCCD_S < tCCD_L', 'DDR4: 4BG, DDR5: 8BG'], guideNotes: '같은 BG 내 Bank 접근 = 긴 지연(tCCD_L) → 다른 BG 접근 = 짧은 지연(tCCD_S) → 인터리빙으로 대역폭 향상 → DDR5에서 BG 2배로 증가한 이유' },
      { id: 'tech-5', question: 'Row Hammer란 무엇이고, 어떻게 대응하나요?', keywords: ['인접 Row 반복 활성화 → 비트 플립', '20nm 이후 심각', 'TRR (Target Row Refresh)', 'ECC로 검출/교정'], guideNotes: 'Row Hammer 현상(인접 row 반복 ACTIVATE → 전하 간섭 → 비트 플립) → 왜 심각해지나(미세공정화) → 대응(TRR, pTRR, ECC) → 보안 이슈(Rowhammer 공격)' },
      { id: 'tech-6', question: 'Eye diagram에서 무엇을 분석하나요?', keywords: ['Eye width = 타이밍 마진', 'Eye height = 전압 마진', 'Jitter, ISI 영향', 'BER 기반 마진 판단'], guideNotes: 'Eye diagram 정의(오버레이된 비트 전이 파형) → Eye width(타이밍 마진, 클수록 안정) → Eye height(전압 마진) → 열화 요인(Jitter, ISI, Crosstalk) → AE 실무 연결(Eye mask 기준, BER)' },
      { id: 'tech-7', question: 'ODT(On-Die Termination)란 무엇이고 왜 중요한가요?', keywords: ['DRAM 다이 내부 종단 저항', '신호 반사 억제', '임피던스 매칭', 'DDR4/5: 프로그래밍 가능 (RTT_NOM 등)'], guideNotes: 'ODT 정의(다이 내부 종단 저항) → 왜 필요(전송선 끝 임피던스 불일치 → 반사) → 반사가 미치는 영향(Eye 열화, 타이밍 위반) → DDR4/5에서 MRS로 값 설정(RTT_NOM, RTT_WR, RTT_PARK)' },
      { id: 'tech-8', question: '전송선에서 신호 반사는 언제 발생하나요?', keywords: ['임피던스 불연속점', '반사 계수 Γ = (ZL-Z0)/(ZL+Z0)', '개방(ZL=∞): 양반사, 단락(ZL=0): 음반사', 'Via, 커넥터, 분기점'], guideNotes: '전송선 이론(특성 임피던스 Z0) → 반사 조건(Z 불연속: via, 커넥터, stub) → 반사 계수 공식 → 개방/단락 극단 사례 → 실무(DDR5 주파수에서 모든 트레이스가 전송선) → 해결(임피던스 매칭, ODT)' },
      { id: 'tech-9', question: 'Memory Training 중 Write Leveling의 목적은 무엇인가요?', keywords: ['DQS와 CK의 타이밍 정렬', 'Fly-by topology에 의한 skew 보상', 'DDR3부터 도입', 'BIOS POST 과정에서 수행'], guideNotes: 'Fly-by topology 설명(CK가 DIMM 슬롯 순서대로 전달 → DIMM별 skew) → Write Leveling 목적(DQS-CK 정렬) → 동작(DQS 토글 → CK 상승 엣지 감지 → 딜레이 조정) → 다른 Training과의 관계(Read/Write Training, Vref Training)' },
      { id: 'tech-10', question: '메모리 장애가 발생했을 때 디버깅 절차를 설명해주세요.', keywords: ['증상 분류 (부팅 불가/간헐적 에러/성능 저하)', '로그 확인 (Training log, 이벤트 로그)', 'Shmoo Plot으로 마진 확인', '환경 변수 격리 (온도, 전압, 슬롯 위치)'], guideNotes: '증상 파악(부팅 불가 vs 간헐적 에러 vs 성능 저하) → 로그 분석(BIOS Training log, OS 이벤트) → 환경 변수 격리(DIMM 교체, 슬롯 변경, 온도/전압) → Shmoo Plot 마진 확인 → 재현 조건 확립 → 원인 특정 후 대책' },
      { id: 'tech-11', question: 'HBM의 구조와 기존 DDR 대비 장점은 무엇인가요?', keywords: ['TSV로 다이 수직 적층', '1024-bit 와이드 인터페이스', '높은 대역폭 (>1TB/s)', '2.5D 패키징 (인터포저)'], guideNotes: 'HBM 구조(TSV로 DRAM 다이 적층, 베이스 로직 다이) → 와이드 인터페이스(1024-bit) → DDR 대비 장점(대역폭 10배+, 전력 효율) → 2.5D 패키징(CoWoS 인터포저로 SoC 옆에 배치) → AI 가속기에서 핵심인 이유' },
      { id: 'tech-12', question: 'TSV(Through-Silicon Via) 기술이란 무엇인가요?', keywords: ['실리콘 다이 관통 수직 전기 연결', '직경 ~5-10μm', 'Wire bonding 대비 짧은 경로', 'HBM, 3D NAND에 활용'], guideNotes: 'TSV 정의(실리콘 관통 비아) → 왜 필요(수평 배선 한계, 적층 구조 연결) → 장점(짧은 경로→낮은 기생 저항/인덕턴스→높은 대역폭, 저전력) → 제조 과제(높은 종횡비 에칭, 정렬) → 활용(HBM, 3D IC)' },
      { id: 'tech-13', question: 'cHBM이란 무엇이고, 표준 HBM과 어떻게 다른가요?', keywords: ['JEDEC 표준 외 고객 맞춤 HBM', '핀 수 감소 → 다이 면적 25% 추가 로직', 'I/O 전력 70%+ 절감', 'Provider → Creator 전환의 핵심'], guideNotes: 'cHBM 정의(Custom HBM, JEDEC 규격 벗어남) → 차이점(핀 감소→면적 활용, 전력 절감, 용량 증가) → 왜 필요(고객마다 다른 아키텍처/요구) → 주요 고객(NVIDIA, MS, Broadcom) → AE 역할 변화(표준 지원→맞춤 설계 컨설팅)' },
      { id: 'tech-14', question: "SK하이닉스의 'Full Stack AI Memory Creator' 비전에서 AE의 역할은 무엇이라고 생각하나요?", keywords: ['Provider → Creator 전환', 'cHBM + AI-D + AI-N Full Stack', 'AE = 고객 칩 아키텍처 이해 기반 기술 컨설턴트', '고객 다변화 대응의 최전선'], guideNotes: 'Creator 비전(고객 과제 함께 해결, 기대 초과) → Full Stack(cHBM, AI-D, AI-N) → AE 역할 변화(단순 지원→기술 컨설턴트) → 고객 다변화(NVIDIA 외 Google, Amazon, AMD 등) → 본인의 기여(AI 워크로드 이해 + 시스템 분석 역량)' },
      { id: 'tech-15', question: 'SLC, MLC, TLC, QLC의 트레이드오프를 설명하시오.', keywords: ['비트/셀: 1/2/3/4', 'P/E 사이클: 100K/10K/3K/1K', '속도: SLC 최고, QLC 최저', '용도: Enterprise↔Consumer↔Archive'], guideNotes: '각 타입 정의(비트/셀, 전압 레벨 수) → 내구성(P/E 사이클) → 속도(읽기/쓰기) → 비용(용량당 가격) → 용도 매핑(SLC=Enterprise, TLC=Consumer SSD, QLC=Read-heavy) → Pseudo-SLC 캐싱 기법' },
      { id: 'tech-16', question: 'Wear Leveling의 원리를 설명하시오.', keywords: ['P/E 사이클 균등 분배', 'Dynamic: 쓰기 요청 분산', 'Static: Cold data도 이동', 'FTL(Flash Translation Layer)이 관리'], guideNotes: 'NAND 수명 한계(P/E 사이클) → Wear Leveling 목적(특정 블록 조기 사망 방지) → Dynamic(쓰기 분산) → Static(Cold data 이동으로 전체 균등화) → FTL 역할 → 실무 연결(Over-provisioning과 함께)' },
      { id: 'tech-17', question: '3D NAND가 필요한 이유는 무엇인가요?', keywords: ['2D 스케일링 한계 (~15nm 이하 셀간 간섭)', '수직 적층으로 용량 증가', 'SK Hynix 238L', '높은 종횡비 에칭 과제'], guideNotes: '2D NAND 한계(미세공정 → 셀간 간섭, 데이터 보존 문제) → 3D NAND 해결(수직 적층, 셀 크기 여유) → 장점(용량↑, 내구성↑, 전력↓) → 과제(높은 종횡비 에칭, 200+층) → SK하이닉스 현황(238L)' },
      { id: 'tech-18', question: 'C++ 레퍼런스 라이브러리에서 7.08배 속도 향상을 달성한 주요 기여 요인은 무엇인가요?', keywords: ['Architectural modeling vs Literal porting', '불필요한 연산 제거', '데이터 구조 최적화', '벤치마크 기반 병목 분석'], guideNotes: '기존 문제(literal porting → 느린 시뮬레이션) → 접근(architectural modeling으로 전환) → 구체적 최적화(불필요 연산 제거, 데이터 구조 개선) → 결과(7.08배) → 영향(2500개 파라미터 평가 가능)' },
      { id: 'tech-19', question: '연산 속도와 메모리 대역폭의 균형점을 어떻게 수식으로 도출했나요?', keywords: ['Compute bound vs Memory bound', 'Arithmetic intensity', 'Roofline model 개념', '균형점에서 설계 파라미터 결정'], guideNotes: '문제 정의(연산 처리량↑ 해도 대역폭 부족이면 전체 성능 제한) → 수식 도출(연산량/대역폭 비율 = 균형점) → Roofline 개념 연결 → 설계 반영(파라미터 선정 근거) → AE 연결(고객 시스템에서도 동일한 분석 필요)' },
      { id: 'tech-20', question: 'Adder tree PPA 최적화에서 기존 3:2 Wallace tree 대비 어떤 구조가 더 나았고 그 이유는?', keywords: ['7:3, 5:3, 3:2 compressor 조합', '7가지 구성 비교 실험', '4nm 공정 제약 특수성', '전력 4.08% 면적 1.19% 절감'], guideNotes: '배경(adder tree가 면적 32% 차지) → 기존 시도(Dadda tree 등 → 해당 공정에서 개선 안됨) → 해결(7:3, 5:3, 3:2 조합 7가지 직접 구현) → 결과(전력/면적 절감, 타이밍 위반 없음) → 교훈(공정/조건에 따라 최적 구조 다름)' },
      { id: 'tech-21', question: 'AI EXPO / JAPAN IT WEEK 부스 운영 경험이 AE 직무에 어떻게 연결된다고 생각하나요?', keywords: ['고객 관점에서 기술 설명', '사전 조사 + 예상 Q&A 준비', '미쓰비시 전기 내방 미팅 연결', 'AE = 고객의 언어로 소통하는 역할'], guideNotes: '경험(AI EXPO, JAPAN IT WEEK 부스 운영) → 역량(기업 사전 조사, 고객 관점 설명, 일본어 대응) → 성과(미쓰비시 전기 내방 미팅) → AE 연결(고객 니즈 파악, 기술을 고객 언어로 전달, 기회 창출)' },
      { id: 'tech-22', question: '컨퍼런스 기획에서 이해관계자 간 가치 차이를 어떻게 조율했나요?', keywords: ['운영진/후원사/참가자 각각 다른 가치', '코로나 → 비대면 전환 결정', '참가자: 사전 설문으로 니즈 파악', '후원사: 비용 절감 효과로 설득'], guideNotes: '상황(코로나 → S.LSI 후원 철회 위기) → 분석(각 이해관계자 니즈 파악) → 조율(참가자: 조별활동 중심, 후원사: 비용절감 설득) → 결과(14개교 68명, 새벽3시까지 토론) → 교훈(공동 목표 아래 각자 가치 존중)' },

      // ── BIOS/FW/시스템 검증 (JD 직결) ──
      { id: 'tech-23', question: 'BIOS POST 과정에서 메모리 Training은 어떤 순서로 진행되는가? 각 단계의 목적을 설명하시오.', keywords: ['SPD 읽기 → MRS 설정', 'Write Leveling (DQS-CK 정렬)', 'Read/Write Training (DQ-DQS 최적화)', 'Vref Training (기준 전압 캘리브레이션)'], guideNotes: 'BIOS POST 개요 → SPD 읽기(DIMM 사양 파악) → MRS(Mode Register Set) 설정 → Write Leveling(fly-by skew 보상) → Read Training(DQ-DQS 정렬) → Write Training → Vref Training(신호 판별 기준 전압 최적화) → Command/Address Training → 왜 순서가 중요한지(이전 단계가 다음 단계의 전제)' },
      { id: 'tech-24', question: 'SPD(Serial Presence Detect)란 무엇이고 어떤 정보를 담고 있는가? AE 업무에서 SPD를 어떻게 활용하는가?', keywords: ['DIMM EEPROM에 저장된 사양 정보', '타이밍, 전압, 용량, 제조사, 온도 등급', 'BIOS가 SPD 읽어 자동 설정', 'XMP/EXPO 프로필도 SPD 내 저장'], guideNotes: 'SPD 정의(DIMM 내 EEPROM) → 저장 정보(타이밍 파라미터, 전압, 용량, CAS Latency 지원 목록, 제조사 코드, 온도 등급) → BIOS 활용(자동 설정) → XMP/EXPO(오버클럭 프로필) → AE 활용(고객 시스템 호환성 검증, SPD 수정으로 최적 동작 조건 탐색)' },
      { id: 'tech-25', question: 'Shmoo Plot이란 무엇이며, AE가 메모리 실장 평가에서 어떻게 활용하는가?', keywords: ['전압 × 타이밍 2D Pass/Fail 맵', '동작 마진 시각화', '마진이 좁으면 → 불안정 리스크', 'PVT 코너별 Shmoo 비교'], guideNotes: 'Shmoo Plot 정의(X축=타이밍, Y축=전압, 각 점=Pass/Fail) → 목적(동작 마진 시각화) → AE 활용(마진 넓이로 안정성 판단, 고객 시스템 조건에서의 마진 확보 여부 검증) → PVT(Process/Voltage/Temperature) 코너별 비교 → 마진 부족 시 대응(타이밍 조정, 전압 변경, PCB 개선 제안)' },
      { id: 'tech-26', question: 'FPGA 기반 메모리 검증의 목적과 장점은 무엇인가? 고객 SoC가 나오기 전에 왜 FPGA를 활용하는가?', keywords: ['SoC 테이프아웃 전 사전 검증', 'FPGA로 메모리 컨트롤러 + PHY 구현', '유연한 파라미터 변경 가능', 'NPI(신규 제품 도입) 기간 단축'], guideNotes: 'FPGA 검증 목적(SoC 없이 DRAM 사전 검증) → 장점(파라미터 유연 변경, 다양한 시나리오 테스트, 빠른 반복) → 구성(FPGA에 메모리 컨트롤러+PHY 구현) → AE 연결(NPI 기간 단축, 고객 SoC 나오기 전 문제 조기 발견) → 한계(실제 SoC 대비 속도/타이밍 차이)' },
      { id: 'tech-27', question: '고객이 BIOS를 업데이트한 후 특정 DIMM에서만 메모리 Training이 실패한다고 보고했습니다. AE로서 이 문제를 어떻게 디버깅하겠습니까?', keywords: ['BIOS 변경 이력 확인 (MRS, 타이밍 변경)', 'Training log 분석 (어느 단계에서 실패?)', 'DIMM 교체 테스트 (특정 DIMM vs 특정 슬롯)', 'Shmoo Plot 비교 (이전 BIOS vs 현재)'], guideNotes: '정보 수집(BIOS 변경 내용, 실패 DIMM 사양, 슬롯 위치) → Training log 분석(Write Leveling? Vref? Read Training?) → 격리 테스트(DIMM 교체, 슬롯 변경) → Shmoo Plot 비교(이전 vs 현재 BIOS 마진 변화) → 원인 추정(MRS 설정 변경, 타이밍 변경, ODT 값 변경) → 대응(BIOS 팀과 협업, 권장 설정값 제시)' },
      { id: 'tech-28', question: '메모리 검증 시 사용되는 도구들(memtest86, Intel MLC, PMU Training log)의 역할과 차이를 설명하시오.', keywords: ['memtest86: 하드웨어 레벨 메모리 에러 검출', 'Intel MLC: 대역폭/지연시간 벤치마크', 'PMU Training log: 컨트롤러 학습 과정 추적', '각 도구의 사용 시점과 목적이 다름'], guideNotes: 'memtest86(OS 없이 메모리 셀 패턴 테스트, 하드웨어 결함 검출) → Intel MLC(Memory Latency Checker, 대역폭/지연 측정, 성능 분석) → PMU Training log(Platform Management Unit의 Training 과정 기록, 어느 단계에서 문제인지 파악) → AE 실무(증상별 도구 선택: 에러→memtest86, 성능→MLC, Training 실패→PMU log)' },
      { id: 'tech-29', question: 'XMP/EXPO 프로필이란 무엇이고, JEDEC 표준 스펙과 어떻게 다른가? AE 관점에서 왜 중요한가?', keywords: ['JEDEC: 기본 보장 스펙', 'XMP(Intel)/EXPO(AMD): 제조사 검증 오버클럭 프로필', 'SPD EEPROM에 별도 저장', 'AE: 고객 시스템에서 XMP 프로필 호환성 검증'], guideNotes: 'JEDEC 표준(모든 시스템에서 보장되는 기본 스펙) → XMP/EXPO(제조사가 검증한 더 높은 성능 프로필) → 저장 위치(SPD EEPROM 내 별도 영역) → AE 관점(고객이 XMP 사용 시 호환성/안정성 검증, 고객 플랫폼별 최적 프로필 추천)' },

      // ── 시나리오/실무형 ──
      { id: 'tech-30', question: '고객의 AI 가속기 보드에서 DDR5 DIMM이 정상 동작하지만, 특정 AI 워크로드(LLM 추론)에서만 간헐적 ECC 에러가 발생합니다. 워크로드 특성과 메모리 동작을 연결해서 원인을 추정하고, 디버깅 방향을 제시하시오.', keywords: ['LLM 추론 = 대역폭 집중 워크로드', '높은 ACTIVATE 빈도 → Row Hammer 가능성', '열 집중 → Refresh 마진 감소', '패턴 의존적 신호 무결성 열화'], guideNotes: '워크로드 분석(LLM 추론의 메모리 접근 패턴: 순차 대량 읽기, 높은 BW 요구) → 가설1(열: 지속적 고부하→온도 상승→Refresh 주기 부족) → 가설2(Row Hammer: 특정 메모리 영역 반복 접근) → 가설3(SI: 높은 전환 빈도에서 ISI/Crosstalk 증가) → 디버깅(온도 모니터링, ECC 에러 주소 패턴 분석, Shmoo Plot 고온 조건)' },
      { id: 'tech-31', question: '고객이 새로운 서버 플랫폼에 SK하이닉스 DDR5 RDIMM을 장착했는데, 1-DIMM-per-Channel(1DPC)에서는 정상이지만 2DPC 구성에서 Training이 실패합니다. 원인을 추정하고 해결 방안을 제시하시오.', keywords: ['2DPC: 신호 경로 길어짐 → SI 열화', 'Stub 반사, 임피던스 불연속 증가', 'ODT 값 재조정 필요', 'Write Leveling 마진 감소 가능'], guideNotes: '1DPC vs 2DPC 차이(신호 경로 길이, 부하 증가, stub 효과) → SI 열화(반사 증가, Eye 마진 감소) → Training 실패 원인(Write Leveling 또는 Vref 마진 부족) → 해결 방안(ODT 값 조정, BIOS 타이밍 완화, PCB 라우팅 검토, CA/CS 드라이브 강도 조정) → 데이터 제시(1DPC vs 2DPC Shmoo 비교)' },
      { id: 'tech-32', question: '차량용(Automotive) 메모리와 일반 컴퓨터용 메모리의 요구사항 차이는 무엇인가? AE가 차량용 고객을 지원할 때 특별히 주의해야 할 점은?', keywords: ['온도 범위: Commercial(-0~85°C) vs Automotive(-40~125°C)', 'AEC-Q100 인증 필수', '수명: 15년+ 보장', 'Zero-defect 품질 요구'], guideNotes: '온도(상용 0~85°C vs 차량용 -40~125°C) → 신뢰성(AEC-Q100 인증, PPAP) → 수명(15년+, 차량 수명과 동일) → 품질(Zero-defect, ppm 단위 관리) → AE 주의점(고온에서의 Refresh 마진, Retention 검증, 고객 인증 프로세스 이해, Safety 표준 ISO 26262)' },
      { id: 'tech-33', question: '고객 시스템에서 메모리 대역폭이 JEDEC 스펙 대비 70%밖에 나오지 않는다는 보고를 받았습니다. 메모리 제품 자체의 문제가 아닐 수도 있습니다. 시스템 레벨에서 대역폭 손실의 원인을 분석하는 방법을 설명하시오.', keywords: ['Page Hit Rate 확인 (Row 재활용률)', '채널/Rank 인터리빙 설정 확인', 'Refresh penalty 계산', 'Memory Controller 효율, 스케줄링 정책'], guideNotes: '이론 대역폭 계산(DDR5-4800 × 64bit × 2ch = XX GB/s) → 실측 대비 차이 원인 분석 → Memory Controller(스케줄링, 인터리빙) → Page Policy(Open/Close page, Page Hit Rate) → Refresh Penalty(tRFC 동안 접근 불가) → Rank 구성(1R vs 2R) → 소프트웨어(NUMA 설정, 메모리 할당 패턴) → AE 대응(Intel MLC로 측정, 컨트롤러 설정 검토 제안)' },
      { id: 'tech-34', question: 'HBM을 탑재한 AI 가속기에서 열 방출이 심각한 문제입니다. HBM의 열 관리 과제를 설명하고, 시스템 레벨에서 어떤 대책이 가능한지 논의하시오.', keywords: ['TSV 적층 → 열 집중, 방열 경로 제한', '하단 다이가 상단 다이 열에 영향', 'Thermal throttling으로 성능 저하', 'CoWoS 인터포저의 열전도 한계'], guideNotes: 'HBM 열 문제 원인(다이 적층→열 집중, 인터포저→열전도 제한) → 영향(상단 다이 온도↑→Refresh 마진↓, Retention↓) → Thermal throttling(자동 성능 제한) → 대책(방열판 설계, TIM 최적화, 열전도 비아 추가, 워크로드 스케줄링) → AE 역할(고객 시스템의 열 조건 파악, 동작 마진 검증, 열 시뮬레이션 협업)' },
      { id: 'tech-35', question: 'DDR5 설계에서 On-die ECC가 도입된 이유는 무엇이고, 시스템 ECC와 어떻게 다른가? On-die ECC의 한계는?', keywords: ['셀 미세화 → 내부 에러율 증가', 'On-die: DRAM 내부에서 자체 교정 (128→136 bit)', '시스템 ECC: 컨트롤러에서 SECDED', 'On-die ECC 한계: 외부에서 보이지 않는 교정'], guideNotes: 'On-die ECC 배경(미세공정→셀 에러율 증가, DRAM 내부에서 먼저 교정) → 동작(128bit 데이터 + 8bit ECC = 136bit 내부 처리) → 시스템 ECC와 차이(On-die=DRAM 내부 투명 교정, 시스템 ECC=컨트롤러에서 추가 교정) → 한계(On-die 교정은 외부에서 관찰 불가→Silent correction, 실패율 추적 어려움) → AE 관점(고객에게 에러율 리포팅 방법 안내)' },
      { id: 'tech-36', question: '고객이 LPDDR5와 DDR5 중 어떤 메모리를 사용할지 고민하고 있습니다. 두 제품의 핵심 차이점을 설명하고, 어떤 애플리케이션에 어떤 제품을 추천할지 근거를 제시하시오.', keywords: ['DDR5: 서버/데스크톱, 높은 대역폭, DIMM 폼팩터', 'LPDDR5: 모바일/노트북, 저전력, Package-on-Package', '전압: DDR5 1.1V vs LPDDR5 1.05V', 'WCK/CK 이중 클럭 구조 (LPDDR5)'], guideNotes: '전압/전력(DDR5 1.1V vs LPDDR5 1.05V→더 저전력) → 폼팩터(DIMM vs PoP/BGA) → 대역폭(LPDDR5X 최대 8533Mbps) → 채널 폭(DDR5 32bit×2 vs LPDDR5 16bit) → 추천(서버/데스크톱→DDR5, 모바일/노트북/차량→LPDDR5, AI Edge→LPDDR5X) → AE 관점(고객 시스템의 전력/성능/폼팩터 요구 분석 후 추천)' },
      { id: 'tech-37', question: '메모리 모듈의 PCB 설계에서 DDR5 신호 라우팅 시 반드시 준수해야 할 주요 규칙들을 설명하시오. 이를 위반했을 때 어떤 문제가 발생하는가?', keywords: ['DQ-DQS 그룹 내 길이 매칭 (±5mil)', 'Controlled impedance (50Ω SE / 100Ω diff)', 'Via transition 최소화', 'Split plane 위 routing 금지'], guideNotes: 'DDR5 주파수(3.2GHz+ → 모든 트레이스가 전송선) → 규칙1(Byte lane 내 DQ-DQS 길이 매칭: ±5mil 이내, 위반→Setup/Hold 위반) → 규칙2(임피던스 제어: 50Ω/100Ω, 위반→반사) → 규칙3(Via 최소화, Ground stitching via 배치, 위반→임피던스 불연속) → 규칙4(Split plane 금지, 위반→리턴 경로 끊김→EMI) → 기판 소재(Megtron 6 등 저손실 소재 필요)' },

      // ── HBM 심화 + 타사 동향 ──
      { id: 'tech-38', question: 'HBM3E와 HBM4의 핵심 차이점을 설명하고, HBM4가 AI 가속기 시장에 미치는 영향을 논의하시오.', keywords: ['HBM3E: 9.8Gb/s/pin, 12Hi 36GB', 'HBM4: 11.7Gbps, 16층 48GB, 2026.2 양산', 'HBM4: 로직 다이에 커스텀 로직 가능', 'HBM4E: 2027 AI 가속기 탑재, 시장 40%'], guideNotes: 'HBM3E 스펙(9.8Gb/s/pin, 12Hi 36GB, 양산 중) → HBM4 진화(11.7Gbps, 16층 48GB, 로직 다이에 추가 기능 통합 가능) → cHBM과의 연결(HBM4에서 커스텀 가능성 확대) → AI 시장 영향(모델 크기 증가→용량/대역폭 동시 요구) → HBM4E 전망(2027, 시장 40%) → 경쟁(삼성 HBM4 양산 추격)' },
      { id: 'tech-39', question: 'NVIDIA 외에 Google TPU, Amazon Trainium, AMD MI 시리즈 등 다양한 AI 가속기가 HBM을 채택하고 있습니다. 고객마다 AE에게 요구하는 기술 지원이 어떻게 다를 수 있는지 논의하시오.', keywords: ['NVIDIA: 가장 높은 대역폭/용량 요구, 성숙한 생태계', 'Google TPU: 자체 아키텍처, 특수한 메모리 접근 패턴', 'Amazon Trainium: 비용 효율 + 대용량(144GB HBM3e)', 'AMD MI: 19.6TB/s 극한 대역폭 요구'], guideNotes: '고객별 차이(아키텍처, 워크로드, 열/전력 제약) → NVIDIA(최고 성능, 검증된 인터페이스, 볼륨 최대) → Google(자체 TPU 아키텍처→인터페이스 맞춤 필요) → Amazon(비용 효율 + 대용량→144GB) → AMD(극한 대역폭→SI 과제) → AE 역할 변화(표준 대응→각 고객 칩 아키텍처 이해 필수→cHBM 설계 협업)' },
      { id: 'tech-40', question: '2.5D 패키징에서 CoWoS 인터포저의 역할을 설명하고, HBM과 SoC 사이의 신호 무결성 과제를 논의하시오.', keywords: ['CoWoS: TSMC의 2.5D 패키징 기술', '실리콘 인터포저로 HBM↔SoC 연결', '인터포저 배선 길이/밀도→SI 과제', 'Microbump 피치 축소 → 수율 과제'], guideNotes: 'CoWoS 정의(Chip-on-Wafer-on-Substrate) → 구조(실리콘 인터포저 위에 HBM+SoC 배치) → 인터포저 역할(미세 배선으로 1024-bit 와이드 인터페이스 연결) → SI 과제(인터포저 배선 길이→신호 감쇠, Crosstalk) → Microbump(피치 축소→수율) → 대안(TSMC InFO, Samsung I-Cube) → AE 연결(고객 패키징 환경 이해 필요)' },
      { id: 'tech-41', question: '삼성전자가 HBM 시장에서 SK하이닉스를 추격하고 있습니다. SK하이닉스가 HBM 리더십을 유지하기 위해 AE 조직이 할 수 있는 기여는 무엇이라고 생각하나요?', keywords: ['삼성 HBM3E 인증 완료, HBM4 양산 시작', '기술 격차보다 고객 밀착 지원이 경쟁력', 'cHBM = 표준품 경쟁을 넘어선 차별화', 'AE의 빠른 대응 속도 = 고객 Lock-in'], guideNotes: '경쟁 현황(삼성 추격, 마이크론 성장) → 기술만으로는 장기 우위 유지 어려움 → AE 차별화(고객 시스템 깊이 이해→cHBM 맞춤 설계→고객 Lock-in) → 빠른 대응(이슈 발생→근본 원인 분석→해결까지의 시간이 경쟁력) → AE 조직 확대의 전략적 의미(고객 다변화→AE 인력 필요성↑)' },
      { id: 'tech-42', question: 'HBM의 1024-bit 와이드 인터페이스에서 대역폭을 계산하시오. HBM3E(9.8Gbps/pin)와 DDR5-4800(4.8Gbps/pin, 64-bit)의 대역폭을 비교하고, 왜 AI 가속기에 HBM이 필수적인지 설명하시오.', keywords: ['HBM3E: 9.8Gbps × 1024bit = ~1.2TB/s', 'DDR5-4800: 4.8Gbps × 64bit = ~38.4GB/s', 'HBM 대역폭이 DDR5의 ~30배+', 'AI 워크로드: 모델 파라미터 대량 로드 필요'], guideNotes: '계산(HBM3E: 9.8Gbps × 1024 / 8 = 1254.4 GB/s ≈ 1.2TB/s) → 계산(DDR5-4800: 4.8Gbps × 64 / 8 = 38.4 GB/s) → 비율(~32배) → AI 필요성(LLM 파라미터 수십~수백 GB, Transformer 어텐션 연산 = 메모리 대역폭 병목) → 전력 효율(HBM: pJ/bit 낮음, 짧은 TSV 경로) → 한계(용량, 비용)' },

      // ── SI/PI/PCB 심화 ──
      { id: 'tech-43', question: 'DDR5에서 DFE(Decision Feedback Equalization)가 도입된 이유와 동작 원리를 설명하시오.', keywords: ['채널 손실 보상 (5GHz+ 에서 ISI 심각)', '이전 비트의 영향을 피드백으로 제거', 'DRAM 수신단에서 구현', 'Eye opening 개선'], guideNotes: 'DFE 필요성(DDR5 5GHz+ → 채널 손실 심각, ISI 증가 → Eye 닫힘) → DFE 원리(이전 비트 판정 결과를 피드백→현재 비트의 ISI 성분 제거) → DRAM 수신단에서 구현(MRS로 DFE tap 설정) → 효과(Eye width/height 개선) → AE 관점(DFE 설정 최적화, 고객 채널 조건에 맞는 tap 계수 조정)' },
      { id: 'tech-44', question: 'PDN(Power Delivery Network) 임피던스 관리가 왜 중요한가? DDR5 시스템에서 PDN 설계 시 주의할 점을 설명하시오.', keywords: ['PDN 임피던스 높으면 → 전압 강하(IR drop)', 'SSN(Simultaneous Switching Noise)', 'Multi-stage decoupling: Bulk Cap → MLCC → On-die', 'On-DIMM PMIC (DDR5 신규)'], guideNotes: 'PDN 역할(안정적 전압 공급) → 문제(높은 임피던스→IR drop, SSN→동시 스위칭 시 전압 변동) → 대책(Multi-stage decoupling: Bulk Cap→MLCC→On-die Cap, 각 주파수 대역 커버) → DDR5 특수성(On-DIMM PMIC: 12V→1.1V 변환, 기존 대비 PDN 구조 변경) → AE 관점(고객 보드의 PDN 임피던스 프로파일 분석, PMIC 위치/용량 검토)' },
      { id: 'tech-45', question: 'Crosstalk(NEXT/FEXT)이란 무엇이고, DDR5 설계에서 Crosstalk을 최소화하기 위한 방법은?', keywords: ['NEXT: Near-End Crosstalk (동일 방향)', 'FEXT: Far-End Crosstalk (반대 방향)', '인접 신호선 간 전자기 결합', '간격 확보, Guard trace, 차동 신호'], guideNotes: 'Crosstalk 정의(인접 신호선 간 전자기 결합에 의한 노이즈) → NEXT(구동 끝에서 발생, 에너지 양방향) → FEXT(원단에서 발생, 에너지 전파 방향) → DDR5에서 심각한 이유(고주파, 고밀도 배선) → 최소화 방법(간격 확보, Ground guard trace, 차동 신호 사용, 길이 매칭) → AE 관점(고객 PCB 리뷰 시 Crosstalk 시뮬레이션 결과 확인)' },
      { id: 'tech-46', question: 'Jitter의 종류(Deterministic vs Random)를 설명하고, 메모리 시스템에서 Jitter가 성능에 미치는 영향은?', keywords: ['Deterministic: ISI, Duty Cycle Distortion, Crosstalk', 'Random: 열잡음, 전원 잡음 (Gaussian)', 'Total Jitter = DJ + α×RJ', 'Eye width 감소 → 타이밍 마진 축소'], guideNotes: 'Jitter 정의(신호 전이 시점의 변동) → Deterministic(ISI, DCD, Crosstalk→예측/보상 가능) → Random(열잡음, 전원잡음→Gaussian 분포, BER로만 정량화) → Total Jitter(DJ + n×RJ, BER 목표에 따라 n 결정) → Eye 영향(Jitter→Eye width 축소→Setup/Hold 마진 감소) → AE 연결(오실로스코프 측정, Jitter 분해 분석)' },

      // ── 프로그래밍 역량 연결 ──
      { id: 'tech-47', question: '대량의 메모리 테스트 로그(수만 건의 Pass/Fail 데이터)에서 불량 패턴을 자동으로 분석하는 프로그램을 개발한다면, 어떤 접근 방식을 사용하겠는가?', keywords: ['데이터 파싱 + 구조화 (Python/Pandas)', '주소 패턴 분석 (특정 Row/Column 집중?)', '시간 패턴 분석 (온도 상관관계?)', '시각화 (히트맵, Shmoo Plot 자동 생성)'], guideNotes: '데이터 수집/파싱(로그 포맷 파악, 정규식 또는 파서) → 구조화(Pandas DataFrame: 주소, 시간, Pass/Fail, 온도) → 패턴 분석(특정 Row/Bank/Column 집중→Row Hammer? 특정 시간대 집중→열?) → 시각화(히트맵으로 불량 분포, Shmoo Plot 자동 생성) → 자동화(CI/CD 파이프라인에 통합) → 본인 경험 연결(Streamlit 자동화 도구 개발 경험)' },
      { id: 'tech-48', question: 'AE가 고객 시스템의 메모리 대역폭을 측정하고 분석하는 벤치마크 프로그램을 작성한다면, 어떤 요소를 고려해야 하는가?', keywords: ['접근 패턴: Sequential vs Random', 'Read/Write/Mixed 비율', '멀티스레드/NUMA 고려', '워크로드 크기 vs 캐시 계층 관계'], guideNotes: '벤치마크 설계 고려사항 → 접근 패턴(Sequential: 최대 BW 측정, Random: 실제 워크로드 모사) → R/W 비율(Read-only, Write-only, Mixed) → 데이터 크기(L1/L2/L3 캐시 넘어야 DRAM 측정) → 멀티스레드(채널/Rank 인터리빙 효과) → NUMA(소켓별 로컬/리모트 메모리) → 측정 지표(BW, Latency, BW-Latency curve) → 본인 경험 연결(연산-대역폭 균형점 수식 도출)' },
      { id: 'tech-49', question: 'Programming 역량을 활용해 메모리 검증 업무를 자동화한다면, 어떤 업무를 우선적으로 자동화하겠는가? 구체적인 방법과 기대 효과를 설명하시오.', keywords: ['반복적 Shmoo Plot 생성/비교 자동화', '테스트 결과 리포트 자동 생성', 'BIOS 설정 변경 스크립트', '회귀 테스트 자동 실행/판정'], guideNotes: '자동화 대상 선정 기준(반복적, 시간 소모적, 에러 발생 가능한 작업) → 우선순위1(Shmoo Plot 자동 생성/비교: 다수 조건에서 반복 필요) → 우선순위2(테스트 리포트 자동화: 고객 제출용 정형 보고서) → 우선순위3(회귀 테스트: BIOS 변경 시 자동 재검증) → 도구(Python, 장비 제어 API) → 본인 경험(Streamlit ULP 자동화 84→2500개, 7.08배 속도 향상)' },

      // ── 딥 기술 ──
      { id: 'tech-50', question: 'DRAM의 주요 타이밍 파라미터(tCL, tRCD, tRP, tRAS)를 설명하고, 이들의 관계를 수식으로 표현하시오. 이 파라미터들이 시스템 성능에 미치는 영향은?', keywords: ['tCL: CAS Latency (READ→데이터 출력)', 'tRCD: ACTIVATE→READ/WRITE 최소 시간', 'tRP: Row Precharge (Row 닫기)', 'tRAS ≥ tRCD + tCL (Row 활성 최소 시간)'], guideNotes: 'tCL(READ 명령→첫 데이터 출력 클럭 수) → tRCD(ACTIVATE→READ/WRITE 대기) → tRP(PRECHARGE 소요) → tRAS(Row 활성 유지 최소 시간, tRAS≥tRCD+tCL) → Page Miss latency(tRP+tRCD+tCL) vs Page Hit(tCL만) → 성능 영향(타이밍 작을수록 빠르지만 안정성↓) → AE 연결(고객 시스템 최적 타이밍 프로파일 제안)' },
      { id: 'tech-51', question: 'Memory Controller의 스케줄링 정책(Open Page vs Close Page)이 시스템 성능에 미치는 영향을 설명하시오. 어떤 워크로드에 어떤 정책이 적합한가?', keywords: ['Open Page: Row를 열어둠 → Page Hit 시 tCL만', 'Close Page: 즉시 Precharge → Page Miss 최소화', 'Temporal locality 높은 워크로드 → Open Page', 'Random access 워크로드 → Close Page'], guideNotes: 'Open Page(Row 활성 유지→같은 Row 재접근 시 tCL만→Page Hit 이득, 다른 Row 접근 시 tRP+tRCD+tCL→Page Miss 페널티) → Close Page(즉시 Precharge→Page Miss 비용 균일, Page Hit 이득 없음) → 워크로드 매핑(스트리밍/순차접근→Open Page, 서버/랜덤접근→Close Page) → AE 연결(고객 워크로드 분석→컨트롤러 설정 추천)' },
      { id: 'tech-52', question: 'DRAM의 IDD 전류 파라미터(IDD0, IDD2P, IDD4R, IDD5)를 설명하시오. AE가 고객의 전력 분석에 이 데이터를 어떻게 활용하는가?', keywords: ['IDD0: Active-Precharge 전류', 'IDD2P: Precharge Powerdown 전류 (대기)', 'IDD4R: READ burst 전류', 'IDD5: Refresh 전류'], guideNotes: 'IDD 파라미터 정의(JEDEC 표준 측정 조건에서의 전류) → IDD0(ACTIVATE-PRECHARGE 반복, 기본 동작 전력) → IDD2P(Powerdown 대기, 최소 전력) → IDD4R/W(READ/WRITE burst, 최대 동작 전력) → IDD5(Refresh 전류) → AE 활용(고객 시스템 전력 예측: 워크로드별 각 상태 비율 × IDD값 = 총 전력) → 데이터시트 읽는 방법 안내' },
      { id: 'tech-53', question: 'Vref Training이란 무엇이고 왜 필요한가? DQ 신호의 판별 기준 전압이 잘못 설정되면 어떤 문제가 발생하는가?', keywords: ['Vref: 신호 High/Low 판별 기준 전압', 'Eye diagram에서 수직 중심선', '최적 Vref = Eye height의 정중앙', '잘못된 Vref → BER 증가, 간헐적 에러'], guideNotes: 'Vref 정의(DQ 신호를 1/0으로 판별하는 기준 전압) → 필요성(채널 조건에 따라 최적 Vref가 다름, 고정값으로는 마진 부족) → Training 과정(Vref 스윕하며 Pass/Fail 판별 → 최적값 설정) → 잘못된 Vref의 영향(Eye height 마진 감소→BER 증가→간헐적 데이터 에러) → DDR5에서의 변화(Host/DRAM 양쪽 Vref 독립 조정) → AE 연결(고객 시스템에서 Vref 마진 검증)' },

      // ── DRAM 동작 특성 심화 (AE 필수) ──
      { id: 'tech-54', question: 'DRAM의 주요 동작 상태(Active, Idle, Self-Refresh, Power-Down)와 상태 전이를 설명하시오. 각 상태에서의 전력 소비 차이는?', keywords: ['Active: Row 열림, Read/Write 가능', 'Idle (Precharged Standby): 대기, IDD2N', 'Power-Down: CKE Low, 최소 전력', 'Self-Refresh: 외부 클럭 없이 자체 Refresh'], guideNotes: 'Active 상태(ACTIVATE 후, Read/Write 가능, 전력 최대 IDD0) → Idle/Precharge Standby(Row 닫힘, 명령 대기, IDD2N) → Active Power-Down(CKE Low, Row 열린 채 저전력) → Precharge Power-Down(CKE Low, Row 닫힘, IDD2P) → Self-Refresh(외부 CK 불필요, DRAM 자체 Refresh, IDD6, 가장 저전력) → 전이 조건(CKE 핀으로 제어) → AE 관점(고객 시스템의 전력 프로파일에 따라 Power-Down 정책 추천)' },
      { id: 'tech-55', question: 'DDR5에서 Read burst 동작 시 DQ, DQS, CK 신호의 파형을 시간 순서대로 설명하시오. Prefetch 16n이 물리적으로 무엇을 의미하는가?', keywords: ['CK: 연속 클럭, 명령 동기화', 'READ 명령 후 tCL 클럭 뒤 DQS 토글 시작', 'DQ: DQS 양쪽 엣지에 데이터 전송 (DDR)', 'Prefetch 16n: 내부 16비트 → 외부 직렬 전송'], guideNotes: 'READ 명령 발행(CK 상승 엣지) → tCL 대기 → DQS 프리앰블(수신기 동기화) → DQS 토글 시작 + DQ 데이터 전송(DDR: 양쪽 엣지에 1비트씩) → Burst Length 16(16비트 연속 전송) → Prefetch 16n 의미(내부 배열에서 16비트를 한번에 읽어 I/O 핀으로 직렬 전송, 내부 클럭 < 외부 데이터레이트) → DDR4 8n과의 차이(DDR5는 2배 Prefetch → 더 높은 데이터레이트 가능) → AE 연결(파형 이해 → 오실로스코프 측정 시 무엇을 봐야 하는지)' },
      { id: 'tech-56', question: 'DDR 메모리에서 Fly-by topology란 무엇이고, T-branch 대비 장점은? Fly-by로 인해 발생하는 문제와 해결 방법은?', keywords: ['Fly-by: CK/CA가 DIMM 칩을 순서대로 경유', 'T-branch: 분기점에서 동시 도달 (stub 반사)', 'Fly-by 장점: stub 최소화 → SI 개선', 'Fly-by 문제: 칩별 CK skew → Write Leveling으로 보상'], guideNotes: 'T-branch(신호가 분기→동시 도달 목표, 실제로는 stub 반사 심각, 고주파에서 SI 열화) → Fly-by(신호가 칩을 순서대로 경유→stub 최소, SI 우수) → Fly-by 문제(첫 칩과 마지막 칩 사이 CK skew 발생→DQS-CK 정렬 불일치) → 해결(Write Leveling: 각 칩별 DQS-CK 딜레이 보정) → DDR3부터 Fly-by 채택 → AE 연결(DIMM 슬롯 위치별 마진 차이 이해, Training 결과 해석)' },
      { id: 'tech-57', question: 'MRS(Mode Register Set)에는 어떤 설정들이 있고, AE가 MRS를 조정하는 상황은 어떤 경우인가?', keywords: ['Burst Length, CAS Latency 설정', 'ODT 값 (RTT_NOM, RTT_WR, RTT_PARK)', 'DQ 드라이브 강도 (Ron)', 'Vref DQ 값, DFE tap 설정'], guideNotes: 'MRS 정의(DRAM 내부 Mode Register에 동작 파라미터 설정) → 주요 설정(MR0: Burst Length/CL, MR1: ODT/드라이브 강도, MR2: Write CL, MR3: Vref, MR5: DFE tap 등) → AE 조정 상황(고객 시스템 SI 마진 부족→ODT 값 변경, Eye 개선 필요→DFE tap 조정, Training 마진 확보→드라이브 강도 변경) → BIOS에서 MRS 설정 변경 방법 → 주의점(JEDEC 허용 범위 내에서만 조정, 부적절한 값→Training 실패 또는 동작 불안정)' },
      { id: 'tech-58', question: 'ZQ Calibration이란 무엇이고 왜 필요한가? PVT 변동과의 관계를 설명하시오.', keywords: ['ZQ 핀에 정밀 저항 연결 (240Ω)', 'DRAM 출력 드라이버 임피던스 보정', 'PVT 변동: 공정/전압/온도에 따라 임피던스 변화', 'ZQCL(Long)/ZQCS(Short) 명령'], guideNotes: 'ZQ Cal 목적(DRAM 출력 드라이버/ODT 임피던스를 정확히 맞추기) → 왜 필요(PVT: Process 편차, Voltage 변동, Temperature 변화 → 트랜지스터 특성 변화 → 임피던스 drift) → 동작(ZQ 핀의 외부 정밀 저항을 기준으로 내부 드라이버 임피던스 캘리브레이션) → ZQCL(초기화 시 긴 캘리브레이션) vs ZQCS(주기적 짧은 캘리브레이션) → SI 연결(임피던스 부정확→반사 증가→Eye 열화) → AE 연결(고온 환경에서 ZQ Cal 주기 조정 제안)' },
      { id: 'tech-59', question: 'DIMM의 Rank 구조(Single/Dual/Quad Rank)를 설명하시오. Rank 수가 Signal Integrity와 시스템 성능에 미치는 영향은?', keywords: ['Rank: 동시에 접근되는 DRAM 칩 그룹', 'Multi-rank: 용량↑, 대역폭 인터리빙 가능', 'Multi-rank SI: Stub 부하 증가 → Eye 열화', 'CS(Chip Select)로 Rank 선택'], guideNotes: 'Rank 정의(64bit 폭을 채우는 DRAM 칩 세트) → 1R(칩 8개, 용량 작음) → 2R(칩 16개, 용량 2배, Rank 인터리빙→대역폭↑) → 4R(LRDIMM, 서버용) → SI 영향(Rank 많을수록 버스 부하↑, stub 증가→Eye 열화→속도 제한) → ODT 설정(활성 Rank vs 비활성 Rank ODT 다르게 설정) → AE 연결(고객 시스템 Rank 구성별 최대 지원 속도 안내, 2DPC×2R 등 까다로운 구성에서 마진 검증)' },
      { id: 'tech-60', question: 'DDR5-4800 DIMM 2개를 Dual Channel로 구성했을 때 이론적 최대 대역폭을 계산하시오. 실측 대역폭이 이론의 60~70%인 경우 손실 원인을 분석하시오.', keywords: ['이론: 4800MT/s × 8Bytes × 2ch = 76.8GB/s', '실측 손실: Refresh penalty (~5-10%)', 'Page Miss penalty, 스케줄링 오버헤드', '소프트웨어: NUMA, 캐시 효과, 정렬'], guideNotes: '이론 계산(DDR5-4800: 4800MT/s × 64bit/8 = 38.4GB/s per ch, ×2ch = 76.8GB/s) → 실측 60-70%(~46-54GB/s) → 손실 분석: (1)Refresh(tRFC 동안 접근 불가, ~5-10% 손실) (2)Page Miss(tRP+tRCD 오버헤드) (3)Bank 충돌(같은 Bank 연속 접근 시 대기) (4)Command 오버헤드(ACTIVATE/PRECHARGE 명령 슬롯) (5)컨트롤러 스케줄링 효율 (6)SW(NUMA 미설정, 캐시 오염, 비정렬 접근) → AE 활용(Intel MLC로 측정, 원인별 대응 제안)' },
      { id: 'tech-61', question: 'DDR5의 서브채널(Sub-channel) 구조를 설명하시오. 기존 DDR4의 64-bit 단일 채널 대비 어떤 장점이 있는가?', keywords: ['DDR5: 32-bit × 2 독립 서브채널', 'DDR4: 64-bit 단일 채널', '서브채널 독립 동작 → 효율↑', 'Burst Length 16 × 32bit = 64Bytes (캐시라인)'], guideNotes: 'DDR4 구조(64-bit 단일 채널, 하나의 명령으로 64-bit 접근) → DDR5 변화(32-bit × 2 서브채널, 각각 독립적으로 명령 수신/실행) → 장점(1: 두 서브채널이 다른 주소 동시 접근→효율↑, 2: BL16×32bit=64B=캐시라인 정확히 일치, 3: 각 서브채널 독립 Refresh 가능) → 단점(컨트롤러 복잡도↑) → AE 관점(서브채널별 독립 마진 검증 필요, Training 결과도 서브채널별 분리 확인)' }
    ]
  }
}

export function pickRandom(pool, n = 1) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}

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
