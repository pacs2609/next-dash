
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/app/utils/db';

export async function GET() {
    try {
        const connection = await pool.getConnection();
        const [result] = await connection.query(
            'SELECT * FROM menus ORDER by sort asc'
        );
        connection.release();
        if (result.length === 0) {
            return NextResponse.json({ 'status': 400 })
        }
        return NextResponse.json(result)
    } catch (error) {
        return {
            message: 'Fail',
        };
    }
}
