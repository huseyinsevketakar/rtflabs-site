(function () {
  var EN = {
    "nav.how": "How it works", "nav.tests": "Tests", "nav.ai": "AI", "nav.team": "Team", "nav.contact": "Contact", "nav.cta": "Become a pilot manufacturer",
    "ft.home": "Home", "ft.faq": "FAQ", "ft.n": "An early-stage startup in the concept phase.",
    "hero.kicker": "UAV end-of-line test cell · concept", "hero.h1a": "Not a test flight.", "hero.h1b": "A test cell.",
    "hero.lede": "An AI-assisted end-of-line test cell for mass-produced UAVs. Every unit is measured with the same procedure, judged and logged before it leaves the factory.",
    "hero.cta1": "Become a pilot manufacturer", "hero.cta2": "How it works", "hero.status": "Prototype in development · Ankara",
    "leg.1": "Thermal camera", "leg.2": "Machine-vision cameras", "leg.3": "Safety cage", "leg.4": "Load cell · thrust", "leg.5": "Vibration platform", "leg.6": "Power supply · NVIDIA Jetson",
    "strip.lab": "TEST SEQUENCE · TARGET ~5 MIN", "seq.1": "Motor/ESC", "seq.2": "Thrust", "seq.3": "Vibration", "seq.4": "Connections", "seq.5": "Servo", "seq.6": "Thermal",
    "pb.h": "Production is scaling. Testing can't keep up.",
    "pb.1h": "Manual testing", "pb.1p": "At most manufacturers, every UAV gets a short piloted test flight or a manual check by a technician.",
    "pb.2h": "Bottleneck", "pb.2p": "Testing that depends on pilots and weather becomes the slowest link as volumes grow.",
    "pb.3h": "Missed defects", "pb.3p": "Unbalanced props, weak solder joints, loose connectors and overheating ESCs often go unnoticed in a short flight.",
    "pb.4h": "No record", "pb.4p": "Results aren't captured systematically, so nobody can trace where a defect came from.",
    "how.k": "How it works", "how.h": "Four steps. The same procedure for every unit.",
    "how.1h": "Load", "how.1p": "An operator places the UAV from the line into the cell's modular fixture.",
    "how.2h": "Test", "how.2p": "The cell runs six tests automatically, targeting about 5 minutes per unit.",
    "how.3h": "Decide", "how.3p": "AI compares the measurements with a known-good profile: PASS or FAIL, with the likely cause.",
    "how.4h": "Log", "how.4p": "The result is logged to the quality dashboard by serial number.",
    "ts.k": "Tests", "ts.h": "Sensors measure what a pilot's eye misses.",
    "t1.w": "Per-motor current and RPM", "t1.h": "Programmable power supply and ESC telemetry (DShot)",
    "t2.n": "Thrust", "t2.w": "Total thrust across throttle steps", "t2.h": "Measured with a load cell and compared with the reference band of known-good units.",
    "t3.n": "Vibration · prop balance", "t3.w": "Unbalanced props, bearing issues", "t3.h": "Per-motor frequency analysis with an accelerometer and microphone",
    "t4.u": "dropout", "t4.n": "Shake screen", "t4.w": "Loose connectors, bad solder", "t4.h": "Telemetry, video and IMU are monitored under a short shake; a dropout means a loose connection.",
    "t5.n": "Servo · control surfaces", "t5.w": "Servo angles on fixed-wing and VTOL", "t5.h": "Commanded and measured angles are compared using a camera and machine vision.",
    "t6.u": "°C/s", "t6.n": "Thermal analysis", "t6.w": "Overheating components", "t6.h": "A thermal camera tracks heating rate rather than absolute temperature; bad solder and failing phases heat up faster.",
    "vd.k": "Overview", "vd.h": "RTFLab in 1 minute 46 seconds.", "vd.n": "Concept visualization; visuals and values are illustrative.",
    "ai.k": "AI and data", "ai.h": "Learns from little data. Logs every unit.",
    "ai.1": "Learns a reference profile from a small set of good units and flags anything that deviates.",
    "ai.2": "Adapts quickly to a new UAV model without collecting defective samples.",
    "ai.3": "Runs inside the cell on an NVIDIA Jetson edge computer.",
    "ai.4": "Quality dashboard: first-pass yield, defect breakdown, root-cause analysis and multi-line tracking.",
    "pn.t": "Quality Dashboard", "pn.tag": "Illustrative data", "pn.k1": "First-pass yield", "pn.k2": "Tested today", "pn.k3": "Failed units",
    "pn.c1": "Serial", "pn.c2": "Result", "pn.c3": "Cause", "pn.fail": "FAIL", "pn.fail2": "FAIL", "pn.pass": "PASS", "pn.pass2": "PASS",
    "pn.r1": "M3 prop imbalance", "pn.r4": "ESC-2 fast heating",
    "md.k": "Modularity", "md.h": "One cell. Modular fixtures.", "md.1": "FPV and commercial platforms · initial focus", "md.2": "Hybrid platforms", "md.3h": "Fixed-wing", "md.3": "Up to 2 m wingspan",
    "wy.k": "Why RTFLab", "wy.h": "Faster testing. Lower cost. Fewer field failures.",
    "wy.1h": "Independent of pilots and weather", "wy.1p": "The same standard, at any hour of the day.",
    "wy.2h": "Defects stay in the factory", "wy.2p": "Fewer returns, warranty claims and mission failures.",
    "wy.3h": "Traceable quality", "wy.3p": "A logged test report for every unit; quality evidence for defense and enterprise customers.",
    "wy.4h": "Ready-made platform", "wy.4p": "Mid-size makers get automated testing without building their own; large makers stop building a custom rig for every new line.",
    "wy.5h": "Accessible and replicable", "wy.5p": "A modular cell at a lower cost than robot-arm, project-based systems.",
    "wy.bizb": "Business model:", "wy.biz": "cell sales plus an annual software license for the quality dashboard and AI.",
    "rd.k": "Roadmap", "rd.h": "From a test cell to a test center.", "rd.now": "Now",
    "rd.1h": "Prototype cell", "rd.1p": "FPV and small multirotor", "rd.2h": "Pilot manufacturer", "rd.2p": "Field validation on a real production line",
    "rd.3h": "New fixtures", "rd.3p": "VTOL, fixed-wing and a multi-line dashboard", "rd.4h": "Test center", "rd.4p": "An end-to-end UAV test center with environmental and endurance testing",
    "tm.k": "Team", "tm.h": "A team that has designed, coded and flown UAVs in competition.",
    "tm.cap": "Left to right: Mesut Ensar Yazar, Mehmet Salih Taştan, Hüseyin Şevket Akar", "tm.more": "Meet the team →",
    "tm.1r": "Co-founder · AI and Software", "tm.1s": "METU Electrical and Electronics Engineering",
    "tm.2r": "Co-founder · Hardware and Systems Integration", "tm.2s": "TOBB ETU Electrical and Electronics Engineering",
    "tm.3r": "Co-founder · Embedded and Interface Software", "tm.3s": "METU Electrical and Electronics Engineering",
    "tm.aw": "With team ALTEK: TEKNOFEST Fighting UAV Competition finalist in 2025 and 2026 · 2026 Most Original Software Award",
    "ct.k": "Contact", "ct.h": "If you build UAVs at scale, let's talk.", "ct.p": "Become a pilot manufacturer and plan the cell's first deployment with us. We are also open to investor and program conversations.",
    "ct.l": "Email", "ct.copy": "Copy", "ct.form": "Draft your message",
    "ek.k": "Founding team · from team ALTEK", "ek.h": "A team that knows how to design, fly and test UAVs.",
    "ek.lede": "RTFLab was founded by three friends from METU and TOBB ETU Electrical and Electronics Engineering who worked together for two years on team ALTEK in the TEKNOFEST Fighting UAV Competition. We designed, built, flew and tested our own competition UAVs.",
    "ek.s1u": "YEARS", "ek.s1": "Building and field-testing together on the same team", "ek.s2u": "FINALS", "ek.s2": "TEKNOFEST Fighting UAV · 2025 and 2026", "ek.s3u": "AWARD", "ek.s3": "2026 Most Original Software Award",
    "ek.pk": "Founders", "ek.ph": "Who does what?",
    "ek.1a": "Anomaly detection and the test decision engine", "ek.1b": "Computer vision and embedded AI (YOLO, TensorRT, NVIDIA Jetson)", "ek.1c": "Business development, customer meetings and pilot programs", "ek.1d": "Product management and technical coordination",
    "ek.2a": "Test cell, fixture and measurement hardware design", "ek.2b": "Electronic systems integration", "ek.2c": "Autonomy and route planning (ArduPilot, DroneKit)", "ek.2d": "Planning and running field tests",
    "ek.3a": "Flight-controller communication and test software (MAVLink, DroneKit, SITL)", "ek.3b": "Avionics architecture, power distribution and sensor/comms integration", "ek.3c": "Real-time telemetry processing", "ek.3d": "Web interface that shows test results (quality dashboard)",
    "ek.sk": "Shared experience", "ek.sh": "A field-proven technology base",
    "ek.sp": "We have validated the systems we built for autonomous flight, guidance, route planning, real-time computer vision and embedded AI by flying them in the field. RTFLab's test software, flight-controller communication and AI components are built on this foundation.",
    "ek.cam": "Industrial camera", "ek.ch": "Want to meet the team?", "ek.cp": "If you are a manufacturer, investor or program representative, write to us and let's talk about the cell and our roadmap.",
    "il.lede": "RTFLab is in the concept and prototype phase. We want to build the first cell together with pilot manufacturers who will test their products with us.",
    "il.wk": "Who we want to talk to", "il.wh": "What can you write to us about?",
    "il.c1h": "Pilot manufacturer", "il.c1p": "Try the prototype cell with your own products, and let's define the test procedure for your UAV together.",
    "il.c2h": "Investors and programs", "il.c2p": "We are happy to walk you through the startup, our roadmap and our team.",
    "il.c3h": "Partnerships", "il.c3p": "We'd like to meet companies and institutions in sensing, measurement and automation that we could work with.",
    "il.fk": "Message builder", "il.fh": "Share a few details and your email is ready.", "il.fp": "Fill in the form and your email text appears on the right. Copy it and send it to us from your own email.",
    "f.name": "Full name", "f.company": "Company", "f.topic": "Topic", "f.type": "UAV type you produce", "f.vol": "Monthly production volume", "f.msg": "Your message",
    "ph.name": "Your full name", "ph.company": "Company name", "ph.msg": "How do you test your UAVs today? Which defects do you run into most?",
    "o.pilot": "I want to be a pilot manufacturer", "o.invest": "Investment / accelerator program", "o.collab": "Partnership", "o.other": "Other",
    "o.multi": "Multirotor / FPV", "o.vtol": "VTOL", "o.fixed": "Fixed-wing", "o.many": "More than one type", "o.none": "I'm not a manufacturer",
    "o.v0": "Prefer not to say", "o.v1": "Fewer than 50", "o.v2": "50 – 500", "o.v3": "More than 500",
    "il.pv": "Email text", "il.copy": "Copy text", "il.open": "Open in email app",
    "il.hint": "This page doesn't send messages. Copy the text and send it from your own email to the address below.",
    "il.loc": "Location",
    "faq.k": "FAQ", "faq.h": "What manufacturers ask first",
    "q1": "Which UAVs can you test?", "a1": "Our initial focus is FPV and small multirotors. VTOL and fixed-wing UAVs up to 2 m wingspan are on our roadmap through modular fixtures.",
    "q2": "How long does a test take?", "a2": "We are targeting about 5 minutes per unit. The exact time will be set during the prototype phase, depending on the UAV type and the test recipe.",
    "q3": "How does the cell fit into my production line?", "a3": "The cell sits at the end of the line. An operator places the UAV in the fixture and starts the test; we are designing it to fit your existing line without major changes.",
    "q4": "What does being a pilot manufacturer mean?", "a4": "Trying the prototype cell with your own products, defining the test procedure with us and giving feedback. We agree on the terms together.",
    "q5": "How much data does the AI need?", "a5": "The system is designed to build a reference profile from a small number of good units. You don't need to collect defective samples.",
    "q6": "Is the product for sale yet?", "a6": "No. RTFLab is in the concept and prototype phase; we are developing the first cell together with pilot manufacturers."
  };
  var COPIED = { tr: "Kopyalandı", en: "Copied" };
  var EMAIL = "huseyinsevketakar@gmail.com";

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var phNodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n-ph]"));
  var TR = {};
  nodes.forEach(function (el) { TR[el.getAttribute("data-i18n")] = el.textContent; });
  phNodes.forEach(function (el) { TR[el.getAttribute("data-i18n-ph")] = el.getAttribute("placeholder"); });
  var current = "tr";
  function t(k) { var d = current === "en" ? EN : TR; return d[k] != null ? d[k] : (TR[k] || ""); }

  function apply(lang) {
    current = lang;
    nodes.forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    phNodes.forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    document.documentElement.lang = lang;
    var trb = document.getElementById("lang-tr"), enb = document.getElementById("lang-en");
    if (trb) trb.setAttribute("aria-pressed", String(lang === "tr"));
    if (enb) enb.setAttribute("aria-pressed", String(lang === "en"));
    try { localStorage.setItem("rtf-lang", lang); } catch (e) {}
    compose();
  }
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  // mobil menü
  var top = document.getElementById("site-top"), menuBtn = document.getElementById("menu-btn");
  if (top && menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = !top.classList.contains("open");
      top.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll("#site-nav a").forEach(function (a) {
      a.addEventListener("click", function () { top.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); });
    });
  }

  // kopyalama
  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.querySelector(btn.getAttribute("data-copy"));
      if (!target) return;
      var text = target.textContent.trim();
      var key = btn.getAttribute("data-i18n");
      var done = function () { btn.textContent = COPIED[current]; setTimeout(function () { btn.textContent = t(key); }, 1800); };
      var fallback = function () { var r = document.createRange(); r.selectNodeContents(target); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
        else fallback();
      } catch (e) { fallback(); }
    });
  });

  // mesaj hazırlayıcı
  var form = document.getElementById("composer"), pre = document.getElementById("preview"), mailto = document.getElementById("mailto-link");
  function optText(sel) { var o = sel.options[sel.selectedIndex]; return o ? o.textContent.trim() : ""; }
  function compose() {
    if (!form || !pre) return;
    var en = current === "en";
    var name = form.elements.name.value.trim(), company = form.elements.company.value.trim(), msg = form.elements.msg.value.trim();
    var topic = optText(form.elements.topic), type = optText(form.elements.type), vol = optText(form.elements.vol);
    var subject = "RTFLab · " + topic + (company ? " · " + company : "");
    var lines = [];
    lines.push((en ? "Subject: " : "Konu: ") + subject, "", en ? "Hello RTFLab team," : "Merhaba RTFLab ekibi,", "");
    lines.push((en ? "Name: " : "Ad soyad: ") + (name || "—"));
    lines.push((en ? "Company: " : "Şirket: ") + (company || "—"));
    lines.push((en ? "UAV type: " : "İHA tipi: ") + type);
    lines.push((en ? "Monthly volume: " : "Aylık üretim: ") + vol, "");
    lines.push(msg || (en ? "[Your message]" : "[Mesajınız]"), "");
    lines.push(en ? "Best regards," : "Saygılarımla,", name || "");
    var body = lines.slice(2).join("\n");
    pre.textContent = (en ? "To: " : "Kime: ") + EMAIL + "\n" + lines.join("\n");
    if (mailto) mailto.setAttribute("href", "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body));
  }
  if (form) {
    form.addEventListener("input", compose);
    form.addEventListener("change", compose);
    form.addEventListener("submit", function (e) { e.preventDefault(); });
  }

  var saved = null;
  try { saved = localStorage.getItem("rtf-lang"); } catch (e) {}
  apply(saved === "en" ? "en" : "tr");
})();
