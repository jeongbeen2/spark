import { PrismaClient, Prisma, Role } from "../app/generated/prisma";

const prisma = new PrismaClient();

// 사용자 데이터
const userData: Prisma.UserCreateInput = {
  name: "김정빈",
  email: "jb2n95@naver.com",
};

// 채팅방과 메시지 데이터
const chatRoomData: Prisma.ChatRoomCreateInput[] = [
  {
    title: "React 프로그래밍 질문",
    user: { connect: { email: "jb2n95@naver.com" } },
    messages: {
      create: [
        {
          content: "React에서 useState와 useEffect의 차이점이 뭔가요?",
          role: Role.USER,
          createdAt: new Date("2024-01-15T09:00:00Z"),
        },
        {
          content: "좋은 질문이네요! useState는 컴포넌트의 상태를 관리하는 Hook이고, useEffect는 사이드 이펙트를 처리하는 Hook입니다.\n\nuseState는 컴포넌트 내부의 데이터를 저장하고 업데이트할 때 사용하며, useEffect는 API 호출, DOM 조작, 타이머 설정 등 컴포넌트 외부의 작업을 수행할 때 사용합니다.",
          role: Role.ASSISTANT,
          createdAt: new Date("2024-01-15T09:01:00Z"),
        },
        {
          content: "그럼 useEffect의 의존성 배열은 왜 필요한 건가요?",
          role: Role.USER,
          createdAt: new Date("2024-01-15T09:02:00Z"),
        },
        {
          content: "의존성 배열은 useEffect가 언제 실행될지를 결정합니다:\n\n1. 빈 배열 []: 컴포넌트 마운트 시에만 실행\n2. 값이 있는 배열 [value]: 해당 값이 변경될 때마다 실행\n3. 배열 없음: 매 렌더링마다 실행\n\n이를 통해 불필요한 재실행을 방지하고 성능을 최적화할 수 있습니다.",
          role: Role.ASSISTANT,
          createdAt: new Date("2024-01-15T09:03:00Z"),
        },
        {
          content: "아 이제 이해됐어요! 감사합니다.",
          role: Role.USER,
          createdAt: new Date("2024-01-15T09:04:00Z"),
        },
      ],
    },
  },
  {
    title: "김치찌개 레시피 문의",
    user: { connect: { email: "jb2n95@naver.com" } },
    messages: {
      create: [
        {
          content: "맛있는 김치찌개 만드는 법 알려주세요!",
          role: Role.USER,
          createdAt: new Date("2024-01-16T12:30:00Z"),
        },
        {
          content: "김치찌개 레시피를 알려드릴게요!\n\n재료 (2인분):\n- 신김치 200g\n- 돼지고기 100g\n- 두부 1/2모\n- 대파 1대\n- 물 400ml\n- 고춧가루 1큰술\n- 마늘 1큰술\n- 참기름 1작은술",
          role: Role.ASSISTANT,
          createdAt: new Date("2024-01-16T12:31:00Z"),
        },
        {
          content: "만드는 순서도 알려주세요!",
          role: Role.USER,
          createdAt: new Date("2024-01-16T12:32:00Z"),
        },
        {
          content: "만드는 법:\n\n1. 팬에 참기름을 두르고 김치를 볶아주세요\n2. 돼지고기를 넣고 함께 볶습니다\n3. 물을 넣고 끓여주세요\n4. 고춧가루, 마늘을 넣고 10분간 끓입니다\n5. 두부와 대파를 넣고 5분 더 끓이면 완성!",
          role: Role.ASSISTANT,
          createdAt: new Date("2024-01-16T12:33:00Z"),
        },
        {
          content: "김치는 얼마나 신 것을 써야 하나요?",
          role: Role.USER,
          createdAt: new Date("2024-01-16T12:34:00Z"),
        },
        {
          content: "김치찌개에는 적당히 신 김치가 가장 좋습니다. 너무 짠 김치보다는 발효가 어느 정도 진행된 시큼한 김치를 사용하시면 깊은 맛이 납니다. 김치가 너무 싱거우면 소금으로 간을 맞춰주세요!",
          role: Role.ASSISTANT,
          createdAt: new Date("2024-01-16T12:35:00Z"),
        },
        {
          content: "완벽해요! 오늘 저녁에 해먹어볼게요 ㅎㅎ",
          role: Role.USER,
          createdAt: new Date("2024-01-16T12:36:00Z"),
        },
      ],
    },
  },
  {
    title: "제주도 여행 계획",
    user: { connect: { email: "jb2n95@naver.com" } },
    messages: {
      create: [
        {
          content: "다음 주에 제주도 2박 3일 여행을 가는데, 추천 코스 있나요?",
          role: Role.USER,
          createdAt: new Date("2024-01-17T15:00:00Z"),
        },
        {
          content: "제주도 2박 3일 추천 코스를 알려드릴게요!\n\n**1일차:**\n- 오전: 제주공항 도착 → 렌터카 픽업\n- 점심: 흑돼지거리에서 점심\n- 오후: 용두암 → 이호테우해변\n- 저녁: 제주시내 숙소 체크인\n\n**2일차:**\n- 오전: 성산일출봉\n- 점심: 성산포 해산물\n- 오후: 섭지코지 → 우도\n- 저녁: 서귀포 숙소 이동",
          role: Role.ASSISTANT,
          createdAt: new Date("2024-01-17T15:01:00Z"),
        },
        {
          content: "3일차는 어떻게 하면 좋을까요?",
          role: Role.USER,
          createdAt: new Date("2024-01-17T15:02:00Z"),
        },
        {
          content: "**3일차:**\n- 오전: 천지연폭포 → 정방폭포\n- 점심: 서귀포 맛집\n- 오후: 중문관광단지 → 쇼핑\n- 저녁: 제주공항으로 이동\n\n추가 팁:\n- 렌터카는 필수입니다\n- 날씨에 따라 일정 조정하세요\n- 맛집 예약은 미리 하시는 게 좋아요!",
          role: Role.ASSISTANT,
          createdAt: new Date("2024-01-17T15:03:00Z"),
        },
        {
          content: "혹시 제주도에서 꼭 먹어봐야 할 음식 추천해주세요!",
          role: Role.USER,
          createdAt: new Date("2024-01-17T15:04:00Z"),
        },
        {
          content: "제주도 필수 음식들을 추천해드릴게요:\n\n🐷 **흑돼지**: 제주의 대표 음식\n🐟 **갈치조림**: 신선한 제주 갈치\n🍜 **고기국수**: 제주식 돼지고기 국수\n🥬 **물회**: 시원한 제주 물회\n🍊 **한라봉**: 제주 특산 감귤\n🐚 **전복죽**: 제주 전복으로 만든 죽\n\n특히 흑돼지와 고기국수는 꼭 드셔보세요!",
          role: Role.ASSISTANT,
          createdAt: new Date("2024-01-17T15:05:00Z"),
        },
        {
          content: "와 정말 자세한 정보 감사해요! 벌써 여행이 기대되네요 😊",
          role: Role.USER,
          createdAt: new Date("2024-01-17T15:06:00Z"),
        },
        {
          content: "좋은 여행 되세요! 제주도에서 많은 추억 만드시길 바랍니다. 여행 중에 궁금한 점 있으시면 언제든 물어보세요! 🌴✈️",
          role: Role.ASSISTANT,
          createdAt: new Date("2024-01-17T15:07:00Z"),
        },
      ],
    },
  },
];

export async function main() {
  // 기존 데이터 정리 (개발용)
  await prisma.message.deleteMany();
  await prisma.chatRoom.deleteMany();
  await prisma.user.deleteMany();

  // 사용자 생성
  const user = await prisma.user.create({ data: userData });
  console.log("✅ 사용자 생성:", user.name);

  // 채팅방과 메시지 생성
  for (const chatData of chatRoomData) {
    const chatRoom = await prisma.chatRoom.create({ 
      data: chatData,
      include: { messages: true }
    });
    console.log(`✅ 채팅방 생성: "${chatRoom.title}" (메시지 ${chatRoom.messages.length}개)`);
  }

  console.log("🎉 시드 데이터 생성 완료!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });