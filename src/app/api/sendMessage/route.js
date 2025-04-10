import { sendMessage } from "@/lib/whatsapp";
import { getConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, phone, age, gender, ticketNumber } = body;

  if (!name || !phone || !age || !gender || !ticketNumber) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const db = await getConnection();
  console.log(body)
    // Check if the phone number already exists
    const checkPhone = await db.request()
    .input("phone", phone)
    .query("SELECT * FROM TicketSubmissions WHERE phone = @phone");
  
  if (checkPhone.recordset.length > 0) {
    const existingRecord = checkPhone.recordset[0];
    return NextResponse.json({
      success: false,
      message: "Phone number already exists.",
      data: existingRecord
    });
  }
    // Insert into MSSQL database
    await db.request()
      .input("name", name)
      .input("phone", phone)
      .input("age", age)
      .input("gender", gender)
      .input("ticketNumber", ticketNumber)
      .query(`
        INSERT INTO TicketSubmissions (name, phone, age, gender, ticketNumber)
        VALUES (@name, @phone, @age, @gender, @ticketNumber)
      `);
  
    // Send WhatsApp message
    const response = await sendMessage(phone, name, age, gender, ticketNumber);
    return NextResponse.json({ success: true, response });
  
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "An error occurred." });
  }
  
}
