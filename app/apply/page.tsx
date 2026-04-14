"use client";

import { useState } from "react";
import Script from "next/script";
import Header from "../../components/Header";

declare global {
  interface Window {
    daum: {
      Postcode: new (options: {
        oncomplete: (data: {
          zonecode: string;
          address: string;
          buildingName?: string;
          apartment?: string;
          addressType: "R" | "J";
          bname?: string;
        }) => void;
      }) => {
        open: () => void;
      };
    };
  }
}

type FormErrors = {
  privacy_agree?: string;
  phone?: string;
  email?: string;
  service?: string;
  name?: string;
};

export default function ApplyPage() {
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [documentType, setDocumentType] = useState("");

  const openPostcode = () => {
    if (!window.daum?.Postcode) {
      alert("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    new window.daum.Postcode({
      oncomplete: function (data) {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
          if (data.bname) extraAddress += data.bname;
          if (data.buildingName) {
            extraAddress += extraAddress
              ? `, ${data.buildingName}`
              : data.buildingName;
          }
          if (extraAddress) {
            fullAddress += ` (${extraAddress})`;
          }
        }

        setPostcode(data.zonecode);
        setAddress(fullAddress);
      },
    }).open();
  };

  const handlePhoneChange = (value: string) => {
    const onlyNumber = value.replace(/\D/g, "").slice(0, 11);

    if (onlyNumber.length < 4) return onlyNumber;
    if (onlyNumber.length < 8) {
      return `${onlyNumber.slice(0, 3)}-${onlyNumber.slice(3)}`;
    }
    return `${onlyNumber.slice(0, 3)}-${onlyNumber.slice(3, 7)}-${onlyNumber.slice(7)}`;
  };

  const validateForm = (form: HTMLFormElement) => {
    const newErrors: FormErrors = {};

    const privacyAgree = (
      form.elements.namedItem("privacy_agree") as HTMLInputElement | null
    )?.checked;
    const phone =
      (form.elements.namedItem("phone") as HTMLInputElement | null)?.value.trim() ??
      "";
    const email =
      (form.elements.namedItem("email") as HTMLInputElement | null)?.value.trim() ??
      "";
    const name =
      (form.elements.namedItem("name") as HTMLInputElement | null)?.value.trim() ??
      "";
    const selectedServices = form.querySelectorAll('input[name="service"]:checked');

    if (!privacyAgree) {
      newErrors.privacy_agree = "개인정보 수집 및 이용 동의가 필요합니다.";
    }

    if (!phone) {
      newErrors.phone = "연락처를 입력해주세요.";
    } else if (!/^01[0-9]-?\d{3,4}-?\d{4}$/.test(phone)) {
      newErrors.phone = "올바른 휴대전화 번호를 입력해주세요. 예: 010-1234-5678";
    }

    if (!email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }
    if (!name) {
      newErrors.name = "이름 또는 회사명을 입력해주세요.";
    }
    if (selectedServices.length === 0) {
      newErrors.service = "서비스를 1개 이상 선택해주세요.";
    }

    return newErrors;
  };

  const focusFirstError = (form: HTMLFormElement, newErrors: FormErrors) => {
    const order: (keyof FormErrors)[] = ["privacy_agree", "service", "name", "phone", "email"];

    for (const key of order) {
      if (!newErrors[key]) continue;

      let el: HTMLElement | null = null;

      if (key === "service") {
        el = form.querySelector('input[name="service"]') as HTMLElement | null;
      } else {
        el = form.querySelector(`[name="${key}"]`) as HTMLElement | null;
      }

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          if ("focus" in el) el.focus();
        }, 150);
      }
      break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const newErrors = validateForm(form);

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      focusFirstError(form, newErrors);
    }
  };

  return (
    <>
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
        <Header />

        <main>
          <section className="bg-[#eef1fb]">
            <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
          <p className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#3f4b74] to-[#6c7bd9] px-5 py-1.5 text-sm font-semibold text-white shadow-md backdrop-blur transition hover:shadow-lg">
  Professional Translation Service
</p>

              <h1 className="text-3xl font-bold leading-tight text-[#2f3a63] sm:text-4xl lg:text-5xl">
                번역 / 인증 견적문의
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                제출 국가, 문서 종류, 희망 일정과 요청사항을 남겨주시면 확인 후
                순차적으로 안내드립니다.
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-[#3f4b74] px-8 py-6 text-white">
                <h2 className="mt-2 text-2xl font-bold">견적 문의서 작성</h2>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  입력하신 내용을 바탕으로 번역 가능 여부, 예상 비용, 예상 소요기간을 안내드립니다.
                </p>
              </div>

              <form
                action="https://formsubmit.co/love_autumnsky@naver.com"
                method="POST"
                encType="multipart/form-data"
                noValidate
                onSubmit={handleSubmit}
                className="space-y-10 px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
              >
                <input type="hidden" name="_subject" value="[홈페이지 견적문의] 신규 문의" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://kjtranslate.com/success"
                />

                <section>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#2f3a63]">
                      개인정보 수집 및 이용에 대한 동의
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      아래 내용을 확인하신 후 동의해 주세요.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-[#f8f9fd] p-4">
                    <div className="h-36 overflow-y-auto rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
                      <p className="font-semibold text-[#2f3a63]">
                        &lt;개인정보 수집 및 이용에 대한 동의&gt;
                      </p>


                      <p className="mt-5 font-semibold text-[#2f3a63]">
                        1. 수집 항목
                      </p>
                      <p className="mt-1">
                        성명(회사명), 연락처, 이메일, 주소 등 문의 작성 시 입력한 정보
                      </p>

                      <p className="mt-5 font-semibold text-[#2f3a63]">
                        2. 이용 목적
                      </p>
                      <p className="mt-1">
                        견적 안내 및 상담 진행, 문의 응대
                      </p>

                      <p className="mt-5 font-semibold text-[#2f3a63]">
                        3. 보유 및 이용 기간
                      </p>
                      <p className="mt-1">
                        문의 처리 완료 후 1년간 보관 후 파기
                      </p>

                      <p className="mt-5 font-semibold text-[#2f3a63]">
                        4. 동의 거부 권리 안내
                      </p>
                      <p className="mt-1">
                        귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다. 다만, 동의하지 않을 경우 견적 안내 및 상담 서비스 이용이 제한될 수 있습니다.
                      </p>

                    </div>

                    <label
                      className={`mt-4 flex items-start gap-3 rounded-xl bg-white px-4 py-4 text-sm text-slate-700 ${errors.privacy_agree
                        ? "border border-red-500"
                        : "border border-slate-200"
                        }`}
                    >
                      <input
                        type="checkbox"
                        name="privacy_agree"
                        className="mt-1 h-4 w-4 accent-[#3f4b74]"
                        onChange={() =>
                          setErrors((prev) => ({
                            ...prev,
                            privacy_agree: undefined,
                          }))
                        }
                      />
                      <span>개인정보 수집 및 이용에 동의합니다.</span>
                    </label>

                    {errors.privacy_agree && (
                      <p className="mt-2 text-xs text-red-500">{errors.privacy_agree}</p>
                    )}
                  </div>
                </section>

                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                  {/* 왼쪽 */}
                  <div className="space-y-8">
                    <section className="order-1 lg:col-start-1 lg:row-start-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-[#2f3a63]">
                          서비스 선택 <span className="text-red-500">*</span>
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          필요한 서비스를 1개 이상 선택해주세요.
                        </p>
                      </div>

                      <div
                        className={`rounded-2xl p-4 ${errors.service
                          ? "border border-red-500 bg-red-50/40"
                          : "border border-slate-200 bg-[#f8f9fd]"
                          }`}
                      >
                        <div className="space-y-2">
                          {[
                            "번역",
                            "번역 인증 / 공증",
                            "아포스티유 / 대사관인증",
                            "미성년자 부모동의서",
                            "다국어 녹취록",
                            "증명서 발급대행",
                            "기타 상담",
                          ].map((item) => (
                            <label
                              key={item}
                              className="flex items-center gap-2 text-sm text-slate-700"
                            >
                              <input
                                type="checkbox"
                                name="service"
                                value={item}
                                className="h-4 w-4 cursor-pointer accent-[#3f4b74]"
                                onChange={() =>
                                  setErrors((prev) => ({ ...prev, service: undefined }))
                                }
                              />
                              <span>{item}</span>
                            </label>
                          ))}
                        </div>

                        <div className="mt-4">
                          <input
                            type="text"
                            name="service_etc"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#3f4b74]"
                            placeholder="기타 입력"
                          />
                        </div>

                        {errors.service && (
                          <p className="mt-2 text-xs text-red-500">{errors.service}</p>
                        )}
                      </div>
                    </section>

<section className="hidden lg:block lg:col-start-1 lg:row-start-2 lg:mt-15">
                        <div className="mb-4">
                        <h3 className="text-xl font-bold text-[#2f3a63]">등기 수령 주소 (우편 수령 희망시 입력)</h3>
                        <p className="mt-1 text-sm text-slate-500">
                          번역본을 우편(등기)으로 받기를 희망하시는 경우 입력해주세요. <br/> 등기비용은 저희가 부담합니다.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            name="postcode"
                            value={postcode}
                            readOnly
                            className="w-full max-w-[140px] rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm outline-none"
                            placeholder="우편번호"
                          />
                          <button
                            type="button"
                            onClick={openPostcode}
                            className="inline-flex cursor-pointer shrink-0 items-center justify-center rounded-xl bg-[#3f4b74] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                          >
                            주소 검색
                          </button>
                        </div>

                        <input
                          type="text"
                          name="address"
                          value={address}
                          readOnly
                          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm outline-none"
                          placeholder="기본 주소"
                        />

                        <input
                          type="text"
                          name="detail_address"
                          value={detailAddress}
                          onChange={(e) => setDetailAddress(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#3f4b74]"
                          placeholder="상세 주소를 입력해주세요"
                        />
                      </div>
                    </section>
                  </div>

                  {/* 오른쪽 */}
                  <div className="space-y-8">
                    <section className="order-2 lg:order-none">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-[#2f3a63]">기본 정보</h3>
                        <p className="mt-1 text-sm text-slate-500">
                          연락 가능한 정보를 정확하게 입력해주세요.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="w-full">
                          <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                            이름 / 회사명 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition ${errors.name
                              ? "border-red-500 bg-red-50/30"
                              : "border-slate-300 focus:border-[#3f4b74]"
                              }`}
                            placeholder="성함 또는 회사명을 입력해주세요"
                            onChange={() =>
                              setErrors((prev) => ({ ...prev, name: undefined }))
                            }
                          />
                          {errors.name && (
                            <p className="mt-2 text-xs text-red-500">{errors.name}</p>
                          )}
                        </div>

                        <div className="w-full">
                          <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                            연락처 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            maxLength={13}
                            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition ${errors.phone
                              ? "border-red-500 bg-red-50/30"
                              : "border-slate-300 focus:border-[#3f4b74]"
                              }`}
                            placeholder="예: 010-1234-5678"
                            onChange={(e) => {
                              e.target.value = handlePhoneChange(e.target.value);
                              setErrors((prev) => ({ ...prev, phone: undefined }));
                            }}
                          />
                          {errors.phone && (
                            <p className="mt-2 text-xs text-red-500">{errors.phone}</p>
                          )}
                        </div>

                        <div className="w-full">
                          <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                            이메일 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition ${errors.email
                              ? "border-red-500 bg-red-50/30"
                              : "border-slate-300 focus:border-[#3f4b74]"
                              }`}
                            placeholder="이메일을 입력해주세요"
                            onChange={() =>
                              setErrors((prev) => ({ ...prev, email: undefined }))
                            }
                          />
                          {errors.email && (
                            <p className="mt-2 text-xs text-red-500">{errors.email}</p>
                          )}
                        </div>

                        <div className="w-full">
                          <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                            번역 언어
                          </label>
                          <input
                            type="text"
                            name="language"
                            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#3f4b74]"
                            placeholder="예: 한국어 → 영어"
                          />
                        </div>

                        <div className="w-full">
                          <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                            제출 국가 / 기관명
                          </label>
                          <input
                            type="text"
                            name="country_or_agency"
                            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#3f4b74]"
                            placeholder="예: 미국 / 출입국관리소 / 학교"
                          />
                        </div>

                        <div className="w-full">
                          <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                            문서 종류
                          </label>
                          <select
                            name="document_type"
                            value={documentType}
                            onChange={(e) => setDocumentType(e.target.value)}
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#3f4b74]"
                          >
                            <option disabled>📄 개인 서류</option>
                            <option>가족관계증명서</option>
                            <option>기본증명서</option>
                            <option>혼인관계증명서</option>
                            <option>출생증명서</option>
                            <option>사망증명서</option>
                            <option>성적증명서</option>
                            <option>생활기록부</option>
                            <option>학위증</option>
                            <option>재직증명서</option>
                            <option disabled>📄 기업 서류</option>
                            <option>사업자등록증</option>
                            <option>법인등기부등본</option>
                            <option>계약서</option>

                            <option disabled>📄 법원 서류</option>
                            <option>판결문</option>

                            <option disabled>📄 기타</option>
                            <option value="direct">직접 입력</option>
                          </select>

                          {documentType === "direct" && (
                            <div className="mt-4">
                              <input
                                type="text"
                                name="document_type_etc"
                                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#3f4b74]"
                                placeholder="문서 종류를 직접 입력해주세요"
                              />
                            </div>
                          )}
                        </div>

                        <div className="w-full">
                          <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                            희망 완료 날짜
                          </label>
                          <input
                            type="date"
                            name="due_date"
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full cursor-pointer rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#3f4b74]"
                          />
                        </div>

                        <div className="block lg:hidden">
                          <div className="mb-4 mt-8">
                            <h3 className="text-xl font-bold text-[#2f3a63]">등기 수령 주소 (우편 수령 희망시 입력)</h3>
                            <p className="mt-1 text-sm text-slate-500">
                              번역본을 우편(등기)으로 받기를 희망하시는 경우 입력해주세요.
                            </p>
                          </div>

                          <div className="space-y-3">
                            <div className="flex gap-2">
                              <input
                                type="text"
                                name="postcode_mobile"
                                value={postcode}
                                readOnly
                                className="w-full max-w-[140px] rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm outline-none"
                                placeholder="우편번호"
                              />
                              <button
                                type="button"
                                onClick={openPostcode}
                                className="inline-flex cursor-pointer shrink-0 items-center justify-center rounded-xl bg-[#3f4b74] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                              >
                                주소 검색
                              </button>
                            </div>

                            <input
                              type="text"
                              name="address_mobile"
                              value={address}
                              readOnly
                              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm outline-none"
                              placeholder="기본 주소"
                            />

                            <input
                              type="text"
                              name="detail_address_mobile"
                              value={detailAddress}
                              onChange={(e) => setDetailAddress(e.target.value)}
                              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#3f4b74]"
                              placeholder="상세 주소를 입력해주세요"
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#2f3a63]">요청사항</h3>
                    </div>

                    <textarea
                      name="message"
                      rows={7}
                      className="w-full rounded-2xl border border-slate-300 px-4 py-4 text-sm leading-7 outline-none transition focus:border-[#3f4b74]"
                      placeholder="제출 목적, 긴급 여부, 주의사항 등을 입력해주세요."
                    />
                  </section>

                  <section>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#2f3a63]">첨부파일</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        번역 또는 인증이 필요한 문서를 첨부해주세요. 파일이 여러 개면 압축해서 올려주셔도 됩니다.
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-2xl border border-dashed border-slate-300 bg-[#fafbff] p-4">
                        <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                          첨부파일 1
                        </label>
                        <input
                          type="file"
                          name="file1"
                          className="block w-full cursor-pointer text-sm text-slate-600 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-[#3f4b74] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:opacity-90"
                        />
                      </div>

                      <div className="rounded-2xl border border-dashed border-slate-300 bg-[#fafbff] p-4">
                        <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                          첨부파일 2
                        </label>
                        <input
                          type="file"
                          name="file2"
                          className="block w-full cursor-pointer text-sm text-slate-600 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-[#3f4b74] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:opacity-90"
                        />
                      </div>

                      <div className="rounded-2xl border border-dashed border-slate-300 bg-[#fafbff] p-4">
                        <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                          첨부파일 3
                        </label>
                        <input
                          type="file"
                          name="file3"
                          className="block w-full cursor-pointer text-sm text-slate-600 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-[#3f4b74] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:opacity-90"
                        />
                        <p className="mt-2 text-xs text-slate-500">
                          3개 이상의 파일은 압축파일로 업로드해주세요.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>

                <section className="border-t border-slate-200 pt-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-6 text-slate-500">
                      접수된 내용을 확인한 후 이메일 또는 연락처로 순차적으로 안내드립니다.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#2f3a63] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                    >
                      견적 문의하기
                    </button>
                  </div>
                </section>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}