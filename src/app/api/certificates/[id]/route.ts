import { NextResponse } from "next/server";

import { verifyCertificate } from "@/lib/store";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const cert = await verifyCertificate(id);

  if (!cert) {
    return NextResponse.json({ valid: false }, { status: 404 });
  }

  return NextResponse.json({
    valid: true,
    certificate: {
      certId: cert.certId,
      userName: cert.userName,
      courseTitle: cert.courseTitle,
      issuedAt: cert.issuedAt,
      trainerName: cert.trainerName,
      hours: cert.hours,
    },
  });
}