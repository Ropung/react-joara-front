import React from "react";
import Path from "@/constants/path/routes";
import Image from "next/image";

import { useForm } from "react-hook-form";
import Link from "next/link";
import MainLogo from "@/public/logo/mainlogo.png";
import { LoginRequest } from "@/models/api/auth";
import { useUserLoginMutation } from "@/hooks/mutation/userAuthMutation";
import { useRouter } from "next/router";
import token from "@/utils/token";
import { useQuery } from "@tanstack/react-query";
import { AUTH_KEY } from "@/constants/key";
const LoginForm = () => {
  const inputStyle = "w-full flex flex-1 border border-gary-200 p-2";
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<LoginRequest>({ mode: "onChange" });

  const { SIGNUP } = Path;
  const mutation = useUserLoginMutation();
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-1 flex-col gap-16 items-center py-8">
        <Image
          width={200}
          height={50}
          className="cursor-pointer"
          src={MainLogo}
          alt="메인로고"
        />

        <section className="w-full flex flex-col gap-4 items-center justify-center px-8 py-4">
          {/* 아이디 비밀번호 form 영역 */}
          <form
            className="w-full flex flex-col gap-8"
            onSubmit={handleSubmit((data) => {
              token.remove();
              mutation.mutate(data);
            })}
          >
            <div className="w-full flex flex-col gap-2 items-start justify-center">
              <input
                id="email"
                className={inputStyle}
                type="email"
                placeholder="이메일을 입력해주세요."
                aria-invalid={
                  !isDirty ? undefined : errors.email ? "true" : "false"
                }
                {...register("email", {
                  required: "이메일은 필수 입력입니다.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                })}
              />
              {errors.email && (
                <small role="alert">{errors.email.message}</small>
              )}
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                aria-invalid={
                  !isDirty ? undefined : errors.password ? "true" : "false"
                }
                className={inputStyle}
                {...register("password", {
                  required: "비밀번호는 필수 입력입니다.",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "비밀번호를 8~16자로 영문 소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
                  },
                })}
              />
              {errors.password && (
                <small role="alert">{errors.password.message}</small>
              )}
            </div>
            {/* 버튼영역 */}
            <div className="w-full flex flex-col gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={"w-full p-2 bg-main text-main-contra rounded-md"}
                //
                onClick={() => {
                  // FIXME axios 작업
                }}
              >
                로그인
              </button>
              <Link
                href={SIGNUP}
                className="text-center p-2 bg-default text-main-contra rounded-md hover:bg-main"
              >
                회원가입
              </Link>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default LoginForm;
