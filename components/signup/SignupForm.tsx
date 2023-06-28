import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import MainLogo from "@/public/logo/mainlogo.png";
import { SignUpReq } from "@/models/auth";
import { useUserSignUpMutation } from "@/hooks/mutation/auth/userAuthMutation";
import { useState } from "react";

const SignUpForm = () => {
  const radioGenderStyle =
    "flex flex-1 hover:bg-main hover:bg-opacity-60 hover:text-main-contra px-4 py-2 items-center justify-center cursor-pointer";
  const inputStyle = "w-full flex flex-1 border border-gary-200 p-2";

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<SignUpReq>({ mode: "onChange" });

  const [indexOfGenderWith, setIndexOfGenderWith] = useState<number>(0);
  const mutation = useUserSignUpMutation();
  return (
    <div className="w-full flex flex-1 flex-col gap-16 items-center py-4">
      <section className="w-full flex flex-col gap-4 items-center justify-center p-4">
        <Image
          width={280}
          height={50}
          className="w-32 cursor-pointer"
          src={MainLogo}
          alt="메인로고"
        />
        {/* 아이디 비밀번호 form 영역 */}
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit((data) => {
            const SignUpFormReq: SignUpReq = {
              email: data.email,
              password: data.password,
              nickname: data.nickname,
              gender: data.gender,
              name: data.name,
              phone: data.phone,
              birth: data.birth,
            };

            // alert(JSON.stringify(SignUpFormReq));
            mutation.mutate(SignUpFormReq);
          })}
        >
          <div className="w-full flex flex-col gap-2">
            {/* 이메일 입력*/}
            <input
              id="email"
              className={inputStyle}
              type="email"
              placeholder="이메일을 입력"
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
            {errors.email && <small role="alert">{errors.email.message}</small>}
            {/* 비밀번호 입력 */}
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
            {/* 비밀번호 확인 */}
            <input
              className={inputStyle}
              type="password"
              id="passwordConfirm"
              placeholder="비밀번호 확인"
              {...register("passwordConfirm", {
                required: "비밀번호는 필수 입력입니다.",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
                },
                validate: {
                  check: (val) => {
                    if (getValues("password") !== val) {
                      return "비밀번호가 일치하지 않습니다.";
                    }
                  },
                },
              })}
            />
            {errors.passwordConfirm && (
              <small role="alert">{errors.passwordConfirm.message}</small>
            )}
            {/* 이름 입력 */}
            <input
              className={inputStyle}
              type="text"
              id="name"
              placeholder="이름 입력"
              {...register("name", {
                required: "이름을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 10글자 이하로 입력해주세요.",
                },
                maxLength: {
                  value: 10,
                  message: "3글자 이상 10글자 이하로 입력해주세요.",
                },
                pattern: {
                  value: /^[가-힣]{3,10}$/,
                  message: "한국어로만 가입가능 합니다.",
                },
              })}
            />
            {errors.name && <small role="alert">{errors.name.message}</small>}

            {/* 닉네임 입력 */}
            <input
              className={inputStyle}
              type="text"
              id="nickName"
              placeholder="닉네임 입력"
              {...register("nickname", {
                required: "닉네임을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 입력해주세요.",
                },
                pattern: {
                  value: /^[가-힣]{3,10}$/,
                  message: "자음 모음 제외 및 한국어만 가능합니다.",
                },
              })}
            />
            {errors.nickname && (
              <small role="alert">{errors.nickname.message}</small>
            )}
            {/* 생년월일 입력 */}
            <input
              className={inputStyle}
              type="text"
              id="birth"
              placeholder="생년월일 8자리 입력"
              {...register("birth", {
                required: "생년월일 8자리를 입력해주세요.",
                pattern: {
                  value:
                    /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
                  message: "주민등록번호 8자리를 -포함해서 입력해주세요.",
                },
              })}
            />
            {errors.birth && <small role="alert">{errors.birth.message}</small>}
            {/* 전화번호 입력 */}
            <input
              className={inputStyle}
              type="text"
              id="phone"
              placeholder="휴대폰번호 입력"
              {...register("phone", {
                required: "휴대번호를 입력해주세요",
                pattern: {
                  value: /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/,
                  message: "휴대번호 11자리를 `-`없이 입력해주세요.",
                },
              })}
            />
            {errors.phone && <small role="alert">{errors.phone.message}</small>}
            {/* 성별선택 */}
            <fieldset className="w-full flex flex-row items-center border border-default rounded-md divide-x-2 overflow-hidden">
              <div className="w-1/2 flex flex-row items-center justify-center">
                <label
                  className={`${radioGenderStyle} ${
                    indexOfGenderWith === 0
                      ? `bg-main text-main-contra`
                      : `bg-white`
                  }`}
                  htmlFor="male"
                  onClick={() => {
                    setIndexOfGenderWith(0);
                  }}
                >
                  남성
                  <input
                    id="male"
                    checked={indexOfGenderWith === 0}
                    className="hidden"
                    {...register("gender", { required: true })}
                    type="radio"
                    value="M"
                  />
                </label>
              </div>
              <div className="w-1/2 flex flex-row items-center justify-center">
                <label
                  className={`${radioGenderStyle} ${
                    indexOfGenderWith === 1
                      ? `bg-main text-main-contra`
                      : `bg-white`
                  }`}
                  htmlFor="female"
                  onClick={() => {
                    setIndexOfGenderWith(1);
                  }}
                >
                  여성
                  <input
                    id="female"
                    checked={indexOfGenderWith === 1}
                    className="hidden"
                    {...register("gender", { required: true })}
                    type="radio"
                    value="F"
                    placeholder="여성"
                  />
                </label>
              </div>
            </fieldset>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={"w-full p-2 bg-main text-main-contra rounded-md"}
          >
            회원가입
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignUpForm;
