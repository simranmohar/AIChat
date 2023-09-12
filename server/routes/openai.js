import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { openai } from '../index.js';

dotenv.config();
const router = express.Router();
router.post("/text", async (req, res) => {
    try {
        const { text, activeChatId } = req.body;

    } catch (error) {
        console.log("error", error);
    }
});
