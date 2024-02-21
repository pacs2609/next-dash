// pages/api/login.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/utils/db';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
            'SELECT * FROM users WHERE username = ? AND password = ?',
            [data.username, data.password]
        );
        connection.release();
        if (result.length === 0) {
            return NextResponse.json({ 'status': 405 })
        }
        return NextResponse.json({ 'status': 200 , 'api': result })
    } catch (error) {
        return {
            message: 'Fail',
        };
    }
}
