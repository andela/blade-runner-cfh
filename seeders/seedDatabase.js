import mongoose from 'mongoose';

import answersArrayOfObj from './answers';
import questionsArrayOfObj from './questions';
import Answer from '../app/models/answer';
import Question from '../app/models/question';

require('dotenv').config();

mongoose.connect(process.env.MONGOHQ_URL);
mongoose.Promise = global.Promise;


/**
 * Drops answers collection
 */
Question.collection.drop();

/**
 * Drop questiopns collection
 */
Answer.collection.drop();

/**
 * Creat and seed answer collection
 */
answersArrayOfObj.forEach((arrayElement) => {
  const answer = new Answer(arrayElement);
  answer.save((err) => {
    if (err) {
      return err;
    }
    return `seeded answer number ${arrayElement.id}`;
  });
});

/**
 * Creat and seed question collection
 */
questionsArrayOfObj.forEach((arrayElement) => {
  const question = new Question(arrayElement);
  question.save((err) => {
    if (err) {
      return err;
    }
    return `seeded question number ${arrayElement.id}`;
  });
});
