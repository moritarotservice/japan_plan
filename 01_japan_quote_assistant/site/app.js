const STORAGE_KEY = "salon_guest_check_mvp";

const form = document.querySelector("#builder");
const preview = document.querySelector("#guestPreview");
const generateButton = document.querySelector("#generateButton");
const emailForm = document.querySelector("#emailForm");
const linkResult = document.querySelector("#linkResult");
const builderStatus = document.querySelector("#builderStatus");
const emailStatus = document.querySelector("#emailStatus");
const languageTabs = Array.from(document.querySelectorAll(".tab[data-lang]"));
let activeLang = "en";

const i18n = {
  en: {
    label: "Booking guide",
    beforeBooking: "Before booking",
    beforeBookingBody:
      "Please read this guide before confirming your appointment. Final service availability will be confirmed by the salon.",
    cancellation: "Cancellation policy",
    lateArrival: "Late arrival",
    payment: "Payment methods",
    beforeVisit: "Before your visit",
    dmTitle: "Send this before DM booking",
    dmBody:
      "Please check our booking guide before making a reservation. It includes cancellation, late arrival, payment, and pre-service notes.",
    noteTitle: "Salon note",
    noteDisclaimer: "This custom note is shown as entered by the salon and is not automatically translated in this MVP.",
  },
  zh: {
    label: "預約前說明",
    beforeBooking: "預約前",
    beforeBookingBody: "確認預約前請先閱讀此說明。最終是否能提供服務，會由店家現場確認。",
    cancellation: "取消規則",
    lateArrival: "遲到規則",
    payment: "付款方式",
    beforeVisit: "到店前注意事項",
    dmTitle: "預約 DM 前可發送",
    dmBody: "預約前請先確認本說明，內容包含取消、遲到、付款與服務前注意事項。",
    noteTitle: "店家補充",
    noteDisclaimer: "此補充內容會依店家輸入顯示，目前 MVP 不會自動翻譯自由輸入文字。",
  },
  ko: {
    label: "예약 전 안내",
    beforeBooking: "예약 전",
    beforeBookingBody: "예약을 확정하기 전에 이 안내를 확인해 주세요. 최종 서비스 가능 여부는 매장에서 확인합니다.",
    cancellation: "취소 규정",
    lateArrival: "지각 안내",
    payment: "결제 방법",
    beforeVisit: "방문 전 확인사항",
    dmTitle: "DM 예약 전에 보내기",
    dmBody: "예약 전에 취소, 지각, 결제, 시술 전 주의사항이 포함된 안내를 확인해 주세요.",
    noteTitle: "매장 추가 안내",
    noteDisclaimer: "이 추가 안내는 매장이 입력한 원문으로 표시되며, 현재 MVP에서는 자동 번역되지 않습니다.",
  },
};

const translations = {
  cancelPolicy: {
    "Please cancel or reschedule at least 24 hours before your appointment.": {
      zh: "請至少在預約時間 24 小時前取消或更改時間。",
      ko: "예약 변경 또는 취소는 최소 24시간 전까지 해 주세요.",
    },
    "Please cancel or reschedule at least 48 hours before your appointment.": {
      zh: "請至少在預約時間 48 小時前取消或更改時間。",
      ko: "예약 변경 또는 취소는 최소 48시간 전까지 해 주세요.",
    },
    "Same-day cancellations may be charged a cancellation fee.": {
      zh: "當日取消可能會收取取消費。",
      ko: "당일 취소 시 취소 수수료가 발생할 수 있습니다.",
    },
    "No-shows may be charged the full service fee.": {
      zh: "未到店且未事先聯絡，可能會收取全額服務費。",
      ko: "노쇼의 경우 서비스 비용 전액이 청구될 수 있습니다.",
    },
  },
  latePolicy: {
    "If you are more than 10 minutes late, your service time may be shortened.": {
      zh: "若遲到超過 10 分鐘，服務時間可能會縮短。",
      ko: "10분 이상 늦는 경우 서비스 시간이 줄어들 수 있습니다.",
    },
    "If you are more than 15 minutes late, your appointment may be cancelled.": {
      zh: "若遲到超過 15 分鐘，預約可能會被取消。",
      ko: "15분 이상 늦는 경우 예약이 취소될 수 있습니다.",
    },
    "Please contact us if you expect to be late.": {
      zh: "若可能遲到，請提前聯絡店家。",
      ko: "늦을 것 같으면 미리 매장에 연락해 주세요.",
    },
  },
  payments: {
    Cash: { zh: "現金", ko: "현금" },
    "Credit card": { zh: "信用卡", ko: "신용카드" },
    "QR payment": { zh: "QR 支付", ko: "QR 결제" },
    "Transportation IC card": { zh: "交通 IC 卡", ko: "교통 IC 카드" },
  },
  intake: {
    "Please prepare reference photos of your desired style.": {
      zh: "請事先準備希望造型的參考照片。",
      ko: "원하는 스타일의 참고 사진을 준비해 주세요.",
    },
    "Please tell us about allergies or skin sensitivities before your visit.": {
      zh: "若有過敏或皮膚敏感，請在到店前告知。",
      ko: "알레르기나 피부 민감성이 있다면 방문 전에 알려 주세요.",
    },
    "Please tell us your current hair or skin condition before your visit.": {
      zh: "請在到店前告知目前頭髮或皮膚狀況。",
      ko: "현재 모발 또는 피부 상태를 방문 전에 알려 주세요.",
    },
    "Final service availability will be confirmed by the salon on the day.": {
      zh: "最終是否能提供服務，會由店家於當日現場確認。",
      ko: "최종 서비스 가능 여부는 당일 매장에서 확인합니다.",
    },
  },
};

