import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { openaiConfig } from '../index.js';

dotenv.config();
const router = express.Router();
router.post("/text", async (req, res) => {
    try {
        const { text, activeChatId } = req.body;

    } catch (error) {
        console.log("error", error);
    }
});
