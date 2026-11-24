import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// JSON 요청 데이터 처리
app.use(express.json());

// 기본 경로
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to OpenClaw Bridge!",
  });
});

// 서버 상태 확인
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "openclaw-docker-client",
    message: "Server is running!",
  });
});

// OpenClaw 명령 전달 (추후 실제 연결)
app.post("/api/command", (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      status: "error",
      message: "Message is required.",
    });
  }

  res.json({
    status: "received",
    message: message,
    result: "OpenClaw connection is not implemented yet.",
  });
});

// 서버 실행
app.listen(PORT, "0.0.0.0", () => {
  console.log(`OpenClaw Bridge running on port ${PORT}`);
});
