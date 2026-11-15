import { handleContact } from "@/lib/submit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function POST(request: Request) {
  return handleContact(request);
}
