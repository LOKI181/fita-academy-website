import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/auth/auth-forms";
import { getSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Sign in",
  alternates: { canonical: "/login" },
};

export default async function LoginPage() {
  const auth = await getSession();
  if (auth) redirect("/dashboard");

  return (
    <section className="relative overflow-hidden bg-mist">
      <div className="aurora opacity-70" aria-hidden />
      <div className="grid-lines opacity-60" aria-hidden />

      <div className="container-x relative z-10 flex min-h-[calc(100vh-8rem)] items-center justify-center py-16">
        <div className="w-full max-w-md">
          <div className="surface p-8">
            <div className="text-center">
              <p className="font-heading text-xl font-black tracking-[-0.03em] text-foreground">
                FITA
                <span className="ml-1.5 text-[0.62rem] font-bold uppercase tracking-[0.26em] text-primary">
                  Academy
                </span>
              </p>
              <h1 className="mt-6 font-heading text-2xl font-black tracking-tight text-foreground">
                Welcome back
              </h1>
              <p className="mt-2 text-[0.875rem] text-muted-foreground">
                Sign in to your FITA Academy dashboard
              </p>
            </div>

            <div className="mt-8">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}