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
          keywords: ['PPA 최적화 초기 실패 (Dadda tree 시도)', '논문/조언만으로는 부족했던 상황', '직접 실험으로 전환한 판단', '정답을 받아들이기보다 직접 찾아가는 태도'],
          guideNotes: '실패 상황(기존 방식으로 개선 못함) → 원인(공정/타이밍 제약 특수성) → 전환(직접 7가지 실험) → 교훈(조건에 맞는 최선의 해답을 끈기있게)'
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
      { id: 'tech-22', question: '컨퍼런스 기획에서 이해관계자 간 가치 차이를 어떻게 조율했나요?', keywords: ['운영진/후원사/참가자 각각 다른 가치', '코로나 → 비대면 전환 결정', '참가자: 사전 설문으로 니즈 파악', '후원사: 비용 절감 효과로 설득'], guideNotes: '상황(코로나 → S.LSI 후원 철회 위기) → 분석(각 이해관계자 니즈 파악) → 조율(참가자: 조별활동 중심, 후원사: 비용절감 설득) → 결과(14개교 68명, 새벽3시까지 토론) → 교훈(공동 목표 아래 각자 가치 존중)' }
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
