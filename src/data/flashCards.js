export const flashCards = [
  {
    id: 'module-components',
    title: 'DDR5 모듈 부품 4종',
    icon: '🧩',
    cards: [
      { front: 'RCD', back: 'Registering Clock Driver\nCA/CK 신호 버퍼링 → 각 DRAM에 재구동\nDDR5: 서브채널 A/B 독립 관리' },
      { front: 'DB', back: 'Data Buffer\nDQ/DQS 신호 호스트↔DRAM 중계\nDDR5: 모든 RDIMM에 탑재 (DDR4는 LRDIMM만)' },
      { front: 'PMIC', back: 'Power Management IC\n12V → 1.1V 변환 (On-DIMM)\nDDR4는 메인보드 VRM이 1.2V 직접 공급' },
      { front: 'SPD Hub (SPD5)', back: 'I3C 기반 허브 디바이스\n= EEPROM + 온도센서(TS) + 이벤트 알림\nDDR4 SPD: I2C EEPROM 단순 저장소' },
    ]
  },
  {
    id: 'voltage-rails',
    title: 'DDR5 전압 레일',
    icon: '⚡',
    cards: [
      { front: 'VDD', back: '1.1V\nDRAM 코어 로직 전원' },
      { front: 'VDDQ', back: '1.1V\nI/O 드라이버 전원 (DQ/DQS 출력)' },
      { front: 'VPP', back: '1.8V\n워드라인 부스트 전압 (ACTIVATE 시 사용)' },
      { front: 'DDR4 vs DDR5 전압', back: 'DDR4: 1.2V (메인보드 VRM 공급)\nDDR5: 1.1V (On-DIMM PMIC 변환)' },
    ]
  },
  {
    id: 'aec-q100',
    title: 'AEC-Q100 온도 등급',
    icon: '🚗',
    cards: [
      { front: 'Grade 0', back: '-40°C ~ +150°C\n엔진룸 / 파워트레인' },
      { front: 'Grade 1', back: '-40°C ~ +125°C\n일반 차량 전장, ADAS\n→ 차량용 DRAM 주 타깃' },
      { front: 'Grade 2', back: '-40°C ~ +105°C\n차체 전자장치' },
      { front: 'Grade 3', back: '-40°C ~ +85°C\n실내 / 인포테인먼트' },
      { front: 'ASIL 등급', back: 'A → B → C → D (D가 최고)\nADAS/자율주행: ASIL-B~D\nSK하이닉스 LPDDR5X: ASIL-D 인증 완료' },
    ]
  },
  {
    id: 'qualification',
    title: 'Qualification 단계',
    icon: '📋',
    cards: [
      { front: 'ES\n(Engineering Sample)', back: '개발 초기 샘플\n기능 검증 목적, 스펙 일부 미달 가능\nAE: Technical Bulletin으로 제한사항 안내' },
      { front: 'QS\n(Qualification Sample)', back: '양산 공정·품질 동등\n고객 정식 인증 테스트용\nAE: Qualification Report 작성·제출' },
      { front: 'MP\n(Mass Production)', back: '양산 납품 확정 = Design Win\nAE: 초기 모니터링, PCN/ECN 관리' },
      { front: 'PCN / ECN', back: 'PCN: Product Change Notification (공정/재료 변경)\nECN: Engineering Change Notification (설계 변경)\n→ 고객에 사전 통보 필수' },
    ]
  },
  {
    id: 'gddr-signaling',
    title: 'GDDR 시그널링',
    icon: '🎮',
    cards: [
      { front: 'GDDR6', back: 'NRZ (2레벨)\n14~18 Gbps/pin\n범용 GPU, 게임 콘솔' },
      { front: 'GDDR6X', back: 'PAM4 (4레벨, 2비트/심볼)\n21~24 Gbps/pin\nRTX 3090/4090 (마이크론 독점)' },
      { front: 'GDDR7', back: 'PAM3 (3레벨: +1,0,-1)\n32~40+ Gbps/pin\nPAM4 대비 Eye height 50%↑' },
      { front: 'GDDR 실장 특성', back: 'On-board BGA 직접 실장\n모듈(DIMM) 없음 → 교체 불가\nAE: 고객 보드 설계 단계부터 참여' },
    ]
  },
  {
    id: 'jedec-standards',
    title: 'JEDEC 표준 번호',
    icon: '📐',
    cards: [
      { front: 'JESD79-5', back: 'DDR5 표준\n타이밍, AC/DC 스펙, MRS, Eye Mask 등' },
      { front: 'JESD209', back: 'LPDDR5/5X 표준\nDPD/PASR, PoP 스펙, DVFSC 등' },
      { front: 'JESD235', back: 'HBM3/3E 표준\nTSV, 1024-bit 인터페이스, 열 특성' },
      { front: 'JESD250', back: 'GDDR7 표준\nPAM3 시그널링' },
      { front: 'SK하이닉스 + JEDEC', back: 'JEDEC 이사회(Board) 멤버\n표준 제정에 직접 참여\nAE 현장 경험 → 차기 표준 반영 가능' },
    ]
  },
  {
    id: 'key-numbers',
    title: '핵심 숫자',
    icon: '🔢',
    cards: [
      { front: 'BER 정상 기준', back: '10⁻¹² 이하\n(1조 비트당 에러 1개 미만)' },
      { front: 'DDR5 서브채널', back: '32-bit × 2 독립 서브채널\n(DDR4: 64-bit 단일 채널)' },
      { front: 'DDR5 Prefetch', back: '16n (DDR4: 8n)\nBL16 × 32bit = 64B = 캐시라인' },
      { front: 'DDR5-4800\nDual Channel 대역폭', back: '이론: 4800 × 8B × 2ch = 76.8 GB/s\n실측: ~46~54 GB/s (60~70%)' },
      { front: 'HBM3E 대역폭', back: '9.8Gbps × 1024-bit = 1.2 TB/s\n(DDR5-4800: 38.4 GB/s per ch)' },
      { front: 'tREFI / tRFC', back: 'tREFI: 7.8us (Refresh 간격)\ntRFC: ~295ns (DDR5, All Bank)\n고온 시 tREFI → 3.9us로 단축' },
      { front: 'Refresh 오버헤드', back: '= tRFC / tREFI × 100%\n~295ns / 7800ns ≈ 3.8%' },
    ]
  },
  {
    id: 'host-side',
    title: '호스트 측 개념',
    icon: '🖥️',
    cards: [
      { front: 'IMC', back: 'Integrated Memory Controller\nCPU 내장 메모리 컨트롤러\n명령 스케줄링, 주소 매핑, Refresh, ECC' },
      { front: 'DFI', back: 'DDR PHY Interface\n메모리 컨트롤러 ↔ PHY 연결 표준\nCadence/Synopsys PHY IP와 호환' },
      { front: 'MRC', back: 'Memory Reference Code\nIntel BIOS 내장 FW\nTraining 전체 관장 (초기화→최적화)' },
      { front: 'Training 분담', back: 'PHY: DLL 지연 스윕, Vref 스윕 실행\nIMC: 시퀀스 제어, Pass/Fail 판정' },
    ]
  },
  {
    id: 'lpddr-power',
    title: 'LPDDR 저전력 모드',
    icon: '🔋',
    cards: [
      { front: 'PASR', back: 'Partial Array Self-Refresh\n사용 영역만 Refresh → 나머지 전력 차단\nSelf-Refresh 대비 50%+ 절감' },
      { front: 'DPD', back: 'Deep Power Down\n모든 전력 차단 → 데이터 소실\n최저 전력, 복귀 시 완전 재초기화' },
      { front: 'DVFSC', back: 'Dynamic Voltage Frequency Scaling Clock\nLPDDR5X 고유 기능\n워크로드 따라 속도↔전력 실시간 전환' },
      { front: 'PoP', back: 'Package-on-Package\nAP 위에 LPDDR 적층\nSnapdragon/Dimensity/Apple A·M 시리즈' },
    ]
  },
  {
    id: 'ae-tools',
    title: 'AE 도구 이름',
    icon: '🛠️',
    cards: [
      { front: 'memtest86', back: '메모리 패턴 테스트 (OS 없이 부팅)\nHW 결함 검출 1차 도구' },
      { front: 'Intel MLC', back: 'Memory Latency Checker\n대역폭 + 지연시간 측정\n성능 병목 분석 핵심' },
      { front: 'STREAM', back: '메모리 대역폭 벤치마크\nCopy/Scale/Add/Triad 4패턴' },
      { front: 'HSPICE / HyperLynx\n/ Sigrity', back: 'HSPICE: 회로 레벨 시뮬\nHyperLynx: PCB SI 분석\nSigrity PowerSI: PDN 임피던스' },
      { front: 'BERT / DCA-X', back: 'BER 정량 측정 장비\n기준: 10⁻¹² 이하\nKeysight DCA-X 등' },
      { front: 'PMU Training Log', back: 'Training 단계별 Pass/Fail + 마진\nDQ/Rank/서브채널별 마진 확인\nTraining 실패 디버깅 핵심' },
    ]
  },
  {
    id: 'sk-hynix-numbers',
    title: 'SK하이닉스 주요 수치',
    icon: '🏢',
    cards: [
      { front: '2025 매출/이익', back: '매출 97조 원\n영업이익 47조 원\n역대 최대 실적' },
      { front: 'D램 점유율', back: '38% (업계 1위)\n삼성 32% 추월' },
      { front: 'HBM 점유율', back: '62% (출하량 기준)\n엔비디아 HBM3E 물량 71% 공급' },
      { front: 'HBM4 스펙', back: '11.7 Gbps\n16층 48GB\n2026년 2월 양산' },
      { front: 'cHBM', back: 'Custom HBM\nGPU/ASIC 연산 → HBM 베이스 다이 이동\n구조/인터페이스/전력/열 맞춤 설계' },
    ]
  },
]