const fields = [
  "shopName",
  "serviceType",
  "location",
  "shopLink",
  "cancelPolicy",
  "latePolicy",
  "extraNotes",
];

const track = (eventName, payload = {}) => {
  const events = JSON.parse(localStorage.getItem("sgc_events") || "[]");
  events.push({
    event: eventName,
    payload,
    at: new Date().toISOString(),
  });
  localStorage.setItem("sgc_events", JSON.stringify(events.slice(-80)));
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
};

const setStatus = (element, message) => {
  element.textContent = message;
  window.clearTimeout(element.dataset.timer);
  const timer = window.setTimeout(() => {
    element.textContent = "";
  }, 3200);
  element.dataset.timer = String(timer);
};

const getCheckedValues = (name) =>
  Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((item) => item.value);

const translateValue = (group, value) => {
  if (activeLang === "en") return value;
  return translations[group]?.[value]?.[activeLang] || value;
};

const getFormData = () => ({
  shopName: document.querySelector("#shopName").value.trim() || "Your Salon",
  serviceType: document.querySelector("#serviceType").value,
  location: document.querySelector("#location").value.trim() || "Near your nearest station",
  shopLink: document.querySelector("#shopLink").value.trim(),
  cancelPolicy: document.querySelector("#cancelPolicy").value,
  latePolicy: document.querySelector("#latePolicy").value,
  payments: getCheckedValues("payments"),
  intake: getCheckedValues("intake"),
  extraNotes: document.querySelector("#extraNotes").value.trim(),
});

const saveState = () => {
  const data = getFormData();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const restoreState = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const data = JSON.parse(raw);
    fields.forEach((id) => {
      if (data[id] && document.querySelector(`#${id}`)) {
        document.querySelector(`#${id}`).value = data[id];
      }
    });
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
};

