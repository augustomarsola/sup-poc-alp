import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const supabase = await createClient();
  const { data, error } = await supabase.functions.invoke(
    "update-user-profile",
    {
      method: "POST",
      body,
    }
  );
  console.log(data, error);
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
