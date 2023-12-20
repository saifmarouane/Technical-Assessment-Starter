
@Controller('testlongchain')
export class TestlongchainController {}
// src/yourControllerName/yourControllerName.controller.ts

import { Controller, Post, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { callChain } from 'src/lib/langchain';
import { Message } from 'ai';

const formatMessage = (message: Message): string => {
  return `${message.role === "user" ? "Human" : "Assistant"}: ${message.content}`;
};

@Controller('testlongchain')
export class YourControllerNameController {

  @Post()
  async handlePost(@Req() req: Request, @Res() res: Response) {
    console.log("****************************************************");
    // Uncomment the next line if you want to see the full request object
    // console.log(req);

    try {
      const body = req.body;
      const messages: Message[] = body.messages ?? [];
      console.log("Messages ", messages);
      const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
      const question = messages[messages.length - 1]?.content;

      console.log("Chat history ", formattedPreviousMessages.join("\n"));

      if (!question) {
        return res.status(HttpStatus.BAD_REQUEST).json("Error: No question in the request");
      }

      const streamingTextResponse = await callChain({
        question,
        chatHistory: formattedPreviousMessages.join("\n"),
      });

      // Assuming callChain returns the expected response, you can send it back
      return res.json(streamingTextResponse);

    } catch (error) {
      console.error("Internal server error ", error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json("Error: Something went wrong. Try again!");
    }
  }
}
