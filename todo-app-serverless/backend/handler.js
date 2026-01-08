const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");

const express = require("express");
const serverless = require("serverless-http");

const app = express();

const TODO_TABLE = process.env.TODO_TABLE;
const client = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(client);

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateId() {
  return `abcd-${randomInteger(1001, 9001)}-efgh`;
}

app.use(express.json());

app.get("/todo", async (req, res) => {
  try {
    const command = new ScanCommand({ TableName: TODO_TABLE });
    const { Items } = await docClient.send(command);

    if (Items.length > 0) {
      res.json({ data: Items });
    } else {
      res.json({ data: [], message: "No Record Available" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retrieve todo" });
  }
});

app.options("/todo", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send();
});

app.post("/todo", async (req, res) => {
  const { title, description, completed } = req.body;
  const todoId = generateId();

  const params = {
    TableName: TODO_TABLE,
    Item: { todoId, title, description, completed },
  };

  try {
    const command = new PutCommand(params);
    await docClient.send(command);

    res.json({ todoId, title, description, completed });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not create user" });
  }
});

app.put("/todo/:id", async (req, res) => {
  const todoId = req.params.id;
  const { title, description, completed } = req.body;
  const params = {
    TableName: TODO_TABLE,
    Item: {
      todoId,
      title,
      description,
      completed,
    },
  };
  try {
    const command = new PutCommand(params);
    await docClient.send(command);

    res.json({ todoId, title, description, completed });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not create user" });
  }
});

app.delete("/todo/:id", async (req, res) => {
  const todoId = req.params.id;

  const params = {
    TableName: TODO_TABLE,
    Key: {
      todoId,
    },
  };
  try {
    const command = new DeleteCommand(params);
    await docClient.send(command);

    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ messaged: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not create user" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found from Express Application",
  });
});

exports.handler = serverless(app);
