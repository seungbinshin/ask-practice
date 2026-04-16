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
          keywords: ['Full Stack AI Memory Creator 시대 + AE', '설계하며 대역폭 중요성 체감 + 실측에서 DRAM 대역폭 손실 절감', 'RTL~C언어~Python 다양한 레벨에서 같은 문제를 여러 관점으로', '고객 다변화 → 시스템 맥락 이해 + 하드웨어 문제 파악/소통'],
          guideNotes: '도입(Creator 시대 AE 지원) → 근거1(설계+실측에서 대역폭 중요성) → 근거2(RTL~C~Python 다레벨 시각) → 연결(고객 다변화 대응)'
        },
        {
          id: 'intro-2',
          question: '본인이 왜 이 회사에 적합한지, 입사 후 어떤 것이 목표인지 말씀해주세요.',
          keywords: ['회사 적합: SUPEX 정신 — 기대치 넘는 결과 추구 (라이브러리 7.08배)', '직무 적합: 3개국 3개 언어 기술 소통 (한국어/일본어/영어)', '상대방 기술 수준과 관심사에 맞춘 설명 능력', '목표: 고객 시스템 최적 메모리 동작 조건 도출'],
          guideNotes: '회사 적합(SUPEX 정신, 라이브러리 7.08배 사례) → 직무 적합(3개국 전시회 기술 소통) → 목표(기술 컨설턴트)'
        },
        {
          id: 'intro-3',
          question: '지원하신 직무에서 본인만의 강점은 무엇이라고 생각하시나요?',
          keywords: ['강점1: 시뮬레이션 — RTL~C언어~Python 다레벨 분석, 라이브러리 7.08배', '강점2: 소통 — 3개 언어 부스 운영, 기술 수준 맞춤 설명', 'AE 직무 연결: 메모리 동작 분석 + 검증 환경 구축', '두 강점 결합 시 기술적 가교로서 가장 큰 가치'],
          guideNotes: '강점1(시뮬레이션: RTL~C~Python, 라이브러리 7.08배) → 강점2(소통: 전시회 3개 언어) → AE 연결(기술적 가교 역할)'
        },
        {
          id: 'intro-4',
          question: '1분 동안 자기소개를 해주세요.',
          keywords: ['"소통할 줄 아는 엔지니어" 신승빈', 'HyperAccel: SW인턴→HW인턴→정규직, C시뮬레이터·RTL설계검증', 'RTL exact matching C언어 라이브러리 → 7.08배 속도 향상', '전시회 3개언어 부스 + 회사 안(SW·HW관점) 밖(고객소통) → AE'],
          guideNotes: '"소통할 줄 아는 엔지니어" → 약력(KAIST, HyperAccel) → 핵심성과(라이브러리 7.08배) → 전시회(3개언어) → 회사 안팎 관점 → AE 기여'
        },
        {
          id: 'intro-5',
          question: 'SK하이닉스에 지원한 동기와 본인을 한마디로 표현해주세요.',
          keywords: ['학부/인턴/정규직 거치며 SW·HW 다양한 view 경험', '고객과 소통하며 해결책 논의하는 순간에 가장 큰 보람', 'AE 직무 가닥 → SK하이닉스 SUPEX 정신과 일하는 방식 부합', '#소통으로기술의가능성을연결하는엔지니어'],
          guideNotes: '다양한 경험 축적(SW·HW) → 고객 소통에서 보람(전시회 사례) → AE 직무 확신 → SK하이닉스 이유(SUPEX 정신 부합) → 한마디'
        },
        {
          id: 'intro-6',
          question: '본인의 단점은 무엇이며, 어떻게 극복하고 있는가?',
          keywords: ['단점: 근본 원인 파고들다 긴급 대응 타이밍 놓칠 우려', '라이브러리 리팩토링 중 1~2bit 에러(rounding/누적로직/디코딩) 빈번', '우선순위 이원화: 스페어 브랜치 임시 대응 → 근본 분석 후 일괄 업데이트', 'CI 테스트 고도화(bit-wise/ULP/pytest) → AE 제품 검증·이슈 대응과 유사'],
          guideNotes: '단점(근본 원인 파고드는 성향→긴급 대응 지연 우려) → 사례(라이브러리 1~2bit 에러, 팀 대응 늦어짐) → 극복(우선순위 이원화: 임시대응+근본분석 분리, CI 테스트 고도화) → AE 연결(제품 출하 전 검증, 이슈 시 임시조치+체계적 분석 병행)'
        },
        {
          id: 'intro-7',
          question: '본인은 리더형인가 팔로워형인가? 그 성향이 AE 직무에 어떤 강점이 되는가?',
          keywords: ['"언제 리더가 되지 말아야 하는지 아는 것이 더 중요"', '컨퍼런스 리더 / RTL 배울때 팔로워 / 자동화·라이브러리 제안 리더', 'AE: 파라미터·메모리구성 제안 시 리더 ↔ 설계자·고객 전문성 존중 시 팔로워', 'SW·HW 이해도와 소통 능력이 역할 전환에 도움'],
          guideNotes: '"리더 되지 말아야 할 때를 아는 것" → 경험(컨퍼런스 리더, RTL 학습 팔로워, 자동화 리더) → AE 연결(제안 시 리더, 전문성 존중 시 팔로워) → SW·HW 이해도+소통'
        },
        {
          id: 'intro-8',
          question: 'HW 설계(RTL, 검증) 경험이 많은데 왜 설계가 아닌 AE에 지원했나요?',
          keywords: ['설계 중 가장 몰입: 병목 찾고 팀과 논의하며 해결 방향 맞추는 순간', '설계 직무에서는 소통·고객 접점 경험이 극도로 제한됨', '기술 역량을 고객 접점에서 실제 가치 창출에 직접 쓰고 싶음', '설계 경험은 포기가 아닌 AE 차별화 강점'],
          guideNotes: '몰입 순간(병목 분석+팀 논의) → 설계 한계(소통·고객 접점 제한) → 확신(가치 창출 욕구) → 결론(설계=AE 차별화 강점)'
        },
        {
          id: 'intro-9',
          question: '다른 반도체 회사가 아닌 SK하이닉스여야 하는 이유는 무엇인가요?',
          keywords: ['인재상: SUPEX — 최고 수준 추구, 라이브러리 7.08배 고도화와 부합', '제품: HBM 1위 + DDR5/LPDDR5X/CXL 전 제품군 리더십, 고객 다변화', '비전: Full Stack AI Memory Creator — Provider→Creator 전환', 'AE 역할 확장: 기술지원→기술 컨설턴트, 고객 아키텍처 이해 기반 공동 설계'],
          guideNotes: '축1(인재상 SUPEX — 기대치 넘는 결과 추구 사례) → 축2(제품 리더십 — HBM 1위, 고객 다변화로 AE 역할 넓음) → 축3(Creator 비전 — AE가 기술 컨설턴트로 확장, 본인 역량과 최적 부합)'
        }
      ]
    },
    newcoc: {
      label: 'New CoC',
      part: 1,
      timeLimitSec: 60,
      prepTimeSec: 60,
      pool: [
        {
          id: 'coc-1',
          question: 'SK하이닉스의 New CoC 중 Bar Raising(높은 기준 추구)을 본인 경험과 연결해 설명하시오.',
          keywords: ['Bar Raising: 현재 수준에 안주하지 않고 더 높은 기준 추구', '라이브러리 고도화: 검증용→시뮬레이터 범용, 7.08배 속도 향상', 'ULP 자동화: 84개→2,500개 커버리지 30배 확장', '기대치를 넘어서는 결과가 SUPEX 정신과 연결'],
          guideNotes: 'Bar Raising 정의 → 사례1(라이브러리: 동작 수준 넘어 구조 고도화) → 사례2(ULP: 목표 넘어 30배 확장) → 일하는 자세로 마무리'
        },
        {
          id: 'coc-2',
          question: 'SK하이닉스의 New CoC 중 Data Driven(데이터 기반 의사결정)을 본인 경험과 연결해 설명하시오.',
          keywords: ['Data Driven: 감이 아닌 데이터로 판단하고 결정', 'Streamlit 히트맵: 파라미터 선정을 정량적 근거로 전환', 'CI 테스트: bit-wise/ULP/pytest로 업데이트 무결성 데이터 확보', 'golden data 기반 검증 = 객관적 품질 보증'],
          guideNotes: 'Data Driven 정의 → 사례1(히트맵 기반 파라미터 선정) → 사례2(CI 테스트 고도화) → AE에서도 데이터 기반 고객 대응'
        },
        {
          id: 'coc-3',
          question: 'SK하이닉스의 New CoC 중 One Team(하나로 협업)을 본인 경험과 연결해 설명하시오.',
          keywords: ['One Team: 부서/역할 경계를 넘어 하나의 목표로 협업', '검증팀↔시뮬레이터팀: 라이브러리 공유로 코드 중복 해결, 지속 동기화', 'JAPAN IT WEEK: 통역사와 역할 분담, 기술/언어 영역 상호 보완', 'AE = 고객·설계팀·PE 사이 One Team의 중심'],
          guideNotes: 'One Team 정의 → 사례1(라이브러리: 두 팀 경계 넘는 협업) → 사례2(통역사 역할 분담) → AE 연결(팀 간 기술 가교)'
        },
        {
          id: 'coc-4',
          question: 'SK하이닉스의 New CoC 중 Innovation(더 작게, 쌓고, 저장)을 본인 경험과 연결해 설명하시오.',
          keywords: ['Innovation: 기존 방식에 머무르지 않고 구조적 혁신 추구', 'C언어 라이브러리: 코드 복사→공통 라이브러리 구조 전환, 근본적 혁신', 'softmax 최적화: 기존 설계에 개선점 제안→채택', 'Adder tree: 7가지 구조 직접 실험으로 최적 구조 발견'],
          guideNotes: 'Innovation 정의 → 사례1(라이브러리 구조 혁신) → 사례2(softmax 제안/채택) → 작은 혁신이 쌓여 큰 변화'
        },
        {
          id: 'coc-5',
          question: 'SK하이닉스의 New CoC 중 Customer Focus(고객 니즈 선제 파악)을 본인 경험과 연결해 설명하시오.',
          keywords: ['Customer Focus: 고객보다 앞서 생각하고 움직이는 자세', 'JAPAN IT WEEK: 참가 기업 사전 조사+기술 수준별 단계적 설명 준비', 'AI EXPO: 상대방이 궁금해하는 지점 파악→맞춤 설명', 'AE = 고객 페인포인트를 먼저 읽고 솔루션 제시하는 역할'],
          guideNotes: 'Customer Focus 정의 → 사례1(전시회: 사전 기업 조사, 기술 수준 맞춤 대응) → 사례2(시뮬레이터팀 어려움 선제 파악→라이브러리 제안) → AE 연결(고객 시스템 이해 기반 선제 대응)'
        },
        {
          id: 'coc-6',
          question: 'SK하이닉스의 New CoC 중 Perfection(디테일 집중, 어려울 때 강함)을 본인 경험과 연결해 설명하시오.',
          keywords: ['Perfection: 끝까지 완성도 100%를 추구, 디테일에 집중', 'CI 테스트: golden data 보호, bit-wise 정확도로 무결성 보장', '근본 원인 분석 습관: 1~2bit 에러도 임시 대응 후 반드시 근본 해결', 'AE = 제품 출하 전 다양한 환경에서 완벽 검증하는 파수꾼'],
          guideNotes: 'Perfection 정의 → 사례1(CI 테스트: bit-wise 수준 검증) → 사례2(임시 대응+근본 분석 이원화) → AE 연결(제품 강건성 최종 검증)'
        },
        {
          id: 'coc-7',
          question: 'SK하이닉스에서 일하며 본인이 느낄 행복은 무엇이라고 생각하나요?',
          keywords: ['몰랐던 것을 알게 되는 순간 — 앎의 즐거움', '여자친구와 영화 감상 나누기, 프로젝트 헤일메리 상변화 토론', '어려운 보드게임에서 전략 짜며 승부 — 승부욕', '승부욕 + 대화 + 앎의 즐거움 → 일에서도 동일하게 작동'],
          guideNotes: '개인적 행복(앎의 즐거움) → 구체 사례(헤일메리 상변화 대화, 영화 감상, 보드게임 승부) → 나를 움직이는 3가지(승부욕, 대화, 앎) → 일과의 연결(어려운 문제 파고들기, 관점 나누기)'
        },
        {
          id: 'coc-8',
          question: '회사 내에서 구성원의 행복을 위해 본인이 기여할 수 있는 것은 무엇인가요?',
          keywords: ['반복 업무 자동화로 구성원이 본질적 업무에 집중할 수 있는 환경 조성', '라이브러리/CI 경험: 팀 전체의 검증 효율 향상 → 야근 감소, 업무 만족도 증가', '체계적 소통 습관: 기대치 정렬+주기적 공유로 불필요한 재작업 방지', '지식 공유 문화: 내가 배운 것을 문서화하고 공유하여 팀 역량 상향'],
          guideNotes: '자동화(반복 업무 해방) → 소통(재작업 방지) → 지식 공유(팀 역량 상향) → 구성원이 본질에 집중할 때 행복해진다'
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
          keywords: ['시뮬레이터팀: RTL accurate 코드 작성 어려움, 검증코드 복사→동기화 문제', '근본 원인: 공유 라이브러리 부재 → 라이브러리화 제안', '검증용 넘어 시뮬레이터 병목 예상 → 구조 고도화', '7.08배 속도 향상 + 시뮬레이터팀-검증팀 소통으로 안정화'],
          guideNotes: '상황(시뮬레이터팀 어려움, 코드 중복·동기화 문제) → 원인(라이브러리 부재) → 행동(라이브러리화 제안+고도화) → 결과(7.08배) → 팀간 소통으로 안정화'
        },
        {
          id: 'exp-2',
          question: '본인이 맡은 일이나 과제 중에서 가장 최선을 다해 임했던 경험이 있다면 말씀해주세요.',
          keywords: ['C언어 시뮬레이션 라이브러리 고도화 (동일 사례, 최선 관점)', '단순 정리가 아닌 구조 재설계 결정 — 시뮬레이터 병목 예방', 'RTL exact matching + 속도 양립을 위해 반복 시도', '7.08배 달성, 검증팀+시뮬레이터팀 표준 채택 → 기대치 넘는 결과'],
          guideNotes: '시작(라이브러리화 제안) → 결정(단순 정리 넘어 구조 재설계) → 과정(RTL 정확도+속도 양립 반복 시도) → 결과(7.08배, 양팀 표준) → 교훈(기대치 넘는 자세)'
        },
        {
          id: 'exp-3',
          question: '새로운 환경에서 지식이나 기술을 학습하고 실제로 적용했던 경험이 있다면 말씀해주세요.',
          keywords: ['SW인턴→HW인턴 전환, 시스템 이해O 설계 경험X', 'MPE 서브블록 설계 중 방향 이탈 → 부족함 인정', '사수에게 적극 질문하며 학습 전환', 'MPE 온전히 설계 + softmax 최적화 제안·채택'],
          guideNotes: '상황(SW→HW 전환) → 시행착오(MPE 혼자 진행, 방향 이탈) → 전환(부족 인정, 사수에게 적극 학습) → 성과(MPE 설계 완성, softmax 최적화 제안·채택) → 교훈(모르면 인정+전문성 활용)'
        },
        {
          id: 'exp-4',
          question: '살면서 어려웠는데 극복한 경험이 있다면 말씀해주세요.',
          keywords: ['JAPAN IT WEEK: 일본어 기술 응대 + 통역사 기술베이스 없음', '준비: 참가기업 조사, 설명 대본, 기술수준별 단계별 설명 준비', '통역사와 역할 분담 (기술설명 직접 / 도움 요청 부분 구분)', 'NHN CLOUD Japan 기술통역, 미쓰비시 전기 내방 미팅 → 철저한 준비의 중요성'],
          guideNotes: '상황(JAPAN IT WEEK, 일본어 기술 응대 + 통역사 기술베이스 없음) → 준비(기업조사, 대본, 단계별 설명, 역할분담) → 실행(적응 후 무리없이 진행) → 성과(NHN CLOUD 기술통역, 미쓰비시 전기 미팅) → 교훈(철저한 준비)'
        },
        {
          id: 'exp-5',
          question: '실패를 겪고 그로부터 배운 점이 있다면 말씀해주세요.',
          keywords: ['MPE 서브블록 설계: 질문 주저 + 혼자 진행 → 전면 폐기', '원인: 할 수 있다는 자신감으로 사수에게 중간 확인 안 함', '교훈 → 4가지 원칙: 기대치 정렬, 문서화, 2~3일 중간검토, 사후피드백', 'AE = 소통 허브 → 혼자 판단하지 않는 습관이 기본자세'],
          guideNotes: '상황(MPE 설계, 아키텍처 이해 부족) → 잘못(질문 주저, 혼자 진행) → 결과(전면 폐기) → 성찰(근거 없는 자신감) → 변화(4가지 원칙) → AE 연결(소통 허브)'
        },
        {
          id: 'exp-6',
          question: '목표를 달성하기 위해 체계적으로 계획하고 실행한 경험이 있다면 말씀해주세요.',
          keywords: ['Streamlit 기반 ULP error 평가 자동화', '수작업 84개/4시간 → 자동화 2500개/2시간', '문제 정의 → 도구 설계 → 구현 → 팀 적용', '최고 수준의 목표 추구: 커버리지 30배 확장 (SUPEX 정신)'],
          guideNotes: '목표(수작업 분석 자동화) → 계획(문제 정의, 도구 설계) → 실행(Streamlit 도구 개발) → 결과(84→2500개, 30배 커버리지 확장) → 교훈(최고 수준 추구)'
        },
        {
          id: 'exp-7',
          question: '주도적으로 문제를 발견하고 해결한 경험이 있다면 말씀해주세요.',
          keywords: ['코드 중복 문제 발견: 검증팀↔시뮬레이터팀 독립 수정→동기화 실패', '시뮬레이터팀 어려움: RTL accurate 코드 직접 작성 힘듦→복사 의존', '구조적 해결: 공통 라이브러리화 제안 + 속도 고도화', '7.08배 성능 향상 + 팀간 소통으로 근본 해결'],
          guideNotes: '발견(코드 중복+동기화 문제) → 원인(라이브러리 부재, 복사 의존) → 해결(공통 라이브러리화 제안+고도화) → 결과(7.08배) → 의미(현상 아닌 구조에서 문제 찾기)'
        },
        {
          id: 'exp-8',
          question: '직무와 관련하여 어떤 툴이나 기술을 다뤄봤는지 설명해주세요.',
          keywords: ['Verilog/SystemVerilog RTL 설계 + 검증', 'C언어 RTL exact matching 시뮬레이션 라이브러리 (7.08배)', 'Python/Streamlit 자동화 도구 개발 (ULP 검증)', 'EDA 툴 (합성, 정적 타이밍 분석, 파형 뷰어)'],
          guideNotes: 'RTL 설계(Verilog, 합성 플로우) → C언어 라이브러리(RTL 모사, 7.08배) → Python 자동화(Streamlit ULP 커버리지) → EDA(합성, STA, 파형) → AE 연결(FPGA 검증, 자동화, 분석)'
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
        },
        {
          id: 'team-8',
          question: '검증 과정에서 동료가 테스트 결과 일부를 누락하거나 조작해서 일정에 맞추려는 것을 발견했습니다. 해당 동료와는 관계가 좋고, 프로젝트 일정도 매우 촉박한 상황입니다. 어떻게 하시겠습니까?',
          keywords: ['윤리 > 팀 분위기: 데이터 무결성은 고객 신뢰의 근간', '1:1 대화로 자발적 시정 기회 부여', '함께 해결책(일정 조정/범위 축소) 모색', '그래도 거부 시 상위 보고 — 팀을 지키는 것은 문제를 바로잡는 것'],
          guideNotes: '발견 즉시 동료에게 1:1 접근 → 위험성 설명(고객 신뢰, 품질 리스크) → 함께 바로잡을 방법 제안(일정 재협의, 범위 축소) → 자발적 시정 기회 → 거부 시 상위 보고 → "덮는 것이 아니라 바로잡는 것이 팀을 지키는 것"'
        },
        {
          id: 'team-9',
          question: '고객사 미팅에서, 자사 제품에 아직 해결되지 않은 기술적 한계를 본인만 알고 있습니다. 고객의 사용 조건에서 문제가 될 수 있지만, 영업팀은 이번 분기에 반드시 수주해야 한다고 압박합니다. 어떻게 하시겠습니까?',
          keywords: ['단기 매출 vs 장기 고객 신뢰 트레이드오프', '리스크를 정량화하여 조건부 공유', '영업팀에 먼저 내부 공유 → 함께 대응 전략 수립', '"이 조건에서는 검증 완료, 이 조건은 추가 검증 필요" 투명한 소통'],
          guideNotes: '무조건 폭로도 무조건 숨기기도 오답 → 리스크 정량화(어떤 조건에서 문제?) → 영업팀에 먼저 내부 공유 → 고객에게 투명하게 조건부 커뮤니케이션("검증 완료 범위 vs 추가 검증 필요 범위") → 대안/workaround 함께 제시 → 장기 신뢰가 단기 매출보다 가치'
        },
        {
          id: 'team-10',
          question: 'AE로서 고객 이슈를 분석한 결과, 설계팀의 변경이 필요하다고 판단했습니다. 그런데 설계팀은 "스펙 내 정상 동작"이라는 입장이고, 고객은 "해결 안 되면 다음 발주를 재검토하겠다"고 합니다. 양쪽 모두 기술적으로 일리가 있을 때 어떻게 하시겠습니까?',
          keywords: ['AE는 고객 대변인도 설계팀 대변인도 아닌 "기술적 중재자"', '고객 사용 조건에서의 마진 데이터로 양쪽 설득', '단기 workaround + 장기 설계 개선 분리 제안', '비즈니스 임팩트를 기술 조직에 번역하는 소통력'],
          guideNotes: '양쪽 입장 모두 경청(스펙 내 정상 맞지만 고객 조건에서 마진 부족 가능) → 고객 환경 데이터 수집/재현 → 정량적 마진 분석으로 양쪽에 공유 → 단기(workaround 제안)와 장기(설계 반영 건의) 분리 → 양쪽 모두 win 구조 → AE의 본질: 기술적 가교'
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
      // ── ① AE 역할 & 호환성 검증 ──
      { id: 'tech-1', question: 'AE 직무에서 메모리 반도체의 호환성 검증이 중요한 이유는?', keywords: ['메모리는 단독 동작X, 고객 CPU/GPU/시스템 위에서 구동', '환경마다 HW구조·OS 다름 → 모든 환경 오류없이 성능 발휘 확인', '미검증 출하 시 대규모 리콜·고객 신뢰 하락', 'AE가 다양한 시나리오에서 시스템 테스트 수행하여 사전 차단'], guideNotes: '정의(호환성 검증=고객 시스템 환경에서 메모리 정상 동작 확인) → 왜 중요(고객마다 CPU/GPU/OS/보드 다름→같은 DIMM도 환경에 따라 다르게 동작) → 리스크(미검증→리콜, 신뢰 하락) → AE 역할(실장평가로 사전 차단) → SK하이닉스 맥락(고객 다변화: NVIDIA/Google/AMD/MS 각각 다른 아키텍처→AE 중요성 급증)' },
      { id: 'tech-2', question: '시스템 레벨에서 발생하는 문제와 단품 레벨 문제의 차이점은?', keywords: ['단품: DRAM 칩 자체 공정 결함/설계 오류 → 전기적 특성 불량', '시스템: 메모리 정상인데 메인보드 설계/전원 불안정/드라이버 충돌로 복합 오류', 'AE는 원인이 메모리인지 시스템인지 구분하는 능력 필수', '오실로스코프 파형 분석 + 시스템 로그 확인으로 정밀 분석'], guideNotes: '단품 불량(셀 결함, 회로 설계 오류→PE가 주로 담당) → 시스템 불량(메모리 정상+시스템 환경 문제: 전원, PCB SI, 드라이버→AE 영역) → 구분 방법(DIMM 교체 테스트, 슬롯 변경, 오실로스코프 파형, Training log) → 핵심(AE는 시스템 전체 흐름을 봐야 정확한 원인 파악 가능) → 본인 경험 연결(MPU-VPU mismatch 분석 시 시스템 레벨 사고)' },
      { id: 'tech-3', question: 'AE(Application Engineer)의 구체적 역할과 PE(Product Engineer)와의 차이는?', keywords: ['AE = 시스템 레벨 최종 검증 (실장평가), "화룡점정"', 'PE = 단품 수준 제품 안정화/수율 관리', 'AE: 고객 시스템 환경에서 동작 검증 + FW/BIOS/FPGA 솔루션 개발', '양산 전 잠재 불량 제거, 고객 기술 인터페이스'], guideNotes: 'AE 역할(양산 직전 시스템 레벨 최종 검증, 실장평가) → 구체 업무(온도/전압/구동시간 변수별 메모리 동작 검증, 불량 원인 파악, 응용 Solution 개발) → PE 차이(PE: 웨이퍼 수율, 공정 최적화, 단품 안정화 / AE: 고객 시스템 레벨) → SK하이닉스 AE(본사 AE: 실장평가+솔루션 / 해외 FAE: 고객 접점 기술 인터페이스) → AE 채용 확대 이유(고객 다변화, cHBM, 제품 복잡도 증가)' },
      { id: 'tech-4', question: 'SK하이닉스가 지금 AE를 적극 채용하는 이유는?', keywords: ['AI 메모리 시장 폭발 (HBM 수요 130%+ 성장)', '고객 다변화 → 고객별 맞춤 기술 지원 필요', 'cHBM 전환 → 표준품에서 맞춤형으로', '제품 복잡도 증가 (DDR5, LPDDR6, HBM4, CXL, PIM)'], guideNotes: '시장(AI 메모리 폭발, HBM 수요 130%+ 성장) → 고객 다변화(NVIDIA→구글/AWS/MS/AMD/Meta, 각 아키텍처 다름→전담 AE 필요) → cHBM(범용→맞춤형, 고객 공동설계→AE 역할 확대) → 제품 복잡도(DDR5/LPDDR6/HBM4/CXL/PIM 동시 전개) → 조직개편(2026 미주 HBM 전담 조직 신설)' },
      { id: 'tech-5', question: 'AE 업무에서 가장 중요한 역량은? 본인 경험과 연결하시오.', keywords: ['시스템 레벨 사고 (다층적 문제 분석)', '고객 소통 (기술을 고객 언어로 전달)', '문제 해결 (데이터 기반 체계적 접근)', '끈기 (정답 없는 상황에서 최선의 해답 도출)'], guideNotes: '역량1: 시스템 사고(메모리 단품이 아닌 시스템 전체 맥락→본인: MPU-VPU mismatch 분석) → 역량2: 소통(기술→고객 언어 전달→본인: AI EXPO/JAPAN IT WEEK 3개 언어 부스) → 역량3: 문제해결(데이터 기반→본인: PPA 7가지 구조 실험, Streamlit 자동화) → 역량4: 끈기→AE 연결(기술 외교관 마인드셋)' },
      // ── ② DRAM 기초 & 동작 ──
      { id: 'tech-10', question: 'DRAM 셀의 동작 원리를 설명하시오. (1T1C 구조)', keywords: ['1T1C (1 Transistor + 1 Capacitor)', 'Capacitor 전하 저장/누설', 'Dynamic = Refresh 필요', 'ACTIVATE → READ/WRITE → PRECHARGE → REFRESH'], guideNotes: '1T1C 구조 설명(트랜지스터=스위치, 캐패시터=저장) → 왜 Dynamic인지(누설 → Refresh) → 4대 동작 흐름(ACTIVATE로 Row 열기 → Column 접근 → PRECHARGE로 닫기 → 주기적 REFRESH) → Sense Amplifier 역할' },
      { id: 'tech-11', question: 'DRAM에서 Refresh가 왜 필요한가요? tREFI와 tRFC를 설명하시오.', keywords: ['Capacitor 전하 누설 → 데이터 손실', 'tREFI: Refresh 명령 간격 (~7.8μs)', 'tRFC: Refresh 완료 시간', '64ms 이내 모든 row 재충전'], guideNotes: 'Capacitor 누설 원리 → Refresh 필요성(64ms 이내 전체 row) → tREFI(명령 간격, ~7.8μs) → tRFC(Refresh 소요 시간) → 고온시 tREFI 절반(32ms) → 성능 영향(Refresh 중 접근 불가)' },
      { id: 'tech-12', question: 'DRAM의 주요 타이밍 파라미터(tCL, tRCD, tRP, tRAS)를 설명하고 관계를 수식으로 표현하시오.', keywords: ['tCL: CAS Latency (READ→데이터 출력)', 'tRCD: ACTIVATE→READ/WRITE 최소 시간', 'tRP: Row Precharge (Row 닫기)', 'tRAS ≥ tRCD + tCL (Row 활성 최소 시간)'], guideNotes: 'tCL(READ→첫 데이터 출력 클럭 수) → tRCD(ACTIVATE→READ/WRITE 대기) → tRP(PRECHARGE 소요) → tRAS(Row 활성 유지 최소, tRAS≥tRCD+tCL) → Page Miss latency(tRP+tRCD+tCL) vs Page Hit(tCL만) → AE(고객 시스템 최적 타이밍 프로파일 제안)' },
      { id: 'tech-13', question: 'Bank Group이 왜 필요한가요?', keywords: ['Bank간 데이터 충돌 방지', '서로 다른 BG의 Bank는 독립 접근', 'tCCD_S < tCCD_L', 'DDR4: 4BG, DDR5: 8BG'], guideNotes: '같은 BG 내 Bank 접근 = 긴 지연(tCCD_L) → 다른 BG 접근 = 짧은 지연(tCCD_S) → 인터리빙으로 대역폭 향상 → DDR5에서 BG 2배로 증가한 이유' },
      { id: 'tech-14', question: 'Row Hammer란 무엇이고, 어떻게 대응하나요?', keywords: ['인접 Row 반복 활성화 → 비트 플립', '20nm 이후 심각', 'TRR (Target Row Refresh)', 'ECC로 검출/교정'], guideNotes: 'Row Hammer 현상(인접 row 반복 ACTIVATE → 전하 간섭 → 비트 플립) → 왜 심각해지나(미세공정화) → 대응(TRR, pTRR, ECC) → 보안 이슈(Rowhammer 공격)' },
      { id: 'tech-15', question: '메모리 컨트롤러와 DRAM 사이의 통신 과정을 간단히 설명해주십시오.', keywords: ['컨트롤러 = CPU 명령 받아 DRAM 제어하는 지휘소', '주소+명령(READ/WRITE) 전송 → DRAM이 해당 위치 데이터 출력', '타이밍 규약(tCL, tRCD 등) 엄격 준수 필수', 'AE: 컨트롤러-DRAM 타이밍 최적 튜닝'], guideNotes: '컨트롤러 역할(CPU↔DRAM 중재) → 통신 흐름(ACTIVATE→Row열기→Column접근→READ/WRITE→PRECHARGE) → 타이밍 규약(정해진 대기 시간 미준수→데이터 충돌/유실) → 고속 동작 시 미세 오차도 에러 유발 → AE(파라미터 튜닝으로 최적 동작 조건 도출)' },
      { id: 'tech-16', question: '메모리 채널과 랭크의 개념을 시스템 구성 관점에서 설명하시오.', keywords: ['채널: CPU↔메모리 독립 데이터 통로, 많을수록 대역폭↑', '랭크: 한 채널 내 동시 동작하는 DRAM 칩 묶음', '잘못된 구성→간섭, 속도 저하', 'AE: 모듈 배치와 설정값 가이드'], guideNotes: '채널(독립 데이터 통로, 멀티채널→대역폭 증가) → 랭크(64bit 폭 채우는 DRAM 칩 세트, Multi-rank→용량↑+인터리빙) → SI 영향(Rank 많을수록 버스 부하↑→Eye 열화→속도 제한) → AE(고객 시스템 Rank 구성별 최대 지원 속도 안내, 2DPC×2R 등 까다로운 구성 마진 검증)' },
      // ── ③ DDR4/DDR5 인터페이스 ──
      { id: 'tech-20', question: 'DDR4와 DDR5의 핵심 차이점은?', keywords: ['Data rate: 3200 vs 6400+ MT/s', '전압: 1.2V vs 1.1V', '채널: 64bit 단일 vs 32bit×2 서브채널', 'On-die ECC, On-DIMM PMIC 탑재'], guideNotes: '속도(DDR4 3200→DDR5 6400+ MT/s) → 전압(1.2V→1.1V) → 구조(서브채널 2개, Bank 16→32) → 신기술(On-die ECC, PMIC 온보드화) → AI 워크로드 대역폭 요구' },
      { id: 'tech-21', question: 'DDR5의 서브채널(Sub-channel) 구조를 설명하시오. DDR4 대비 장점은?', keywords: ['DDR5: 32-bit × 2 독립 서브채널', 'DDR4: 64-bit 단일 채널', '서브채널 독립 동작 → 효율↑', 'BL16 × 32bit = 64Bytes (캐시라인 정확 일치)'], guideNotes: 'DDR4(64-bit 단일 채널) → DDR5(32-bit × 2 서브채널, 독립 명령/실행) → 장점(다른 주소 동시 접근→효율↑, BL16×32bit=64B 캐시라인 일치, 독립 Refresh) → AE(서브채널별 독립 마진 검증, Training 결과 분리 확인)' },
      { id: 'tech-22', question: 'DDR5 On-die ECC가 도입된 이유와 시스템 ECC와의 차이, 한계는?', keywords: ['셀 미세화 → 내부 에러율 증가', 'On-die: DRAM 내부 자체 교정 (128→136 bit)', '시스템 ECC: 컨트롤러에서 SECDED', 'On-die 한계: 외부에서 교정 관찰 불가(Silent correction)'], guideNotes: 'On-die ECC 배경(미세공정→셀 에러율 증가) → 동작(128bit+8bit ECC=136bit 내부 처리) → 시스템 ECC 차이(On-die=DRAM 내부 투명/시스템 ECC=컨트롤러 추가) → 한계(Silent correction→실패율 추적 어려움) → AE(에러율 리포팅 방법 안내)' },
      { id: 'tech-23', question: 'DDR5에서 PMIC가 모듈 내부에 탑재되면서 AE가 고려해야 할 사항은?', keywords: ['DDR5: 12V→On-DIMM PMIC가 1.1V 변환', 'DDR4: 메인보드 VRM이 1.2V 직접 공급', '이점: 전압 정밀도↑, IR drop↓', 'AE: PMIC 호환성, 발열, 전압 마진 테스트'], guideNotes: 'DDR4(메인보드 VRM→긴 트레이스→IR drop) → DDR5(12V→On-DIMM PMIC→1.1V, 전달거리 최소화) → 전압 레일(VDD 1.1V 코어, VDDQ 1.1V I/O, VPP 1.8V 워드라인) → AE 과제(PMIC 호환성, 발열, 전압 마진)' },
      { id: 'tech-24', question: '서버 메모리에서 ECC(에러 교정 코드)가 왜 필수적인가?', keywords: ['서버 24/7 가동, 우주 방사선/전기적 잡음 → 비트 플립', 'ECC가 미세 오류 탐지+자동 수정 → 시스템 무중단 보장', 'AE: ECC 기능이 고객 보드/컨트롤러에서 정상 작동 확인', '미작동 시 금융/클라우드 데이터 오염 → 막대한 피해'], guideNotes: 'ECC 필요성(서버 365일 가동, 우주선/잡음→비트 플립) → 동작(SECDED: 1비트 교정, 2비트 검출) → AE 역할(ECC 정상 작동 확인, 에러 로그 정확히 남는지 검증) → On-die ECC + 시스템 ECC 이중 보호(DDR5) → 중요성(데이터 무결성=서버 신뢰의 근간)' },
      // ── ④ Signal Integrity 기초 ──
      { id: 'tech-30', question: 'Eye diagram에서 무엇을 분석하나요?', keywords: ['Eye width = 타이밍 마진', 'Eye height = 전압 마진', 'Jitter, ISI 영향', 'BER 기반 마진 판단'], guideNotes: 'Eye diagram 정의(오버레이된 비트 전이 파형) → Eye width(타이밍 마진) → Eye height(전압 마진) → 열화 요인(Jitter, ISI, Crosstalk) → AE 실무(Eye mask 기준, BER)' },
      { id: 'tech-31', question: 'ODT(On-Die Termination)란 무엇이고 왜 중요한가?', keywords: ['DRAM 다이 내부 종단 저항', '신호 반사 억제 → 임피던스 매칭', 'DDR4/5: 프로그래밍 가능 (RTT_NOM, RTT_WR, RTT_PARK)', 'AE: 고객 시스템 SI 마진 부족 시 ODT 값 조정'], guideNotes: 'ODT 정의(다이 내부 종단) → 왜 필요(전송선 끝 임피던스 불일치→반사) → 반사 영향(Eye 열화, 타이밍 위반) → MRS로 설정(RTT_NOM, RTT_WR, RTT_PARK) → AE(SI 이슈 시 ODT 조정이 1차 대응)' },
      { id: 'tech-32', question: '전송선에서 신호 반사는 언제 발생하나요?', keywords: ['임피던스 불연속점 (Via, 커넥터, 분기점)', '반사 계수 Γ = (ZL-Z0)/(ZL+Z0)', '개방(ZL=∞): 양반사, 단락(ZL=0): 음반사', 'DDR5 주파수에서 모든 트레이스가 전송선'], guideNotes: '전송선(특성 임피던스 Z0) → 반사 조건(Z 불연속: via, 커넥터, stub) → 반사 계수 공식 → DDR5 3.2GHz+에서 모든 트레이스가 전송선 → 해결(임피던스 매칭, ODT)' },
      { id: 'tech-33', question: '신호 무결성(Signal Integrity)이 시스템 응용에서 중요한 이유는?', keywords: ['신호 무결성 = 전기 신호가 왜곡/감쇄 없이 정확히 도달', '고속화로 간섭/노이즈 → 데이터 오류 빈번', 'AE: 고객 메인보드 패턴이 하이닉스 메모리와 통신 적합한지 분석', '신호 깨끗하지 않으면 아무리 좋은 메모리도 성능 발휘 불가'], guideNotes: 'SI 정의(전기 신호 왜곡/감쇄 없이 도달) → 왜 중요(고속화→간섭·노이즈→데이터 에러) → AE 역할(고객 보드 패턴 적합성 분석, 신호 품질 확보) → 면접 리뷰 참고(오실로스코프 파형 보여주며 SI 문제 지점 찾는 돌발 퀴즈 출제됨)' },
      // ── ⑤ Memory Training & BIOS ──
      { id: 'tech-40', question: 'Memory Training 중 Write Leveling의 목적은?', keywords: ['DQS와 CK의 타이밍 정렬', 'Fly-by topology에 의한 skew 보상', 'DDR3부터 도입', 'BIOS POST 과정에서 수행'], guideNotes: 'Fly-by topology(CK가 DIMM 슬롯 순서대로 전달→skew) → Write Leveling(DQS-CK 정렬) → 동작(DQS 토글→CK 상승 엣지 감지→딜레이 조정) → 다른 Training과의 관계' },
      { id: 'tech-41', question: 'BIOS POST 과정에서 메모리 Training 순서와 각 단계의 목적은?', keywords: ['SPD 읽기 → MRS 설정', 'Write Leveling (DQS-CK 정렬)', 'Read/Write Training (DQ-DQS 최적화)', 'Vref Training (기준 전압 캘리브레이션)'], guideNotes: 'SPD 읽기(DIMM 사양 파악) → MRS 설정 → Write Leveling(fly-by skew 보상) → Read/Write Training(DQ-DQS 정렬) → Vref Training(신호 판별 기준 전압) → 순서 중요(이전 단계가 다음의 전제)' },
      { id: 'tech-42', question: 'SPD(Serial Presence Detect)란 무엇이고 어떤 정보를 담고 있는가?', keywords: ['DIMM EEPROM에 저장된 사양 정보', '타이밍, 전압, 용량, 제조사, 온도 등급', 'BIOS가 SPD 읽어 자동 설정', 'XMP/EXPO 프로필도 SPD 내 저장'], guideNotes: 'SPD 정의(DIMM 내 EEPROM) → 정보(타이밍, 전압, 용량, CL 목록, 제조사, 온도 등급) → BIOS 활용(자동 설정) → XMP/EXPO(오버클럭 프로필) → AE(호환성 검증, SPD로 최적 조건 탐색)' },
      { id: 'tech-43', question: 'Shmoo Plot이란 무엇이며, AE가 실장평가에서 어떻게 활용하는가?', keywords: ['전압 × 타이밍 2D Pass/Fail 맵', '동작 마진 시각화', '마진 좁으면 → 불안정 리스크', 'PVT 코너별 Shmoo 비교'], guideNotes: 'Shmoo Plot(X=타이밍, Y=전압, Pass/Fail) → 목적(동작 마진 시각화) → AE 활용(마진 넓이로 안정성 판단, PVT 코너별 비교) → 마진 부족 시(타이밍 조정, 전압 변경, PCB 개선 제안)' },
      { id: 'tech-44', question: '고객이 BIOS 업데이트 후 특정 DIMM에서만 Training 실패를 보고했습니다. 디버깅 방법은?', keywords: ['BIOS 변경 이력 확인 (MRS, 타이밍 변경)', 'Training log 분석 (어느 단계에서 실패?)', 'DIMM 교체/슬롯 변경으로 격리 테스트', 'Shmoo Plot 비교 (이전 vs 현재 BIOS)'], guideNotes: '정보수집(BIOS 변경내용, DIMM 사양, 슬롯) → Training log(Write Leveling? Vref?) → 격리(DIMM 교체, 슬롯 변경) → Shmoo 비교(이전 vs 현재) → 원인(MRS/ODT/타이밍 변경) → 대응(BIOS 팀 협업, 권장값 제시)' },
      { id: 'tech-45', question: '메모리 검증 도구들(memtest86, Intel MLC, PMU Training log)의 역할과 차이는?', keywords: ['memtest86: 하드웨어 레벨 메모리 에러 검출', 'Intel MLC: 대역폭/지연시간 벤치마크', 'PMU Training log: 컨트롤러 학습 과정 추적', '증상별 도구 선택: 에러→memtest, 성능→MLC, Training→PMU'], guideNotes: 'memtest86(OS 없이 패턴 테스트, HW 결함 검출) → Intel MLC(대역폭/지연 측정, 성능 분석) → PMU Training log(Training 과정 기록, 문제 단계 파악) → AE 실무(증상별 적합 도구 선택)' },
      // ── ⑥ 고객 대응 & 디버깅 (real interview core) ──
      { id: 'tech-50', question: '고객 시스템에서 메모리 불량 보고 시 가장 먼저 취해야 할 조치는?', keywords: ['고객으로부터 환경 데이터+증상 수집, 재현 테스트', '불량 발생 SW/HW 구성 파악 → 문제 범위 좁히기', '재현 성공 시 내부 정밀 분석 + 임시 해결책 병행', '고객 라인 멈추지 않도록 빠른 초동 대응이 핵심'], guideNotes: '1단계(환경 데이터+증상 수집) → 2단계(재현 테스트) → 3단계(범위 좁히기: 특정 SW/HW 구성?) → 4단계(재현 성공→내부 정밀 분석+임시 workaround 병행) → 5단계(설계/공정 피드백) → 핵심(고객 라인 멈추지 않게 빠른 대응)' },
      { id: 'tech-51', question: '메모리 장애 발생 시 디버깅 절차를 설명해주세요.', keywords: ['증상 분류 (부팅 불가/간헐적 에러/성능 저하)', '로그 확인 (Training log, 이벤트 로그)', 'Shmoo Plot으로 마진 확인', '환경 변수 격리 (온도, 전압, 슬롯 위치)'], guideNotes: '증상 파악(부팅 불가 vs 간헐적 vs 성능 저하) → 로그(BIOS Training log, OS 이벤트) → 환경 격리(DIMM 교체, 슬롯, 온도/전압) → Shmoo Plot → 재현 조건 → 원인 특정 후 대책' },
      { id: 'tech-52', question: '재현되지 않는 간헐적 오류가 발생했을 때 어떻게 대처하겠습니까?', keywords: ['시스템 로그 최대한 수집하여 패턴 탐색', '가혹 조건 시나리오로 강제 재현 시도', '사내 기술 DB 검색 + 관련 부서 협력', '고객에게 투명 공유 + 임시 안전 설정값 제안'], guideNotes: '로그 수집(패턴 탐색: 온도? 전압? 특정 명령 조합?) → 가혹 조건(고온, 전압 변동, 스트레스 패턴) → 유사 사례 DB 검색 → 고객 소통(투명 공유+임시 설정값) → 포기 않고 데이터 연관성 추적→AE 전문성' },
      { id: 'tech-53', question: '고객사 제품 인증(Qualification) 과정이 지연될 경우 어떻게 대처하겠습니까?', keywords: ['인증 지연 = 고객 출시 차질 → 매출 손실', '기술 오류면 개발팀과 최우선 해결 패치', '환경 차이면 테스트 환경 동기화', '진행 상황 투명 공유로 신뢰 유지'], guideNotes: '영향(고객 출시 지연→매출/점유율) → 원인별 대응(기술 오류→개발팀 협업+긴급 패치+현장 상주 / 환경 차이→테스트 환경 동기화) → 소통(투명한 진행 공유→신뢰 유지) → 모든 자원 동원하여 지연 최소화' },
      { id: 'tech-54', question: '고객이 타사 제품과 비교하며 성능 문제 제기 시 어떻게 대응하겠습니까?', keywords: ['감정적 대응 대신 객관적 벤치마킹 데이터 확보', '테스트 환경이 우리 제품 특성 최적인지 먼저 확인', '부족한 항목은 겸허히 인정 + 개선 일정/대안 제시', '성능 수치 넘어 안정성/신뢰성 가치 강조'], guideNotes: '데이터 기반(객관적 벤치마킹) → 환경 확인(우리 제품 최적화 설정인지?) → 가이드(최적화 필요 부분 직접 지원) → 부족하면 인정+개선안 → 안정성/신뢰성/장기 파트너십 가치 어필 → 불만을 개선 기회로' },
      { id: 'tech-55', question: '고객이 불가능한 사양 수정을 요구할 때 어떻게 대처하겠습니까?', keywords: ['설계 가이드라인과 공정 능력 벗어나지 않는지 판단', '기술적 한계 투명히 알리고 대안 제시', '하이닉스 기술 원칙 지키며 고객 비즈니스 가치 극대화', '기술 외교관: 고객 편에서 문제 해결하되 회사 입장도 대변'], guideNotes: '면접 리뷰 핵심(까다로운 고객 대응="기술 외교관" 태도 중요) → 판단(품질/신뢰성 영향? 공정 능력 내?) → 합리적이면 적극 검토+내부 협의 → 한계 시 투명 설명+기술적 대안 → 회사와 고객 사이 균형' },
      { id: 'tech-56', question: 'AE 엔지니어로서 기술 문서 작성 시 가장 주의해야 할 점은?', keywords: ['모호한 표현 없이 명확·객관적 수치와 근거 기반', '표준화된 용어, 제약사항/권장값 강조', '기술 한계·문제 숨기지 않고 정확한 현상+대안 제시', '잘 작성된 문서 = 불필요한 문의 감소 + 고객 개발 속도 향상'], guideNotes: '명확성(객관적 수치, 표준 용어) → 안전성(제약사항/권장값 강조→오류 방지) → 투명성(문제 숨기지 않고 현상+대안→고객 신뢰) → 효과(좋은 문서 = 기술 지원 문의↓, 고객 개발 속도↑)' },
      // ── ⑦ 전력 & 열 관리 (real interview theme) ──
      { id: 'tech-60', question: '메모리 전력 소모를 줄이기 위해 시스템 레벨에서 할 수 있는 노력은?', keywords: ['유휴 시 저전력 모드(Self-Refresh, Power-Down) 빠른 진입', '동작 전압 미세 조정으로 전력 효율 극대화', 'AE: 고객 전원 관리 설정과 메모리 저전력 기능 연동 검증', '모바일/데이터센터에서 작은 전력 차이 = 배터리/운영비 막대한 영향'], guideNotes: '저전력 모드(Self-Refresh, Power-Down, DPD) → 전압 조정 → AE(고객 전원 관리↔메모리 저전력 연동 검증) → 데이터센터(운영비), 모바일(배터리) → LPDDR5 PASR(부분 Refresh→50%+ 절감)' },
      { id: 'tech-61', question: '고온/저온 환경에서의 시스템 테스트가 AE 직무에 포함되는 이유는?', keywords: ['고온: 전하 누설 심화 → 데이터 유지 시간↓', '저온: 신호 전달 속도/임계 전압 변화', 'AE: 온도 챔버로 극한 환경에서 성능/전력 측정', '차량용(-40~125°C) 등 극한 온도 필수 검증'], guideNotes: '고온(전하 누설↑→Retention↓→Refresh 마진 줄어듦) → 저온(전달 속도/임계전압 변화) → AE(온도 챔버 활용, 극한에서 성능/전력/안정성 측정) → 차량용(AEC-Q100 Grade1: -40~125°C) → 데이터센터(발열 집중)' },
      { id: 'tech-62', question: '병목 현상의 개념과 메모리 관점에서 해결 방안은?', keywords: ['시스템 특정 구성 요소 성능↓ → 전체 속도 제한', 'CPU 연산 속도를 메모리 전송이 못 따라가는 상황', '해결: 동작 속도↑, 대역폭↑, 컨트롤러 효율↑', '혁신: PIM으로 데이터 이동 자체를 줄임'], guideNotes: '병목 정의(특정 구성 요소가 전체 성능 제한) → 메모리 병목(CPU↔DRAM 대역폭 부족) → 해결(속도↑, 대역폭↑, 컨트롤러 최적화, 데이터 배치 최적화) → 혁신(PIM: 데이터 이동 자체 제거) → SK하이닉스(HBM, PIM, CXL로 Memory Wall 극복)' },
      { id: 'tech-63', question: '대역폭과 Latency 중 어떤 것이 더 중요한가?', keywords: ['애플리케이션 특성에 따라 우선순위 다름', 'AI/빅데이터 → 대역폭, 게이밍/금융 → Latency', 'AE: 고객 워크로드 파악 → 최적 타협점 제시', '트레이드오프 관계 → 시스템 아키텍처 맞는 메모리 설정'], guideNotes: '대역폭 중요(AI, 빅데이터: 대량 데이터 처리) → Latency 중요(게이밍, 금융: 실시간 반응) → 트레이드오프(고속→Latency↑) → AE 역할(고객 워크로드 분석→최적 타협점→제품 라인업 매칭)' },
      // ── ⑧ HBM & 차세대 메모리 ──
      { id: 'tech-70', question: 'HBM의 구조와 기존 DDR 대비 장점은?', keywords: ['TSV로 다이 수직 적층, 베이스 로직 다이', '1024-bit 와이드 인터페이스, >1TB/s 대역폭', '2.5D 패키징 (CoWoS 인터포저)', '전력 효율 우수 (짧은 TSV 경로)'], guideNotes: 'HBM 구조(TSV 적층, 베이스 로직 다이) → 와이드 인터페이스(1024-bit) → 대역폭(DDR5의 ~30배+) → 2.5D(CoWoS 인터포저) → AI 가속기 핵심 이유 → HBM3E(9.8Gbps, 12Hi 36GB) → HBM4(11.7Gbps, 16Hi 48GB, 2026.2 양산)' },
      { id: 'tech-71', question: 'cHBM이란 무엇이고 표준 HBM과 어떻게 다른가?', keywords: ['JEDEC 표준 외 고객 맞춤 HBM', '핀 수 감소 → 다이 면적 25% 추가 로직', 'I/O 전력 70%+ 절감', 'Provider→Creator 전환의 핵심'], guideNotes: 'cHBM(Custom HBM, JEDEC 벗어남) → 차이(핀 감소→면적 활용, 전력 절감) → 왜 필요(고객별 아키텍처 다름) → 주요 고객(NVIDIA, MS, Broadcom) → AE 역할 변화(표준 지원→맞춤 설계 컨설팅)' },
      { id: 'tech-72', question: 'HBM3E와 HBM4의 핵심 차이를 설명하고, AI 가속기 시장에 미치는 영향을 논의하시오.', keywords: ['HBM3E: 9.8Gb/s/pin, 12Hi 36GB', 'HBM4: 11.7Gbps, 16층 48GB, 2026.2 양산', 'HBM4: 로직 다이에 커스텀 로직 가능', 'SK하이닉스 HBM 점유율 62%'], guideNotes: 'HBM3E(9.8Gbps, 12Hi 36GB, 양산 중) → HBM4(11.7Gbps, 16Hi 48GB, 로직 다이 커스텀) → cHBM 연결(HBM4에서 커스텀 확대) → 시장(SK하이닉스 62% 점유, 엔비디아 물량 71%) → HBM4E(2027, 시장 40%)' },
      { id: 'tech-73', question: 'Full Stack AI Memory Creator 비전에서 AE의 역할은?', keywords: ['Provider → Creator 전환', 'cHBM + AI-D + AI-N Full Stack', 'AE = 고객 칩 아키텍처 이해 기반 기술 컨설턴트', '고객 다변화 대응의 최전선'], guideNotes: 'Creator 비전(고객 과제 함께 해결, 기대 초과) → Full Stack(cHBM, AI-D, AI-N) → AE 변화(단순 지원→기술 컨설턴트) → 고객 다변화(NVIDIA 외 Google/Amazon/AMD 등) → AI-D 3축(O/B/E) + AI-N 3축(P/B/D)' },
      { id: 'tech-74', question: 'CXL Memory란 무엇이고 기존 DDR 대비 장점은?', keywords: ['CXL: CPU-메모리 간 PCIe 기반 인터커넥트', 'Memory Pooling: 여러 서버가 메모리 공유', '용량 확장: CPU 소켓당 DIMM 한계 극복', 'CMM: SK하이닉스의 CXL 메모리 모듈 (AI-D B 전략)'], guideNotes: 'CXL(PCIe 기반 캐시 코히어런트) → 장점(Memory Pooling→활용률↑, 용량 확장, 이종 메모리 계층) → SK하이닉스 CMM(CXL 2.0, AI-D Breakthrough) → AE(CXL 프로토콜 검증, DDR 공존 시 안정성)' },
      { id: 'tech-75', question: 'PIM(Processing-in-Memory)이란 무엇이고 SK하이닉스 GDDR6-AiM은?', keywords: ['PIM: 메모리 내부에 연산 로직 탑재', 'GDDR6-AiM: LLM 어텐션 연산 최적화', '데이터 이동 최소화 → 전력/지연 절감', 'AE 과제: SI 검증 + 연산 정확성 검증 병행'], guideNotes: 'PIM(데이터 있는 곳에서 연산→이동 비용 제거) → Memory Wall 해결 → GDDR6-AiM(LLM 어텐션 Matrix-Vector 곱을 메모리 내부 수행) → AE 과제(기존: 전송 정확성만 / PIM: 연산 결과 정확성도 검증)' },
      { id: 'tech-76', question: '고객별(서버/AI/모바일/차량) 메모리에 요구하는 특성 차이를 설명하시오.', keywords: ['서버: 안정성, ECC, 대용량 (DDR5 RDIMM)', 'AI 가속기: 극한 대역폭 (HBM)', '모바일: 저전력, 소형 (LPDDR5X/6)', '차량: 극한 온도 -40~125°C, 15년+ 수명 (ASIL-D)'], guideNotes: '서버(ECC, 24/7, RDIMM/MRDIMM) → AI(HBM, 대역폭, 열관리) → 모바일(LPDDR, 저전력, 배터리) → 차량(AEC-Q100, Zero-defect, ISO 26262) → AE(각 시장 요구 이해→맞춤 검증)' },
      // ── ⑨ NAND Flash 기초 ──
      { id: 'tech-80', question: 'DRAM과 NAND Flash의 근본적 차이를 설명하시오. 왜 둘 다 필요한가?', keywords: ['DRAM: 휘발성, 빠름 (~10ns), 1T1C, Refresh', 'NAND: 비휘발성, 느림 (~100μs), Floating Gate/CTF', 'DRAM = 작업 메모리, NAND = 저장 장치', '메모리 계층 구조: Register→Cache→DRAM→SSD→HDD'], guideNotes: 'DRAM(휘발, 빠름, 비쌈) → NAND(비휘발, 느림, 저렴) → 왜 둘 다(CPU↔DRAM: 빠른 작업 / DRAM↔SSD: 영구 저장) → 메모리 계층(속도↓ 용량↑ 비용↓) → AI 시대(DRAM BW 병목, NAND 용량 병목)' },
      { id: 'tech-81', question: 'SLC, MLC, TLC, QLC의 트레이드오프를 설명하시오.', keywords: ['비트/셀: 1/2/3/4', 'P/E 사이클: 100K/10K/3K/1K', '속도: SLC 최고, QLC 최저', '용도: Enterprise↔Consumer↔Archive'], guideNotes: '각 타입(비트/셀, 전압 레벨 수) → 내구성(P/E) → 속도 → 비용 → 용도(SLC=Enterprise, TLC=Consumer, QLC=Read-heavy) → SK하이닉스(321단 QLC SSD PQC21)' },
      { id: 'tech-82', question: 'Wear Leveling의 원리를 설명하시오.', keywords: ['P/E 사이클 균등 분배', 'Dynamic: 쓰기 요청 분산', 'Static: Cold data도 이동', 'FTL(Flash Translation Layer)이 관리'], guideNotes: 'NAND 수명 한계(P/E) → Wear Leveling(특정 블록 조기 사망 방지) → Dynamic(쓰기 분산) → Static(Cold data 이동) → FTL → 실무(Over-provisioning)' },
      // ── ⑩ 프로그래밍 & 본인 경험 연결 ──
      { id: 'tech-90', question: 'C++ 레퍼런스 라이브러리에서 7.08배 속도 향상을 달성한 주요 기여 요인은?', keywords: ['Architectural modeling vs Literal porting', '불필요한 연산 제거, 데이터 구조 최적화', '벤치마크 기반 병목 분석', '2500개 파라미터 평가 가능해짐'], guideNotes: '기존(literal porting→느린 시뮬레이션) → 접근(architectural modeling 전환) → 최적화(불필요 연산 제거, 데이터 구조) → 결과(7.08배) → 영향(2500개 파라미터 평가)' },
      { id: 'tech-91', question: '연산 속도와 메모리 대역폭의 균형점을 어떻게 수식으로 도출했나요?', keywords: ['Compute bound vs Memory bound', 'Arithmetic intensity', 'Roofline model 개념', '균형점에서 설계 파라미터 결정'], guideNotes: '문제(연산↑해도 BW 부족이면 전체 성능 제한) → 수식(연산량/대역폭 비율=균형점) → Roofline 연결 → 설계 반영 → AE(고객 시스템에서도 동일 분석 필요)' },
      { id: 'tech-92', question: 'AI EXPO / JAPAN IT WEEK 부스 운영 경험이 AE에 어떻게 연결되나?', keywords: ['고객 관점에서 기술 설명', '사전 조사 + 예상 Q&A 준비', '미쓰비시 전기 내방 미팅 연결', 'AE = 고객의 언어로 소통하는 역할'], guideNotes: '경험(AI EXPO, JAPAN IT WEEK 부스) → 역량(기업 사전 조사, 고객 관점 설명, 일본어 대응) → 성과(미쓰비시 전기 내방 미팅) → AE 연결(고객 니즈 파악, 기술을 고객 언어로 전달)' },
      { id: 'tech-93', question: '대량 테스트 로그에서 불량 패턴을 자동 분석하는 프로그램을 개발한다면?', keywords: ['데이터 파싱 + 구조화 (Python/Pandas)', '주소 패턴 분석 (특정 Row/Column 집중?)', '시간 패턴 (온도 상관?)', '시각화 (히트맵, Shmoo 자동 생성)'], guideNotes: '파싱(로그 포맷, 정규식) → 구조화(Pandas: 주소/시간/Pass-Fail/온도) → 패턴(Row/Bank 집중→Row Hammer? 특정 시간→열?) → 시각화(히트맵, Shmoo 자동) → 본인(Streamlit 84→2500개 자동화)' },
      { id: 'tech-94', question: 'Programming 역량으로 메모리 검증 업무를 자동화한다면 어떤 업무를 우선?', keywords: ['반복 Shmoo Plot 생성/비교 자동화', '테스트 리포트 자동 생성', 'BIOS 설정 변경 스크립트', '회귀 테스트 자동 실행/판정'], guideNotes: '기준(반복적, 시간 소모, 에러 발생 가능) → 우선1(Shmoo 자동화) → 우선2(리포트 자동화) → 우선3(회귀 테스트) → 도구(Python, 장비 API) → 본인(Streamlit 84→2500개, 7.08배)' },
      // ── ⑪ 실전 시나리오 (시스템 레벨 분석) ──
      { id: 'tech-95', question: '2DPC 구성에서 Training이 실패합니다. 원인과 해결 방안은?', keywords: ['2DPC: 신호 경로 길어짐 → SI 열화', 'Stub 반사, 임피던스 불연속 증가', 'ODT 값 재조정 필요', 'Write Leveling 마진 감소 가능'], guideNotes: '1DPC vs 2DPC(신호 경로↑, 부하↑, stub) → SI 열화(반사↑, Eye 마진↓) → Training 실패(Write Leveling 또는 Vref 마진 부족) → 해결(ODT 조정, 타이밍 완화, PCB 라우팅 검토) → 데이터(1DPC vs 2DPC Shmoo 비교)' },
      { id: 'tech-96', question: 'AI 워크로드(LLM 추론)에서만 간헐적 ECC 에러 발생. 원인 추정과 디버깅 방향은?', keywords: ['LLM 추론 = 대역폭 집중, 높은 ACTIVATE 빈도', '열 집중 → Refresh 마진 감소', 'Row Hammer 가능성', '패턴 의존적 SI 열화'], guideNotes: '워크로드 분석(LLM: 순차 대량 읽기, 높은 BW) → 가설1(열: 지속 고부하→온도↑→Refresh 부족) → 가설2(Row Hammer: 특정 영역 반복) → 가설3(ISI/Crosstalk) → 디버깅(온도 모니터링, ECC 에러 주소 패턴, 고온 Shmoo)' },
      { id: 'tech-97', question: '고객 시스템에서 대역폭이 JEDEC 스펙 대비 70%밖에 안 나옵니다. 원인 분석 방법은?', keywords: ['Page Hit Rate 확인 (Row 재활용률)', '채널/Rank 인터리빙 설정', 'Refresh penalty 계산', 'Memory Controller 스케줄링 효율'], guideNotes: '이론 대역폭(DDR5-4800×64bit×2ch=76.8GB/s) → 실측 70%(~54GB/s) → 원인(Refresh penalty ~5-10%, Page Miss, Bank 충돌, 컨트롤러, NUMA 미설정) → AE 대응(Intel MLC 측정, 컨트롤러 설정 검토)' },
      { id: 'tech-98', question: 'DDR5-4800 DIMM 2개 Dual Channel 이론 대역폭을 계산하시오. 실측 60~70%인 이유는?', keywords: ['이론: 4800MT/s × 8Bytes × 2ch = 76.8GB/s', 'Refresh penalty ~5-10%', 'Page Miss, 스케줄링 오버헤드', 'NUMA, 캐시 효과, 정렬'], guideNotes: '계산(4800MT/s × 64bit/8 = 38.4GB/s per ch, ×2 = 76.8GB/s) → 실측(~46-54GB/s) → 손실(Refresh, Page Miss, Bank 충돌, 컨트롤러, SW)' },
      { id: 'tech-99', question: '가혹 조건 테스트(Stress Test)의 목적과 AE 역할은?', keywords: ['극한 상황(고온/저전압/과부하)으로 잠재 결함 발견', 'AE: 고객 환경보다 가혹한 시나리오 설계', '안정 마진 확인 + 불량 모드 사전 차단', '발견된 문제 즉시 설계 부서에 피드백'], guideNotes: '목적(일상에서 안 드러나는 잠재 결함 발견) → AE(고객보다 가혹한 시나리오 설계→임계점 파악) → 효과(안정 마진 확인, 불량 모드 사전 차단) → 피드백(설계 부서→제품 완성도↑)' },
      // ── ⑫ 측정 장비 & FPGA 검증 ──
      { id: 'tech-100', question: 'AE 직무에서 오실로스코프/로직 애널라이저를 사용하는 이유는?', keywords: ['눈에 안 보이는 고속 신호를 시각화', '전압 레벨/타이밍 파형 분석으로 정확한 진단', '데이터 0과 1 구분 못하는 현상 포착 → 설계 수정 제안', '정밀 측정 데이터 = 고객 설득의 가장 확실한 근거'], guideNotes: '장비 역할(고속 신호 시각화) → 용도(전압 레벨, 타이밍 분석, 패턴 확인) → 예시(전압 기준치↓→0/1 구분 불가 포착→설계 수정) → AE(의사의 청진기=가장 강력한 진단 도구) → 면접 리뷰(오실로스코프 파형 퀴즈 출제됨)' },
      { id: 'tech-101', question: 'BER(Bit Error Rate) 이슈 보고 시 AE로서 분석 절차는?', keywords: ['1단계: memtest86/BIOS 로그로 에러 패턴', '2단계: 오실로스코프 Eye diagram', '3단계: BERT로 BER 정량 측정', '4단계: 원인별 대응 (ODT/Vref/PCB)'], guideNotes: '현상(memtest86: 주소/패턴/DQ별 분류) → 로그(PMU Training 마진 부족?) → 물리(오실로스코프 Eye / BERT: BER 정량) → 원인별(Timing→재Training / 전압→Vref / SI→ODT / DRAM→교체) → 조치(MRS, BIOS 업데이트, RMA)' },
      { id: 'tech-102', question: 'FPGA 기반 메모리 검증의 목적과 장점은?', keywords: ['SoC 테이프아웃 전 사전 검증', 'FPGA로 메모리 컨트롤러+PHY 구현', '유연한 파라미터 변경, 빠른 반복', 'NPI 기간 단축, 조기 문제 발견'], guideNotes: 'FPGA 목적(SoC 없이 DRAM 사전 검증) → 장점(파라미터 유연 변경, 다양한 시나리오) → 구성(FPGA에 컨트롤러+PHY) → AE(NPI 단축, 조기 문제 발견) → 한계(실제 SoC 대비 속도/타이밍 차이)' },
      { id: 'tech-103', question: 'Qualification 프로세스(ES→QS→MP)에서 AE의 역할은?', keywords: ['ES: 초기 샘플, 기능 검증', 'QS: 양산 동등 품질, 고객 인증용', 'MP: 양산 확정, Design Win 완료', 'AE: ES부터 시스템 호환성 검증 시작'], guideNotes: 'ES(기능 검증→AE: 기본 동작·잠재 이슈 조기 발견) → QS(양산 동등→AE: Full Qualification) → MP(양산→AE: 초기 모니터링, PCN/ECN) → FAE 협업(FAE: 고객 접점 / 본사 AE: 분석·판정)' },
      // ── ⑬ SK하이닉스 현재 전략 ──
      { id: 'tech-104', question: 'SK하이닉스의 현재 주요 메모리 제품 라인업과 타깃 시장은?', keywords: ['DDR5 RDIMM/UDIMM → 서버/PC', 'LPDDR5X/6 → 모바일/노트북/차량', 'HBM3E/4 → AI 가속기', 'NAND SSD (321단 QLC, PCIe Gen5) → 데이터센터'], guideNotes: 'DRAM(DDR5 6.4Gbps, 서버RDIMM/MRDIMM, PC UDIMM) → 모바일(LPDDR5X 24GB, LPDDR6 1c 세계 최초, 차량 ASIL-D) → HBM(HBM3E 12Hi 36GB, HBM4 2026.2) → NAND(321단 QLC PQC21, Gen5 PS1012) → 매출 97조, HBM 62%' },
      { id: 'tech-105', question: 'MCR DIMM이란 무엇이고, 어떤 혁신인가?', keywords: ['2개 Rank 동시 작동 + 데이터 버퍼 128B 통합 전송', '8Gbps+ (기존 4.8Gbps 대비 80%↑) 세계 최고속 서버 DRAM', 'Intel + Renesas + SK하이닉스 글로벌 협업', '단품이 아닌 모듈 아키텍처 혁신으로 성능 도약'], guideNotes: '기존 한계(DDR5 단품 속도 향상 한계) → MCR DIMM(모듈 구조 변경: 2 Rank 동시→데이터 버퍼가 64B+64B=128B→실효 2배) → 성능(8Gbps+, 80%↑) → 협업(Intel+Renesas+SK하이닉스) → AE(새 아키텍처→테스트 환경 구축, 데이터 버퍼 포함 시스템 검증)' },
      { id: 'tech-106', question: 'SK하이닉스가 HBM 리더십을 유지하기 위해 AE 조직이 기여할 수 있는 점은?', keywords: ['기술 격차보다 고객 밀착 지원이 경쟁력', 'cHBM = 표준품 경쟁을 넘어선 차별화', 'AE의 빠른 대응 속도 = 고객 Lock-in', 'HBM4 시스템 레벨 테스트 장비 자체 개발'], guideNotes: '경쟁(삼성 추격, 마이크론 성장) → 기술만으로 장기 우위 어려움 → AE 차별화(고객 시스템 깊이 이해→cHBM→Lock-in) → 빠른 대응(이슈→근본 원인→해결 시간이 경쟁력) → AE 확대(고객 다변화→인력 필요↑) → HBM4 시스템 테스트 장비 자체 개발(AE 역할 확대 상징)' }
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
