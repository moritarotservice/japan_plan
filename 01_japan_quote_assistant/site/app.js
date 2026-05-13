const STORAGE_KEY = "salon_guest_check_mvp";

const form = document.querySelector("#builder");
const preview = document.querySelector("#guestPreview");
const generateButton = document.querySelector("#generateButton");
const emailForm = document.querySelector("#emailForm");
const linkResult = document.querySelector("#linkResult");
const builderStatus = document.querySelector("#builderStatus");
const emailStatus = document.querySelector("#emailStatus");

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
  const paymentText = data.payments.length > 0 ? data.payments.join(", ") : "Please ask the salon.";
  const intakeItems =
    data.intake.length > 0
      ? data.intake.map((item) => `<li>${item}</li>`).join("")
      : "<li>Please check important notes before your visit.</li>";

  preview.innerHTML = `
    <header>
      <p class="eyebrow">Booking guide</p>
      <h3>${escapeHtml(data.shopName)}</h3>
      <p class="meta">${escapeHtml(data.serviceType)} · ${escapeHtml(data.location)}</p>
    </header>

    <section>
      <h3>Before booking</h3>
      <p>Please read this guide before confirming your appointment. Final service availability will be confirmed by the salon.</p>
    </section>

    <section>
      <h3>Cancellation policy</h3>
      <p>${escapeHtml(data.cancelPolicy)}</p>
    </section>

    <section>
      <h3>Late arrival</h3>
      <p>${escapeHtml(data.latePolicy)}</p>
    </section>

    <section>
      <h3>Payment methods</h3>
      <p>${escapeHtml(paymentText)}</p>
    </section>

    <section>
      <h3>Before your visit</h3>
      <ul>${intakeItems}</ul>
      ${data.extraNotes ? `<p>${escapeHtml(data.extraNotes)}</p>` : ""}
    </section>

    <section>
      <h3>Send this before DM booking</h3>
      <p>Please check our booking guide before making a reservation. It includes cancellation, late arrival, payment, and pre-service notes.</p>
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
