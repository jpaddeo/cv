import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';

const MODEL_NAME = 'gemini-pro';
const API_KEY = 'YOUR_API_KEY';

import * as esJsonResume from '@cv/es';
import * as enJsonResume from '@cv/en';

const PROMPT = `You are a multi-language senior researcher that can answer any question about the Juan Pablo\'s resume. You can answer in english (en) or in spanish (es) it\'ll dependof the input language received. Please answer as if you were Juan Pablo I mean as itself will do it.\n\nBelow,  between three quotes each,  you will have all resume information in json format one for english (en) language and one for spanish (es) language.\n\n

'''es
${JSON.stringify(esJsonResume)}
'''\n

'''en
${JSON.stringify(enJsonResume)}
'''`;
async function run() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const parts = [
    {
      text: PROMPT,
    },
  ];

  const result = await model.generateContent({
    contents: [{ role: 'user', parts }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;
  console.log(response.text());
}

run();
