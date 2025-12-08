import { pool } from "../config/database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
            [username, email, hashedPassword]
        )
        
        const user = result.rows[0];

        const token = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: "1h"});

        res.json({user, token})
    }
    
    catch (error) {
        console.error(error);
        res.status(400).json({message: "Це ім'я користувача або пошта вже використовується"});
    }
}

export const login = async (req, res) => {
    const {identifier, password} = req.body;
    
    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1 or username = $1',
            [identifier]
        )

        if (result.rows.length === 0) {
            return res.status(400).json({message: "Користувач не знайдений"});
        }

        const user = result.rows[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message: "Неправильний пароль"});
        }

        const token = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: "1h"});

        res.json({token, user: {id: user.id, username: user.username, email: user.email}});
    }

    catch (error) {
        console.error(error);
        res.status(500).json({message: "Помилка сервера"});
    }
}

export const currentUser = async (req, res) => {
    try {
        const userId = req.userId;
        const result = await pool.query(
            'SELECT id, username, email FROM users WHERE id = $1',
            [userId]
        )
        const user = result.rows[0];
        res.json({user});
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Помилка отримання користувача"});
    }
}
