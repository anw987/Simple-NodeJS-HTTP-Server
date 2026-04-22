const express = require("express");
const pino = require("pino");

const app = express();
app.use(express.json());

/**
 * Send logs directly to Logstash TCP input
 * Logstash must listen on port 5000 (tcp { codec => json })
 */
const transport = pino.transport({
  target: "pino-socket",
  options: {
    address: "logstash", // docker service name
    port: 5000,
    mode: "tcp"
  }
});

const logger = pino(
  {
    timestamp: () => `,"@timestamp":"${new Date().toISOString()}"`,
    level: "info",
    base: {
      service: "node-api"
    }
  },
  transport
);

// Echo API
app.post("/echo", (req, res) => {
  const { transDateTime } = req.body;

  const response = {
    transDateTime,
    responseCode: "00",
  };

  logger.info({
    endpoint: "/echo",
    request: req.body,
    response
  }, "Echo processed");

  res.json(response);
});

// Inquiry API
app.post("/inquiry", (req, res) => {
  const {
    transDateTime,
    qrCode,
    senderAccount,
    senderInstitutionCode,
  } = req.body;

  const response = {
    transDateTime,
    qrCode,
    senderAccount,
    senderInstitutionCode,
    responseCode: "00",
    additionalDataResp: {
      merchantNumber: "xx",
      merchantName: "abc",
      infoA: "etc",
      infoB: "etc",
    },
  };

  logger.info({
    endpoint: "/inquiry",
    request: req.body,
    response
  }, "Inquiry processed");

  res.json(response);
});

const PORT = 8080;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});