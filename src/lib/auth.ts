import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { getStore, publicUser } from "@/lib/store";
import type { Role, User } from "@/lib/types";

const secret = new TextEncoder().encode(
  process.env.FITA_JWT_SECRET || "fita-local-dev-secret-change-me"
);
const COOKIE = "fita_session";

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function signSession(user: User) {
  return await new SignJWT({
    role: user.role,
    name: user.name,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return {
      userId: payload.sub as string,
      role: payload.role as Role,
      name: payload.name as string,
    };
  } catch {
    return null;
  }
}

export async function getSession() {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return null;
  const session = await verifySession(token);
  if (!session) return null;
  const data = await getStore();
  const user = data.users.find((u) => u.id === session.userId);
  return user ? { session, user: publicUser(user) } : null;
}

export async function setSessionCookie(token: string) {
  const store = await cookies();
  store.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(COOKIE);
}

export async function requireUser() {
  const auth = await getSession();
  if (!auth) return null;
  return auth;
}

export async function requireRole(...roles: Role[]) {
  const auth = await getSession();
  if (!auth) return null;
  if (!roles.includes(auth.user.role)) return null;
  return auth;
}