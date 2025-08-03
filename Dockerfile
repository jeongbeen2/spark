# Node.js 20 개발 환경
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사
COPY package*.json ./
COPY package-lock.json ./

# 의존성 설치
RUN npm ci

# 개발 서버 포트 노출
EXPOSE 5173

# 개발 서버 실행
CMD ["npm", "run", "dev"]
