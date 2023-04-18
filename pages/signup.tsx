import { useForm } from "react-hook-form";
import Image from "next/image";
import { UserProps } from "@/models/user";
import Path from "@/constants/path/routes";

const SignUp = () => {
  const inputStyle = "w-full flex flex-1 border border-gary-200 p-2";
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<UserProps>({ mode: "onChange" });

  const { SIGNUP } = Path;

  // router.push(url, as, options)

  return (
    <div className="w-full min-h-screen flex flex-col gap-2 p-4 justify-start items-center">
      <main className="w-[400px] h-full flex flex-col gap-4 bg-white p-4 rounded-md shadow-t-sm">
        <div className="w-full flex flex-1 flex-col gap-16 items-center py-4">
          <section className="w-full flex flex-col gap-4 items-center justify-center p-4">
            <Image
              width={280}
              height={50}
              className="w-32 cursor-pointer"
              src={"/logo/mainlogo.png"}
              alt="메인로고"
            />
            {/* 아이디 비밀번호 form 영역 */}
            <form
              className="w-full flex flex-col gap-8"
              onSubmit={handleSubmit((data) => {
                // FIXME
                alert(JSON.stringify(data));
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
                {errors.email && (
                  <small role="alert">{errors.email.message}</small>
                )}
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
                        /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$/,
                      message:
                        "비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
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
                        /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$/,
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
                {/* 프로필 입력 */}
                <input
                  className={inputStyle}
                  type="text"
                  id="nickName"
                  placeholder="프로필 입력"
                  {...register("nickName", {
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
                {errors.nickName && (
                  <small role="alert">{errors.nickName.message}</small>
                )}
                {/* 이름 입력 */}
                <input
                  className={inputStyle}
                  type="text"
                  id="fullName"
                  placeholder="이름 입력"
                  {...register("fullName", {
                    required: "닉네임을 입력해주세요.",
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
                {errors.fullName && (
                  <small role="alert">{errors.fullName.message}</small>
                )}
                {/* 주민앞자리입력 */}
                <input
                  className={inputStyle}
                  type="text"
                  id="birth"
                  placeholder="주민등록 번호 앞자리 6자리 입력"
                  {...register("birth", {
                    required: "주민 앞자리를 입력해주세요.",
                    pattern: {
                      value: /^\d{6}$/,
                      message: "주민등록번호 6자리를 -없이 입력해주세요.",
                    },
                  })}
                />
                {errors.birth && (
                  <small role="alert">{errors.birth.message}</small>
                )}
                <input
                  className={inputStyle}
                  type="text"
                  id="phoneNum"
                  placeholder="휴대폰번호 입력"
                  {...register("phoneNum", {
                    required: "휴대번호를 입력해주세요",
                    pattern: {
                      value: /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/,
                      message: "휴대번호 11자리를 `-`없이 입력해주세요.",
                    },
                  })}
                />
                {errors.phoneNum && (
                  <small role="alert">{errors.phoneNum.message}</small>
                )}
                <input
                  className={inputStyle}
                  type="text"
                  id="favorGenre"
                  placeholder="선호장르 선택"
                  {...register("favorGenre", {
                    required: "장르를 입력해주세요",
                    pattern: {
                      value: /^[ARH]$/,
                      message:
                        "A,R,H 중에서만 입력해주세요.(Action,Romance,History)",
                    },
                  })}
                />
                {errors.favorGenre && (
                  <small role="alert">{errors.favorGenre.message}</small>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={"w-full p-2 bg-main text-main-contra rounded-md"}
                //
                onClick={() => {
                  // FIXME axios 작업
                }}
              >
                회원가입
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
