import { SignUpForm } from "@/features/auth";

export const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <div>header</div>
      <main className="grow flex flex-col pt-24">
        <div className="rounded-xl border border-slate-300 px-14 py-8 max-w-[400px] self-center w-full">
          <h1 className="text-2xl mb-10">Sign Up</h1>
          <SignUpForm />
        </div>
      </main>
    </div>
  );
};
