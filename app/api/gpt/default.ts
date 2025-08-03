export const DEFAULT_RESPONSE = {
  id: "resp_1111",
  object: "response",
  created_at: 1754226037,
  status: "completed",
  background: false,
  error: null,
  incomplete_details: null,
  instructions:
    "You are an excellent educator who can help students master any topic they're curious about within 2 weeks.",
  max_output_tokens: null,
  max_tool_calls: null,
  model: "gpt-4o-2024-08-06",
  output: [
    {
      id: "msg_2222",
      type: "message",
      status: "completed",
      content: [
        {
          type: "output_text",
          annotations: [],
          logprobs: [],
          text: "안녕하세요! 커피 만드는 방법을 2주 동안 배우는 커리큘럼을 짜보겠습니다. 각 주차별로 주제를 나누고 있습니다.\n\n### 1주차: 커피 기초 이해하기\n\n**Day 1: 커피의 역사와 종류**\n- 커피의 역사 간략히 알아보기\n- 아라비카와 로부스타의 차이점\n- 다양한 커피 음료 종류 (에스프레소, 아메리카노, 라테 등)\n\n**Day 2: 커피 원두 선택과 보관**\n- 원두의 종류 및 특징\n- 신선한 원두 고르는 방법\n- 원두 보관법\n\n**Day 3: 분쇄도 이해하기**\n- 분쇄도의 종류와 용도\n- 각 추출 방식에 맞는 분쇄도 알아보기\n\n**Day 4: 커피 머신 및 도구 소개**\n- 드립, 에스프레소 머신, 프렌치 프레스 등 다양한 도구 소개\n- 각 도구의 기본 사용법\n\n**Day 5: 물과 커피 비율**\n- 황금 비율 이해하기\n- 적절한 물 온도와 커피 비율 맞추기\n\n**Day 6: 홈카페 준비**\n- 필요한 도구와 재료 준비\n- 사용법과 기본 세팅\n\n**Day 7: 복습 및 질의응답**\n- 1주차 내용 복습\n- 질문 답변 시간\n\n### 2주차: 실제 커피 만들기\n\n**Day 8: 드립 커피 만들기 실습**\n- 드립 커피의 기본 방식\n- 핸드드립 실습\n\n**Day 9: 에스프레소 추출하기**\n- 에스프레소 머신 사용법\n- 에스프레소 추출 실습\n\n**Day 10: 밀크 스티밍과 라테 아트**\n- 우유 스팀하는 방법\n- 기본 라테 아트 연습\n\n**Day 11: 다양한 커피 음료 만들기**\n- 카푸치노, 마키아토, 모카 등 만들어보기\n\n**Day 12: 커피 맛 평가하기**\n- 커핑을 통한 커피 맛 평가\n- 맛의 차이 구별하기\n\n**Day 13: 나만의 커피 음료 만들기**\n- 창의적인 레시피 개발\n- 나만의 시그니처 커피 만들기\n\n**Day 14: 최종 평가 및 마무리**\n- 만든 커피 음료 평가\n- 2주간 배운 내용 복습\n\n이 커리큘럼에 따라 학습하면 커피에 대해 깊이 이해하고 다양한 커피를 직접 만들어볼 수 있습니다. 즐거운 커피 여정이 되시길 바랍니다!",
        },
      ],
      role: "assistant",
    },
  ],
  parallel_tool_calls: true,
  previous_response_id: null,
  prompt_cache_key: null,
  reasoning: {
    effort: null,
    summary: null,
  },
  safety_identifier: null,
  service_tier: "default",
  store: true,
  temperature: 1,
  text: {
    format: {
      type: "text",
    },
  },
  tool_choice: "auto",
  tools: [],
  top_logprobs: 0,
  top_p: 1,
  truncation: "disabled",
  usage: {
    input_tokens: 55,
    input_tokens_details: {
      cached_tokens: 0,
    },
    output_tokens: 603,
    output_tokens_details: {
      reasoning_tokens: 0,
    },
    total_tokens: 658,
  },
  user: null,
  metadata: {},
  output_text:
    "안녕하세요! 커피 만드는 방법을 2주 동안 배우는 커리큘럼을 짜보겠습니다. 각 주차별로 주제를 나누고 있습니다.\n\n### 1주차: 커피 기초 이해하기\n\n**Day 1: 커피의 역사와 종류**\n- 커피의 역사 간략히 알아보기\n- 아라비카와 로부스타의 차이점\n- 다양한 커피 음료 종류 (에스프레소, 아메리카노, 라테 등)\n\n**Day 2: 커피 원두 선택과 보관**\n- 원두의 종류 및 특징\n- 신선한 원두 고르는 방법\n- 원두 보관법\n\n**Day 3: 분쇄도 이해하기**\n- 분쇄도의 종류와 용도\n- 각 추출 방식에 맞는 분쇄도 알아보기\n\n**Day 4: 커피 머신 및 도구 소개**\n- 드립, 에스프레소 머신, 프렌치 프레스 등 다양한 도구 소개\n- 각 도구의 기본 사용법\n\n**Day 5: 물과 커피 비율**\n- 황금 비율 이해하기\n- 적절한 물 온도와 커피 비율 맞추기\n\n**Day 6: 홈카페 준비**\n- 필요한 도구와 재료 준비\n- 사용법과 기본 세팅\n\n**Day 7: 복습 및 질의응답**\n- 1주차 내용 복습\n- 질문 답변 시간\n\n### 2주차: 실제 커피 만들기\n\n**Day 8: 드립 커피 만들기 실습**\n- 드립 커피의 기본 방식\n- 핸드드립 실습\n\n**Day 9: 에스프레소 추출하기**\n- 에스프레소 머신 사용법\n- 에스프레소 추출 실습\n\n**Day 10: 밀크 스티밍과 라테 아트**\n- 우유 스팀하는 방법\n- 기본 라테 아트 연습\n\n**Day 11: 다양한 커피 음료 만들기**\n- 카푸치노, 마키아토, 모카 등 만들어보기\n\n**Day 12: 커피 맛 평가하기**\n- 커핑을 통한 커피 맛 평가\n- 맛의 차이 구별하기\n\n**Day 13: 나만의 커피 음료 만들기**\n- 창의적인 레시피 개발\n- 나만의 시그니처 커피 만들기\n\n**Day 14: 최종 평가 및 마무리**\n- 만든 커피 음료 평가\n- 2주간 배운 내용 복습\n\n이 커리큘럼에 따라 학습하면 커피에 대해 깊이 이해하고 다양한 커피를 직접 만들어볼 수 있습니다. 즐거운 커피 여정이 되시길 바랍니다!",
}
