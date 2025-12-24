
export type Language = 'ar' | 'en';

export enum ToolCategory {
  RECON = 'RECON',
  SCANNING = 'SCANNING',
  EXPLOITATION = 'EXPLOITATION',
  WIRELESS = 'WIRELESS',
  WEB_APP = 'WEB_APP',
  FORENSICS = 'FORENSICS',
  OSINT = 'OSINT',
  REVERSE = 'REVERSE',
  PASSWORD = 'PASSWORD',
  POST_EXPLOIT = 'POST_EXPLOIT'
}

export interface Payload {
  id: string;
  title: string;
  code: string;
  type: 'Bash' | 'Python' | 'PHP' | 'PowerShell';
}

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  description: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  commandExample?: string;
  installationSteps: string[];
  icon: string;
  popularity: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
