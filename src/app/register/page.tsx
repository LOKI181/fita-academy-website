import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { RegisterForm } from "@/components/auth/auth-forms";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/auth";

export const metadata: Metadata = { title: "Create an account" };

export default async function RegisterPage() {
  const auth = await getSession();
  if (auth) redirect("/dashboard");

  return (
    <section className="mx-auto flex max-w-lg flex-col justify-center px-4 py-16 sm:px-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="font-heading text-2xl">Create your account</CardTitle>
          <CardDescription>
            Track courses, batches, payments and certificates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Students create a free account.{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Already have one? Sign in
        </Link>
      </p>
    </section>
  );
}