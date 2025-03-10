import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const response = await fetch(
    "https://hqkanlxtwshileeirtqa.supabase.co/functions/v1/update-user-profile",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.access_token}`,
      },
      body: JSON.stringify(body),
    }
  );

  return response;
}
