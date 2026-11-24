
# Node.js 22 LTS 환경 사용
FROM node:22-alpine

# 컨테이너 내부 작업 폴더
WORKDIR /app

# 패키지 설정 파일 복사
COPY package*.json ./

# 라이브러리 설치
RUN npm ci --omit=dev

# 소스 코드 복사
COPY src ./src

# 서버 포트 공개
EXPOSE 3000

# 서버 실행
CMD ["npm", "start"]
