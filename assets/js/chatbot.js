/* ===================================================
   Portfolio Assistant Chatbot — no API keys, no AI model
   All knowledge sourced directly from Abhay's CV.
   =================================================== */

(function () {
  // ── KNOWLEDGE BASE ──────────────────────────────────────────────────────────
  const KB = {
    greeting: [
      "Hey there! 👋 I'm Abhay's portfolio assistant. Ask me anything about him — his skills, projects, experience, education, and more!",
      "Hi! 😊 Welcome to Abhay's portfolio. I can tell you all about his tech stack, projects, work history, awards, or how to reach him!",
      "Hello! Ask me anything about Abhay Prasanna Rao — his projects, skills, career, or education. What would you like to know?"
    ],
    about: "Abhay Prasanna Rao is a Software Engineer & AI Architect currently working full-time at Kingland Systems in Ames, Iowa. He graduated Summa Cum Laude (GPA 3.90) from Iowa State University in December 2025 with a B.S. in Computer Science, Minor in Data Science & Artificial Intelligence. He's a 3x Hackathon Winner passionate about AI, cloud architecture, and full-stack development.",

    skills: "Abhay's tech stack spans:\n\n💻 **Languages:** Python, Java, JavaScript, C++, R, SQL, HTML, CSS\n\n⚙️ **Frameworks:** React.js, Spring Boot, Node.js, Express.js, .NET, Bootstrap\n\n☁️ **Cloud & DevOps:** AWS (Lambda, S3, ECS, Bedrock, Fargate, RDS, ElastiCache), Microsoft Azure, Google Cloud, Docker, Terraform, GitLab CI/CD\n\n🗄️ **Databases:** MySQL, MongoDB, Neo4j, MariaDB, Azure SQL, Redis\n\n🤖 **AI/ML:** Machine Learning, Deep Learning, Computer Vision, NLP, RAG (Retrieval-Augmented Generation)\n\n🔧 **Tools:** Git, GitHub, GitLab, Postman, Jira, IntelliJ IDEA, VS Code",

    experience: {
      overview: "Abhay has held 5+ professional roles:\n\n1. **Software Engineer** — Kingland Systems (Jan 2026–Present)\n2. **Software Developer** — ISU Extension & Outreach (Sep 2024–Dec 2025)\n3. **Advanced SE Intern** — Kingland Systems (May–Aug 2025)\n4. **Computer Science Tutor** — ISU Academic Success Center (Sep–Nov 2024)\n5. **Lead IT Technician** — ISU TechCyte Service Center (Aug 2022–Sep 2024)\n\nWant details on any of these?",
      kingland: "**Software Engineer at Kingland Systems** (Jan 2026–Present)\n\nAbhay manages and updates AWS cloud infrastructure using Terraform, AWS Console, and AWS CLI across EC2, S3, ECS with Fargate, ECR, RDS, ElastiCache (Redis), CloudWatch, Route53, and Transfer Family. He collaborates with client support teams on the Independence SaaS platform, modernizes legacy JSP/XML components, interfaces application layers with Redis, and supports CI/CD pipelines via GitLab.",
      isuExtension: "**Software Developer at ISU Extension & Outreach** (Sep 2024–Dec 2025)\n\nAbhay architected the Indicator Portal platform (full-stack: DB schema, REST APIs, routing, Data Hub pages), led the Iowa Zoning Guide redesign (funded by Iowa Finance Authority), migrated an AI housing assistant to Anything LLM (RAG, Azure endpoints, ISU-branded UI), and built full-stack apps in React.js, Node.js, Express, and SQL across 5 concurrent projects.",
      intern: "**Advanced Software Engineer Intern at Kingland Systems** (May–Aug 2025)\n\nAbhay analyzed and remediated 60+ SAST security vulnerabilities, upgraded Java/Tomcat using Docker & GitLab CI/CD with zero downtime, architected AWS solutions (Lambda, S3, Batch, ECS, Secrets Manager) for SFTP infrastructure, eliminated 60+ libraries of technical debt, and prototyped an intelligent task assignment system using AWS Bedrock LLM."
    },

    projects: {
      overview: "Abhay has built 25+ projects! Some highlights:\n\n🏆 **ByteForce** — AI Crop Disease Detection (1st Place, Pi515 AI Challenge 2025, $5K prize)\n🤖 **Autonomous Chess Robot** — YOLOv8, ROS, UR10e robot arm, 98.7% accuracy\n🏆 **Cyclone Connect** — Campus app (1st Place among 52 teams, COMS 309)\n🛒 **Pixel Palace** — Full-stack e-commerce (React, Node, MongoDB)\n🎙️ **AIVIS** — AI Voice Assistant (Python, NLP, multi-API)\n\nAsk about any of these for details!",
      byteforce: "**ByteForce — AI Crop Disease Detection System** 🏆\n\n- Won 1st Place at the Pi515 AI Challenge 2025 among 8 finalist teams, earning a **$5,000 prize**\n- Led a team of 5 to tackle $220 billion in annual agricultural losses\n- Built CNNs achieving **95–98% accuracy** for disease detection in corn, soybeans & apples\n- Integrated real-time weather APIs and a sustainable farming recommendation engine\n- Presented at the Day of Innovation, Pappajohn Education Center, Des Moines\n\nStack: Python, React, Machine Learning, AWS",
      chess: "**Autonomous Chess Robot System** 🤖\n\n- Led a 4-person team building a fully autonomous chess-playing robot using a **UR10e industrial robot arm**\n- Computer vision pipeline (YOLOv8) achieving **98.7% mAP@0.5** for 12-class chess piece detection\n- Inverse kinematics solver achieving **<1mm positioning accuracy** across 64 board positions\n- Integrated **Stockfish** chess engine via ROS and WebSocket for master-level gameplay with <1.8s move processing\n- Transitioned from MuJoCo simulation to physical hardware with 99.5% uptime\n\nStack: Python, ROS, YOLOv8, Computer Vision, Robotics",
      cyclone: "**Cyclone Connect** 🏆\n\n- Won **1st Place among 52 teams** in COMS 309 at Iowa State University\n- Earned **Best Project Manager** award + recognized as **Best Frontend Developer** by the professor\n- Comprehensive campus management app: class/work schedules, shift planning, budget tools, real-time chat\n- Multi-user system with separate portals for Students, Advisors/Professors, and Faculty\n- Spring Boot backend with MySQL, automated CI/CD via GitLab, Android Studio frontend\n\nStack: Java, Spring Boot, MySQL, Android Studio",
      pixel: "**Pixel Palace**\n\nFull-stack e-commerce platform with RESTful APIs, user authentication, inventory management, and secure payment processing with multi-user roles.\n\nStack: React, Node.js, Express, MongoDB",
      aivis: "**AIVIS — AI Voice Interaction System**\n\nVoice-activated personal assistant with real-time news, weather forecasting, web navigation, and language translation. Integrated Wolfram Alpha, OpenWeatherMap, and NewsAPI.\n\nStack: Python, NLP, API Integration"
    },

    education: "**Iowa State University** (Aug 2022–Dec 2025)\nB.S. Computer Science, Minor in Data Science & Artificial Intelligence\n🎓 **Graduated Summa Cum Laude — Highest Distinction**\n📊 **GPA: 3.90**\nDean's List every semester (Aug 2022–Dec 2025)\nTop 2% in Spring 2024 semester (perfect 4.0 GPA)\n\nPreviously at The National Pre-University College (Grade 11–12) and Capitol Public School (Grade 9–10).",

    awards: "Abhay is a **3x Hackathon Winner** with an impressive award record:\n\n🏆 **1st Place — Pi515 AI Challenge 2025** ($5,000 prize, Team ByteForce)\n🏆 **1st Place — COMS 309 Android App** (among 52 teams + Best Project Manager + Best Frontend Developer)\n🥇 **1st Place — National Science Day Competition 2022**\n🎓 **Graduated Summa Cum Laude** — Iowa State University, Dec 2025\n📚 **Dean's List** — Every semester, Aug 2022–Dec 2025\n📈 **Top 2%** in Spring 2024 (perfect 4.0 GPA)\n⭐ **Top 5 Finalist** — Ivy Data Visualization & Storytelling Case Competition (Fall 2024)",

    certifications: "Abhay holds the following professional certifications:\n\n🤖 **Salesforce Certified AI Associate** — AI fundamentals, ethical AI, Salesforce AI capabilities\n🧠 **IBM Applied AI Professional Certificate** — Watson AI, Python for AI, computer vision, chatbots\n🔬 **IBM AI Foundations Specialization** — ML, deep learning, intelligent virtual assistants\n🍎 **Apple Certified Technician** — MacBooks, iMacs, Apple hardware\n💻 **Dell Certified Technician** — Dell computer systems and peripherals",

    contact: "You can reach Abhay through:\n\n📧 **Email:** abhayprasannarao@gmail.com\n🔗 **LinkedIn:** linkedin.com/in/abhay-prasanna-rao\n💻 **GitHub:** github.com/Abhay-2004\n▶️ **YouTube:** Coder's Project (educational programming channel)\n🌐 **Website:** abhayprasannarao.com",

    resume: "You can view or download Abhay's latest CV/Resume here:\n📄 <a href='https://drive.google.com/file/d/1yiKCMjyhGYB2gk_bSJ46LVciFSrsJlV7/view?usp=sharing' target='_blank' style='color:#d4aaff;text-decoration:underline;'>Open CV / Resume</a>",

    leadership: "Beyond his technical work, Abhay is active in leadership:\n\n👨‍💻 **Tech Lead — Google Developer Club (GDC), ISU** (Oct 2023–Present)\nConducts workshops on Git, RAG, AI integration, and client-server architecture. Leads mock technical interviews and coding challenge sessions.\n\n🎓 **DIS Team Leader — Destination Iowa State** (Aug 2023)\nMentored 20 incoming students through university orientation.\n\n📺 **YouTube Content Creator — Coder's Project** (Jan 2020–Present)\nProduces tutorials on C++, Java, Python, LeetCode, and HackerRank problems.",

    location: "Abhay is based in **Ames, Iowa** 📍. He studied and worked at Iowa State University and currently works full-time at Kingland Systems, also based in Ames, Iowa."
  };

  // ── CONTEXT-AWARE CHIPS ──────────────────────────────────────────────────────
  // Default chips shown at start and after generic responses
  const DEFAULT_CHIPS = [
    "What are his skills?",
    "Tell me about his projects",
    "Where does he work?",
    "Education & GPA",
    "Awards & hackathons",
    "How to contact Abhay?"
  ];

  // Chips shown after specific response types
  const CONTEXT_CHIPS = {
    projects_overview: [
      "ByteForce (AI Challenge 🏆)",
      "Autonomous Chess Robot 🤖",
      "Cyclone Connect 🏆",
      "Pixel Palace",
      "AIVIS Voice Assistant"
    ],
    experience_overview: [
      "Kingland Systems (current role)",
      "ISU Extension & Outreach",
      "Kingland Internship",
      "CS Tutor role"
    ],
    skills: [
      "Tell me about his projects",
      "Where does he work?",
      "His AI/ML expertise",
      "Cloud & AWS skills"
    ],
    awards: [
      "ByteForce (AI Challenge 🏆)",
      "Cyclone Connect 🏆",
      "His education & GPA",
      "His certifications"
    ],
    education: [
      "His awards & honors",
      "What are his skills?",
      "Where does he work?",
      "How to contact Abhay?"
    ],
    contact: [
      "View his resume/CV",
      "His projects",
      "His experience"
    ]
  };

  // ── MATCHING ENGINE ─────────────────────────────────────────────────────────
  // Returns { text, context } — context maps to a CONTEXT_CHIPS key (or null for default)
  function getResponse(input) {
    const t = input.toLowerCase().trim();

    // Greetings
    if (/^(hi|hey|hello|howdy|sup|hiya|good\s*(morning|afternoon|evening))/.test(t))
      return { text: rand(KB.greeting), context: null };

    // Resume / CV
    if (/\b(resume|cv|download|pdf)\b/.test(t))
      return { text: KB.resume, context: "contact" };

    // Specific projects
    if (/\b(byteforce|crop|disease|agricultural|pi\s*515|pi515)\b/.test(t))
      return { text: KB.projects.byteforce, context: "projects_overview" };
    if (/\b(chess|robot|robotic|ur10|yolo|stockfish|ros)\b/.test(t))
      return { text: KB.projects.chess, context: "projects_overview" };
    if (/\b(cyclone\s*connect|cyclone|coms\s*309|campus\s*app|android)\b/.test(t))
      return { text: KB.projects.cyclone, context: "projects_overview" };
    if (/\b(pixel\s*palace|pixel|ecommerce|e-commerce|shop)\b/.test(t))
      return { text: KB.projects.pixel, context: "projects_overview" };
    if (/\b(aivis|voice\s*assistant|voice|avis)\b/.test(t))
      return { text: KB.projects.aivis, context: "projects_overview" };

    // Projects general
    if (/\b(projects?|built|made|created|developed|github|portfolio\s*work)\b/.test(t))
      return { text: KB.projects.overview, context: "projects_overview" };

    // Specific experience
    if (/\b(kingland|software\s*engineer|full[- ]?time|current\s*job|current\s*role)\b/.test(t))
      return { text: KB.experience.kingland, context: "experience_overview" };
    if (/\b(extension|outreach|isu\s*extension|indicator\s*portal|zoning|rag)\b/.test(t))
      return { text: KB.experience.isuExtension, context: "experience_overview" };
    if (/\b(intern(ship)?|advanced\s*software|sast|security\s*vuln|bedrock)\b/.test(t))
      return { text: KB.experience.intern, context: "experience_overview" };

    // Experience general
    if (/\b(experience|work(ed)?|job|role|career|employ|position|company)\b/.test(t))
      return { text: KB.experience.overview, context: "experience_overview" };

    // Skills
    if (/\b(skills?|tech(nolog)?|stack|languages?|frameworks?|tools?|cloud|aws|azure|react|python|java|ai\/ml|machine\s*learning)\b/.test(t))
      return { text: KB.skills, context: "skills" };

    // Education
    if (/\b(educat|degree|university|isu|iowa\s*state|gpa|grade|summa|cum\s*laude|graduat|computer\s*science|minor|college|study|studied|major)\b/.test(t))
      return { text: KB.education, context: "education" };

    // Awards
    if (/\b(awards?|hackathons?|win|won|prizes?|honors?|recogni|dean|top\s*2|achievements?|ivy|competitions?|distinctions?)\b/.test(t))
      return { text: KB.awards, context: "awards" };

    // Certifications
    if (/\b(certif|salesforce|ibm|apple\s*tech|dell\s*tech|certified)\b/.test(t))
      return { text: KB.certifications, context: "education" };

    // Leadership
    if (/\b(lead|gdg|google\s*developer|youtube|channel|tutor|mentor|club|volunteer|dis\s*team|teaching|workshop)\b/.test(t))
      return { text: KB.leadership, context: null };

    // Contact
    if (/\b(contact|email|reach|linkedin|social|connect|hire|touch|phone|number|message|dm)\b/.test(t))
      return { text: KB.contact, context: "contact" };

    // Location
    if (/\b(locat|where.*live|where.*based|from|city|ames|iowa)\b/.test(t))
      return { text: KB.location, context: null };

    // About / who
    if (/\b(who|about|tell\s*me|introduce|background|summary|overview|yourself)\b/.test(t))
      return { text: KB.about, context: null };

    // Fallback — return with special context to show helpful suggestion chips
    return {
      text: "Hmm, I'm not sure about that! Here are some things I can help with:",
      context: "fallback"
    };
  }

  function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Typing delay scales with response length — feels more natural
  function typingDelay(text) {
    const base = 500;
    const perChar = 0.6;
    return Math.min(base + text.length * perChar, 1600) + Math.random() * 200;
  }

  // ── DOM REFS ─────────────────────────────────────────────────────────────────
  const bubble     = document.getElementById("chat-bubble");
  const panel      = document.getElementById("chat-panel");
  const closeBtn   = document.getElementById("chat-close");
  const messagesEl = document.getElementById("chat-messages");
  const suggestEl  = document.getElementById("chat-suggestions");
  const inputEl    = document.getElementById("chat-input");
  const sendBtn    = document.getElementById("chat-send");

  // ── NOTIFICATION BADGE + TOOLTIP ─────────────────────────────────────────────
  // Inject badge element inside bubble and tooltip above it
  const badge = document.createElement("span");
  badge.id = "chat-notif-badge";
  badge.textContent = "1";
  bubble.appendChild(badge);

  const tooltip = document.createElement("div");
  tooltip.id = "chat-tooltip";
  tooltip.textContent = "👋 Have questions about Abhay? Ask me!";
  document.body.appendChild(tooltip);

  let notifShown = false;
  let notifTimer = setTimeout(() => {
    if (!opened) {
      badge.classList.add("show");
      tooltip.classList.add("show");
      notifShown = true;
    }
  }, 3000);

  function clearNotif() {
    clearTimeout(notifTimer);
    badge.classList.remove("show");
    tooltip.classList.remove("show");
  }

  // ── OPEN / CLOSE ─────────────────────────────────────────────────────────────
  let opened = false;

  bubble.addEventListener("click", openChat);
  closeBtn.addEventListener("click", closeChat);

  // Also dismiss tooltip on hover
  bubble.addEventListener("mouseenter", () => {
    if (notifShown) tooltip.classList.remove("show");
  });
  bubble.addEventListener("mouseleave", () => {
    if (notifShown && !opened) tooltip.classList.add("show");
  });

  function openChat() {
    clearNotif();
    panel.classList.add("open");
    bubble.style.display = "none";
    if (!opened) {
      opened = true;
      setTimeout(() => {
        botMessage(rand(KB.greeting), null);
      }, 350);
    }
    setTimeout(() => inputEl.focus(), 400);
  }

  function closeChat() {
    panel.classList.remove("open");
    bubble.style.display = "flex";
  }

  // ── SEND MESSAGE ─────────────────────────────────────────────────────────────
  sendBtn.addEventListener("click", handleSend);
  inputEl.addEventListener("keydown", e => {
    if (e.key === "Enter") handleSend();
  });

  function handleSend() {
    const text = inputEl.value.trim();
    if (!text) return;
    inputEl.value = "";
    userMessage(text);
    clearChips();

    const { text: responseText, context } = getResponse(text);
    const delay = typingDelay(responseText);

    showTyping();
    setTimeout(() => {
      removeTyping();
      botMessage(responseText, context);
    }, delay);
  }

  // ── MESSAGE HELPERS ──────────────────────────────────────────────────────────
  function userMessage(text) {
    const row = document.createElement("div");
    row.className = "msg-row user";
    row.innerHTML = `<div class="msg-bubble">${escHtml(text)}</div>`;
    messagesEl.appendChild(row);
    scrollBottom();
  }

  function botMessage(html, context) {
    const row = document.createElement("div");
    row.className = "msg-row bot";
    row.innerHTML = `
      <div class="msg-icon"><i class="fas fa-comment-dots"></i></div>
      <div class="msg-bubble">${formatMarkdown(html)}</div>`;
    messagesEl.appendChild(row);
    scrollBottom();
    renderChips(context);
  }

  function showTyping() {
    const row = document.createElement("div");
    row.className = "msg-row bot";
    row.id = "typing-indicator";
    row.innerHTML = `
      <div class="msg-icon"><i class="fas fa-comment-dots"></i></div>
      <div class="msg-bubble">
        <div class="typing-dots"><span></span><span></span><span></span></div>
      </div>`;
    messagesEl.appendChild(row);
    scrollBottom();
  }

  function removeTyping() {
    const t = document.getElementById("typing-indicator");
    if (t) t.remove();
  }

  // ── CHIPS ────────────────────────────────────────────────────────────────────
  function renderChips(context) {
    suggestEl.innerHTML = "";
    const chips = (context && CONTEXT_CHIPS[context]) ? CONTEXT_CHIPS[context] : DEFAULT_CHIPS;
    chips.forEach(label => {
      const btn = document.createElement("button");
      btn.className = "chip";
      btn.textContent = label;
      btn.addEventListener("click", () => {
        inputEl.value = label;
        handleSend();
      });
      suggestEl.appendChild(btn);
    });
  }

  function clearChips() {
    suggestEl.innerHTML = "";
  }

  // ── UTILS ────────────────────────────────────────────────────────────────────
  function scrollBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function escHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // Lightweight markdown: **bold**, newlines → <br>, list dashes → bullets
  function formatMarkdown(str) {
    return str
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>")
      .replace(/<br>- /g, "<br>• ");
  }

})();
