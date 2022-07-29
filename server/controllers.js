/* eslint-disable camelcase */
const models = require('./models');

// questions list
// retrieves a list of questions for a particular product
// *does not* include any reported questions (or answers???)
// sorted by helpfulness
// query parameters:
// - product_id: integer
// - page: integer (default 1)
// - count: integer (default 5)
module.exports.getQuestions = (req, res) => {
  const { product_id } = req.query;
  let { page, count } = req.query;
  page = req.query.page !== undefined ? req.query.page : 1;
  count = req.query.count !== undefined ? req.query.count : 5;
  if (
    Number.isNaN(Number(product_id))
    || Number.isNaN(Number(page))
    || Number.isNaN(Number(count))
  ) {
    res.status(400).send('BAD INPUT');
  } else {
    res.send(`product id: ${product_id}, page: ${page}, count: ${count}`);
  }
};

// answers list
// returns answers for a given question
// *does not* include any reported answers
// sorted by helpfulness
// parameters:
// - question_id: integer
// query parameters:
// - page: integer (default 1)
// - count: integer (default 5)
module.exports.getAnswers = (req, res) => {
  const { question_id } = req.params;
  let { page, count } = req.query;
  page = req.query.page !== undefined ? req.query.page : 1;
  count = req.query.count !== undefined ? req.query.count : 5;
  if (
    Number.isNaN(Number(question_id))
    || Number.isNaN(Number(page))
    || Number.isNaN(Number(count))
  ) {
    res.status(400).send('BAD INPUT');
  } else {
    res.send(`question id: ${question_id}, page: ${page}, count: ${count}`);
  }
};

// add a question
// body:
// - body: string (text of q being asked)
// - name: string (username of asker)
// - email: string (email of asker)
// - product_id: integer
module.exports.addQuestion = (req, res) => {
  const {
    body, name, email, product_id,
  } = req.body;
  if (
    body === undefined
    || name === undefined
    || email === undefined
    || product_id === undefined
  ) {
    res.status(400).send('BAD INPUT');
  } else {
    res.send(`body: ${body}, name: ${name}, email: ${email}, product_id: ${product_id}`);
  }
};

// add an answer
// parameters:
// - question_id: integer
// body:
// - body: string (text of q being asked)
// - name: string (username of asker)
// - email: string (email of asker)
// - photos: array of strings
module.exports.addAnswer = (req, res) => {
  const { question_id } = req.params;
  const {
    body, name, email, photos,
  } = req.body;
  if (
    Number.isNaN(Number(question_id))
    || body === undefined
    || name === undefined
    || email === undefined
    || photos === undefined
  ) {
    res.status(400).send('BAD INPUT');
  } else {
    res.send(`question_id: ${question_id}, body: ${body}, name: ${name}, email: ${email}, photos: ${photos.join()}`);
  }
};

// mark question as helpful
// parameters:
// - question_id: integer
module.exports.markQuestionAsHelpful = (req, res) => {
  const { question_id } = req.params;
  if (Number.isNaN(Number(question_id))) {
    res.status(400).send('BAD INPUT');
  } else {
    res.send(`question_id: ${question_id}`);
  }
};

// report question
// parameters:
// - question_id: integer
module.exports.reportQuestion = (req, res) => {
  const { question_id } = req.params;
  if (Number.isNaN(Number(question_id))) {
    res.status(400).send('BAD INPUT');
  } else {
    res.send(`question_id: ${question_id}`);
  }
};

// mark answer as helpful
// parameters:
// - answer_id: integer
module.exports.markAnswerAsHelpful = (req, res) => {
  const { answer_id } = req.params;
  if (Number.isNaN(Number(answer_id))) {
    res.status(400).send('BAD INPUT');
  } else {
    res.send(`answer_id: ${answer_id}`);
  }
};

// report answer
// parameters:
// - answer_id: integer
module.exports.reportAnswer = (req, res) => {
  const { answer_id } = req.params;
  if (Number.isNaN(Number(answer_id))) {
    res.status(400).send('BAD INPUT');
  } else {
    res.send(`answer_id: ${answer_id}`);
  }
};