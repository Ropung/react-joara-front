import React from "react";
import Path from "@/constants/path/routes";
import Image from "next/image";

import { useForm } from "react-hook-form";
import Link from "next/link";
import MainLogo from "@/public/logo/mainlogo.png";
import { LoginReq } from "@/models/auth";
import { useUserLoginMutation } from "@/hooks/mutation/userAuthMutation";
import token from "@/utils/token";

const LoginForm = () => {
  const inputStyle = "w-full flex flex-1 border border-gary-200 p-2";
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<LoginReq>({ mode: "onChange" });

  const { SIGN_UP } = Path;
  const mutation = useUserLoginMutation();

  return (
    <>
      <div className="flex flex-col items-center flex-1 w-full gap-16 py-8">
        <Image
          width={200}
          height={50}
          className="cursor-pointer"
          src={MainLogo}
          alt="메인로고"
        />

        <section className="flex flex-col items-center justify-center w-full gap-4 px-8 py-4">
          {/* 아이디 비밀번호 form 영역 */}
          <form
            className="flex flex-col w-full gap-8"
            onSubmit={handleSubmit((data) => {
              token.remove();
              mutation.mutate(data);
            })}
          >
            <div className="flex flex-col items-start justify-center w-full gap-2">
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
            <div className="flex flex-col w-full gap-2">
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
                href={SIGN_UP}
                className="p-2 text-center rounded-md bg-default text-main-contra hover:bg-main"
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