const renderPreview = () => {
  const data = getFormData();
  const copy = i18n[activeLang];
  const paymentText =
    data.payments.length > 0
      ? data.payments.map((item) => translateValue("payments", item)).join(", ")
      : activeLang === "en"
        ? "Please ask the salon."
        : activeLang === "zh"
          ? "請向店家確認。"
          : "매장에 확인해 주세요.";
  const intakeItems =
    data.intake.length > 0
      ? data.intake.map((item) => `<li>${translateValue("intake", item)}</li>`).join("")
      : `<li>${copy.beforeVisit}</li>`;

  preview.innerHTML = `
    <header>
      <p class="eyebrow">${copy.label}</p>
      <h3>${escapeHtml(data.shopName)}</h3>
      <p class="meta">${escapeHtml(data.serviceType)} · ${escapeHtml(data.location)}</p>
    </header>

    <section>
      <h3>${copy.beforeBooking}</h3>
      <p>${copy.beforeBookingBody}</p>
    </section>

    <section>
      <h3>${copy.cancellation}</h3>
      <p>${escapeHtml(translateValue("cancelPolicy", data.cancelPolicy))}</p>
    </section>

    <section>
      <h3>${copy.lateArrival}</h3>
      <p>${escapeHtml(translateValue("latePolicy", data.latePolicy))}</p>
    </section>

    <section>
      <h3>${copy.payment}</h3>
      <p>${escapeHtml(paymentText)}</p>
    </section>

    <section>
      <h3>${copy.beforeVisit}</h3>
      <ul>${intakeItems}</ul>
      ${
        data.extraNotes
          ? `<p><strong>${copy.noteTitle}:</strong> ${escapeHtml(data.extraNotes)}</p><p class="meta">${copy.noteDisclaimer}</p>`
          : ""
      }
    </section>

    <section>
      <h3>${copy.dmTitle}</h3>
      <p>${copy.dmBody}</p>
    </section>
  `;

  preview.classList.remove("updated");
  window.requestAnimationFrame(() => {
    preview.classList.add("updated");
  });

  saveState();
  track("preview_generated", {
    serviceType: data.serviceType,
    hasShopName: data.shopName !== "Your Salon",
  });
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const createSampleLink = (shopName) => {
  const slug = shopName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 34);
  return `https://salon-guest-check.example/guide/${slug || "your-salon"}`;
};

let formStarted = false;
form.addEventListener("input", () => {
  if (!formStarted) {
    track("form_started");
    formStarted = true;
  }
  renderPreview();
});

languageTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeLang = tab.dataset.lang;
    languageTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });
    renderPreview();
    track("preview_language_changed", { language: activeLang });
  });
});

generateButton.addEventListener("click", () => {
  renderPreview();
  track("form_completed", { source: "manual_preview_button" });
  setStatus(builderStatus, "プレビューを更新しました。右側の Guest preview を確認してください。");
  document.querySelector("#preview").scrollIntoView({ behavior: "smooth", block: "start" });
});

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  const data = getFormData();
  if (!email || !document.querySelector("#email").checkValidity()) {
    setStatus(emailStatus, "有効なメールアドレスを入力してください。");
    return;
  }

  const sampleLink = createSampleLink(data.shopName);
  const dmTemplate =
    "Please check our booking guide before making a reservation. It includes cancellation, late arrival, payment, and pre-service notes.";
  localStorage.setItem("sgc_lead", JSON.stringify({ email, ...data, sampleLink }));
  track("email_submitted_for_link", {
    serviceType: data.serviceType,
    hasShopLink: Boolean(data.shopLink),
  });

  linkResult.hidden = false;
  linkResult.innerHTML = `
    <strong>確認リンクのサンプルを作成しました。</strong>
    <p>実運用版では、このリンクを Instagram DM、LINE、Hot Pepper 備考、Google Business に貼れます。</p>
    <code>${sampleLink}</code>
    <div class="link-actions">
      <button class="button secondary" type="button" id="copyLink">リンクをコピー</button>
      <button class="button secondary" type="button" id="copyDm">DM文をコピー</button>
      <button class="button primary" type="button" id="proInterest">顧客回答・写真を受け取る Pro 版を試す</button>
    </div>
  `;
  setStatus(emailStatus, "確認リンクを作成しました。下に表示されています。");
  linkResult.scrollIntoView({ behavior: "smooth", block: "center" });

  document.querySelector("#copyLink").addEventListener("click", async () => {
    await navigator.clipboard.writeText(sampleLink);
    track("sample_link_copied", { email });
    setStatus(emailStatus, "確認リンクをコピーしました。");
  });

  document.querySelector("#copyDm").addEventListener("click", async () => {
    await navigator.clipboard.writeText(dmTemplate);
    track("dm_template_copied", { email });
    setStatus(emailStatus, "Instagram DM 用の文面をコピーしました。");
  });

  document.querySelector("#proInterest").addEventListener("click", () => {
    track("pro_interest_clicked", { email });
    linkResult.insertAdjacentHTML(
      "beforeend",
      "<p><strong>Pro 版への関心を記録しました。</strong> 次は顧客回答、写真、policy checkbox を受け取れるフォームを追加します。</p>",
    );
  });
});

restoreState();
renderPreview();
