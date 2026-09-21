"use client";

import { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg p-8">
        <h1 className="text-xl font-bold text-center text-blue-700 mb-6">
          인베스트아카데미
        </h1>

        <div className="flex mb-6 border-b border-gray-200">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 pb-2 text-sm font-semibold ${
              mode === "login"
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-gray-400"
            }`}
          >
            로그인
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 pb-2 text-sm font-semibold ${
              mode === "signup"
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-gray-400"
            }`}
          >
            회원가입
          </button>
        </div>

        <form className="flex flex-col gap-4">
          {mode === "signup" && (
            <input
              type="text"
              placeholder="이름"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          )}
          <input
            type="email"
            placeholder="이메일"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />

          <button
            type="submit"
            className="bg-blue-700 text-white rounded-md py-2 text-sm font-semibold mt-2"
          >
            {mode === "login" ? "로그인" : "회원가입"}
          </button>
        </form>
      </div>
    </div>
  );
}