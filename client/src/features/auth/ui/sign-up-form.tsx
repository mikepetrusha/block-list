import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { Button, buttonVariants } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export const SignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit((data) => signUpMutation.mutate(data))}
    >
      <Input type="email" placeholder="Email" {...register("email")} />
      <Input type="password" placeholder="Password" {...register("password")} />
      <Button type="submit" disabled={signUpMutation.isPending}>
        Submit
      </Button>

      <Link
        className={buttonVariants({ variant: "link" })}
        href={ROUTES.SIGN_IN}
      >
        Sing In
      </Link>
    </form>
  );
};
